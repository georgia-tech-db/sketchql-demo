import torch
from torch import nn
import numpy as np
import math

class EncoderCentroidLarger(nn.Module):
    """Model architecture for encoding clips."""
    def __init__(self, n_obj=4,n_att=4, atten_share = False):
        super().__init__()
        self.linears = nn.Sequential(nn.Linear(2*n_obj, 64),
                                     nn.ReLU(),
                                     nn.Linear(64, 128),
                                     nn.ReLU(),
                                     nn.Linear(128, 256))
        self.time_embed = nn.Parameter(torch.rand(1, 128, 256), requires_grad=True)
        encoder_layer = nn.TransformerEncoderLayer(d_model=512, dim_feedforward=1024, nhead=8, batch_first=True)
        self.trans_encoder = nn.TransformerEncoder(encoder_layer, num_layers=n_att)
    
    def forward(self, x):
        n_batch = x.shape[0]
        x_emb = self.linears(x)
        x_emb = torch.concat([x_emb, self.time_embed.repeat(n_batch, 1, 1)],dim=2)
        x_emb = self.trans_encoder(x_emb)
        return x_emb[:,0,:]


class EncoderModelWrapper:
    """Wrapper for encoder to perform similarity search"""
    def __init__(self, checkpoint_path,model, device, atten_share,n_att=4) -> None:
        self.device = device
        self.net = model
        self.net.to(self.device)
        checkpoint = torch.load(checkpoint_path, map_location=torch.device(self.device))
        self.net.load_state_dict(checkpoint['model_state_dict'])
        self.net.eval()
    
    def predict_embed(self, seq,batch_size = 3000):
        n_batch = math.ceil(seq.shape[0]/batch_size)
        embeds = []
        for i_batch in range(n_batch):
            seq_i = seq[i_batch*batch_size:(i_batch+1)*batch_size].to(self.device)
            seq_i_embd = self.net(seq_i)
            embeds.append(seq_i_embd)
        return torch.concat(embeds)

    def predict(self, query, seq):
        batch_size = 300
        n_batch = math.ceil(query.shape[0]/batch_size)
        probs = []
        for i_batch in range(n_batch):
            query_i = query[i_batch*batch_size:(i_batch+1)*batch_size].to(self.device)
            seq_i = seq[i_batch*batch_size:(i_batch+1)*batch_size].to(self.device)
            query_i_embd = self.net(query_i)
            seq_i_embd = self.net(seq_i)
            prob_i = torch.nn.functional.cosine_similarity(query_i_embd, seq_i_embd)
            prob_i = prob_i.detach().cpu().numpy()
            probs.append(prob_i)
        return np.concatenate(probs)
 


def numel(m: torch.nn.Module, only_trainable: bool = True):
    """
    Returns the total number of parameters used by `m` (only counting
    shared parameters once); if `only_trainable` is True, then only
    includes parameters with `requires_grad = True`
    """
    parameters = list(m.parameters())
    if only_trainable:
        parameters = [p for p in parameters if p.requires_grad]
    unique = {p.data_ptr(): p for p in parameters}.values()
    return sum(p.numel() for p in unique)