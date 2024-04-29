import React from 'react';
import Header from './Header';
import BlogThumbnailList from '../components/projectThumbnailList';
// TODO replace these assets with images hosted elsewhere
import JapanAquarium from '../assets/images/JapanAquarium.jpg';

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
  // date: Date; // TODO organise projects by date
}

const Projects = () => {
  const items: blogThumbnailDetails[] = [
    {
      title: 'RaspberryPi - In Progress',
      imageUrl: JapanAquarium,
    },
    {
      title: 'Github Page',
      imageUrl: JapanAquarium,
    },
    {
      title: 'JapaneseReps',
      imageUrl: JapanAquarium,
    },
    {
      title: 'Seng302',
      imageUrl: JapanAquarium,
    },
  ];

  return (
    <div className="app" style={{
      backgroundColor: 'rgba(20, 26, 31, 0.8)',
      borderRadius: '2px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <Header></Header>
      <div></div>
      <div style={{
        padding: 30,
      }}>
        <h1>My Projects</h1>
        <BlogThumbnailList items={items} />
      </div>
    </div>
  );
};

export default Projects;