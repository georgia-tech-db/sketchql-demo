import numpy as np

def normalize_flatten_data_centroid(centroid, max_len=128, max_obj=4): #no time
    ratio = centroid.shape[1]/max_len
    keep_idx = np.array([int(i*ratio) for i in range(max_len)])
    centroid = centroid[:,keep_idx,:]
    #normalize
    x_bar = np.mean(centroid, axis=(0, 1))
    #centroid = centroid-x_bar
    x_std = np.std(centroid, axis=(0, 1))
    centroid = (centroid-x_bar)/(x_std+1e-6)

    centroid_pad = np.zeros(shape=(max_obj, centroid.shape[1], centroid.shape[2]))
    centroid_pad[:centroid.shape[0],:,:] = centroid
    centroid_pad_flat = [centroid_pad[i_obj] for i_obj in range(max_obj)]
    centroid_pad_flat = np.concatenate(centroid_pad_flat, axis=1)
    return centroid_pad_flat

def relative_to_center(centroids):
    mean = np.mean(centroids, axis=0)
    return centroids - mean