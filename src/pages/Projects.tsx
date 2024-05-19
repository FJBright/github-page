import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import githubPageOne from '../assets/images/githubPage200424.png';
import '../styles/style.css'; // Import the CSS file here
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

// https://www.emgoto.com/react-table-of-contents/

interface HeadingItem {
  id: string;
  title: string;
  items: HeadingItem[];
}

interface HeadingsProps {
  headings: HeadingItem[];
  activeId: string | undefined;
}

const Headings: React.FC<HeadingsProps> = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`)?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id} className={child.id === activeId ? 'active' : ''}>
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('main h2, main h3'));

    const getNestedHeadings = (headingElements: Element[]) => {
      const nestedHeadings: HeadingItem[] = [];

      headingElements.forEach((heading) => {
        const { innerText: title, id } = heading as HTMLElement;

        if (heading.nodeName === 'H2') {
          nestedHeadings.push({ id, title, items: [] });
        } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
          nestedHeadings[nestedHeadings.length - 1].items.push({ id, title, items: [] });
        }
      });

      return nestedHeadings;
    };

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const useIntersectionObserver = (setActiveId: React.Dispatch<React.SetStateAction<string | undefined>>) => {
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      headingElementsRef.current = entries.reduce((map, entry) => {
        map[entry.target.id] = entry;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = Object.values(headingElementsRef.current).filter(
        (entry) => entry.isIntersecting
      );

      const getIndexFromId = (id: string) =>
        entries.findIndex((entry) => entry.target.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, { rootMargin: '0px 0px -50% 0px' });

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string | undefined>();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

const Home: React.FC = () => {

  const containerStyle: React.CSSProperties = {
    width: `50vw`,     // Set the width of the container
    height: `50vh`,   // Set the height of the container
    overflow: 'hidden',      // Hide any overflow to prevent image stretching
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',            // Make the image fill the container width
    height: '100%',           // Make the image fill the container height
    objectFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
    borderRadius: '4px',
  };

  return (
    <div 
      style={{
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header></Header>
      <div style={{
        backgroundColor: 'rgba(200, 200, 200, 1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{
          paddingTop: '10vh',
          marginLeft: '10vw',
          marginRight: '10vw',
          backgroundColor: 'rgb(255 255 255 / 80%)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 3px 4px',
        }}>
      <div className="container">
        <TableOfContents />
        <main>
          <h1 id="title-header">My Projects</h1>
          <h2 id="header-github-page">GitHub page - React with TypeScript</h2>
          <h4>2024</h4>
          <div style={containerStyle}>
            <img style={imageStyle} src={githubPageOne} />
          </div>
          <p>Being more of a backend developer, I've put into practice some of what I've learnt during academia and industry to make this page.</p>
          <Link to="/projects/github-page">Read more</Link>
            {/* <div
              style={linkStyle}
              onClick={() => navigate('/book-reviews')}
            >
              <HoverUnderlineText text='Books' uniqueKey={'link 1'} textStyle={linkStyle} />
            </div> */}
          <h2 id="header-Toohak">Toohak - Kotlin</h2>
          <h4>2022</h4>
            <ReactPlayer
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
              }}
              url='https://youtu.be/3eYTkhsNMEI'
            />
            <h3 id="header-Toohak-planning">Planning</h3>
            <Link to="/projects/toohak">Read more</Link>
          <h2 id="header-JapaneseReps">JapaneseReps - Kotlin</h2>
          <h4>2022</h4>
            <ReactPlayer
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
              }} url='https://youtu.be/-lx23Mga0Jk' />
            <p>During my last year of university I developed an app to help me with a Japanese language course I was also taking at the time.</p>
            <p>
              In that project I learnt about intents, recycler views, and gained an understanding of Kotlin and XML languages as well as app development in Android Studio. 
            </p>
        </main>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
