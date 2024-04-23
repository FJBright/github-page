import React from 'react';

interface ImageContainerProps {
  imageUrl: string;
  width: number;
  height: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, width, height }) => {
  const containerStyle: React.CSSProperties = {
    width: `${width}px`,     // Set the width of the container
    height: `${height}px`,   // Set the height of the container
    overflow: 'hidden',      // Hide any overflow to prevent image stretching
    border: '1px solid #ccc', // Optional: Add a border for visualization
    borderRadius: '4px',     // Optional: Add border radius for rounded corners
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',           // Make the image fill the container width
    height: '100%',          // Make the image fill the container height
    objectFit: 'cover',      // Maintain aspect ratio and cover container
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Image" style={imageStyle} />
    </div>
  );
};

export default ImageContainer;