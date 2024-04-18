import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const QueryPlayer: React.FC = () => {
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [vidSrc, setVidSrc] = useState<string | null>(null);

  const openQuery = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/video_file', {
        method: 'GET',
        headers: {
          'Content-Type': 'video/mp4', 
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }

      const videoBlob = await response.blob();
      const url = URL.createObjectURL(videoBlob);
      setVidSrc(url);
      setIsQueryOpen(true);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  const closeQuery = () => {
    setIsQueryOpen(false);
    setVidSrc(null); 
  };

  return (
    <>
      <Button onClick={openQuery} style={{ marginRight: '10px', borderColor: 'black', background: 'black', color: 'white' }}>Open Query</Button>
      <Modal
        title="Replay Query"
        visible={isQueryOpen}
        onCancel={closeQuery}
        footer={null}
      >
        {vidSrc && (
          <div>
            <video controls style={{ width: '100%' }}>
              <source src={vidSrc} type="video/mp4" />
            </video>
          </div>
        )}
      </Modal>
    </>
  );
};

export default QueryPlayer;