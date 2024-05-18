import React, { useEffect, useState } from 'react';
import ContentPage, { ContentProps } from '../../components/contentPage';

import githubPageOne from '../../assets/images/githubPage200424.png';
import githubPageTwo from '../../assets/images/githubPage240506.png';
import githubPageThree from '../../assets/images/githubPage270424.png';
import githubPageFour from '../../assets/images/githubPage060524.png';

const pageContent = {
    title: "GitHub Page",
    date: "19/05/2024",
    imageDetails: [
      { src: githubPageOne, title: '', description: '' },
      { src: githubPageTwo, title: '', description: '' },
      { src: githubPageThree, title: '', description: '' },
      { src: githubPageFour, title: '', description: '' },
    ],
    text: [
      "My first solo go at a react blog. I decided I wanted to host a site for some personal content.",
      "During uni I heard about GitHub pages so I found a tutorial on deploying react apps.",
      "My CSS is still a work in progress but I'm glad developer tools exist or I'd be crazy by now.",
    ]
};

const GithubPage: React.FC = () => {
  const [content, setContent] = useState<ContentProps | null>(null);

  useEffect(() => {
    // Simulating fetching data
    setContent(pageContent);
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="GithubPage">
        <ContentPage 
            title={content.title}
            date={content.date}
            imageDetails={content.imageDetails}
            text={content.text}
        />
    </div>
  );
};

export default GithubPage;
