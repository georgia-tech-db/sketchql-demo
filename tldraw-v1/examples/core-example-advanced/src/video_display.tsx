import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const DisplayVid: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoData, setVideoData] = useState<{ filename: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to read video files from the folder
  const readVideosFromFolder = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/videos');
      if (!response.ok) {
        throw new Error('Failed to fetch video files');
      }
      const videosData = await response.json();

      if (!Array.isArray(videosData) || videosData.length === 0) {
        throw new Error('Invalid or empty video data received');
      }

      setVideoData(videosData);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to fetch video files. Please try again later.');
    }
  };

  return (
    <>
      <Button type="primary" onClick={readVideosFromFolder} style={{ borderColor: 'black', background: 'black', color: 'white' }}>Display Videos</Button>
      <Modal
        title="Videos"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800} // Set the width of the modal
      >
        {error && <p>{error}</p>}
        <div style={{ overflowX: 'auto' }}>
          {videoData.map((video, index) => (
            <VideoComponent key={index} filename={video.filename} />
          ))}
        </div>
      </Modal>
    </>
  );
};

interface VideoComponentProps {
  filename: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ filename }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/videos/${encodeURIComponent(filename)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video file');
        }
        console.log(response)
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();

    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [filename]);

  if (!videoUrl) {
    return <p>Loading...</p>;
  }

  return (
    <video controls style={{ maxWidth: '100%' }}> {/* Set max width for the video */}
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default DisplayVid;
