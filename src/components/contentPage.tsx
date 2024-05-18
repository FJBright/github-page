import React from 'react';
import Header from '../pages/Header';
import { ImageContainer } from './reactMultiCarousel';

export interface imageDetails {
  src: string,
  title: string,
  description: string,
};

export interface ContentProps {
    title: string;
    date: string;
    imageDetails: imageDetails[];
    text: string[];
}

const ContentPage: React.FC<ContentProps> = ({ title, date, imageDetails, text }) => {
  return (
    <div
      style={{
      }}
    >
      <Header />
      <div className="app" style={{
        backgroundColor: 'rgba(200, 200, 200, 1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200%',
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
          <h4>{date}</h4>
          <div>
            {imageDetails.map((src, index) => (
              <ImageContainer key={index} imageUrl={src.src} width={ 100 } height={ 100 } />
            ))}
          </div>
          <div 
            style={{
              paddingBottom: '50px'
            }}
          >
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
