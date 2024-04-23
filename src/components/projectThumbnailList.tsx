import React from 'react';
import ProjectThumbnail from './projectThumbnail';
import { blogThumbnailDetails } from '../pages/Home';

interface Props {
  items: blogThumbnailDetails[];
}

const projectThumbnailList: React.FC<Props> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ProjectThumbnail key={index} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default projectThumbnailList;