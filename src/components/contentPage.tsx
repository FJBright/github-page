import React from 'react';
import ReactMultiCarousel from './reactMultiCarousel';
import { CarouselItem } from './imageContent/imageList';
import Header from '../pages/Header';

export interface ContentProps {
    title: string;
    date: string;
    imageSources: CarouselItem[];
    text: string[];
}

const ContentPage: React.FC<ContentProps> = ({ title, date, imageSources, text }) => {
  return (
    <div>
      <Header />
      <div className="app" style={{
        backgroundColor: 'rgba(200, 200, 200, 1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
        <div style={{
          paddingTop: '10vh',
          paddingLeft: '20vh',
          paddingRight: '20vh',
          marginLeft: '10vw',
          marginRight: '10vw',
          backgroundColor: 'rgb(255 255 255 / 80%)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 3px 4px',
        }}>
          <h1>{title}</h1>
          <p>{date}</p>
          <div>
            <ReactMultiCarousel carouselItems={imageSources} width={670} height={160}/>
          </div>
          <div>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
