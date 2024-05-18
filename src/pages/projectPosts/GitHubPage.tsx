import React, { useEffect, useState } from 'react';
import ContentPage, { ContentProps } from '../../components/contentPage';

import githubPageOne from '../../assets/images/githubPage200424.png';
import githubPageTwo from '../../assets/images/githubPage240506.png';
import githubPageThree from '../../assets/images/githubPage270424.png';
import githubPageFour from '../../assets/images/githubPage060524.png';

const pageContent = {
    title: "GitHub Page",
    date: "2024-05-19",
    imageSources: [
      { imageUrl: githubPageOne, title: '', description: '' },
      { imageUrl: githubPageTwo, title: '', description: '' },
      { imageUrl: githubPageThree, title: '', description: '' },
      { imageUrl: githubPageFour, title: '', description: '' },
    ],
    text: [
      "Paragraph 1 content goes here.",
      "Paragraph 2 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
      "Paragraph 3 content goes here.",
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
            imageSources={content.imageSources}
            text={content.text}
        />
    </div>
  );
};

export default GithubPage;
