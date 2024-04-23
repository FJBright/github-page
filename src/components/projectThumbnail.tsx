import React from 'react';

interface Props {
  title: string;
  imageUrl: string;
}

const ProjectThumbnail: React.FC<Props> = ({ title, imageUrl }) => {
  return (
    <div className="project-thumbnail">
      <h1>{title}</h1>
      <img src={imageUrl} alt="Project thumbnail" />
    </div>
  );
};

export default ProjectThumbnail;