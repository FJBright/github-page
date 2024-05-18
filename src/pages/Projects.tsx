import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import BlogThumbnailList from '../components/projectThumbnailList';
// TODO replace these assets with images hosted elsewhere
import JapanAquarium from '../assets/images/JapanAquarium.jpg';
import '../styles/style.css'; // Import the CSS file here
import ReactPlayer from 'react-player';

// https://www.emgoto.com/react-table-of-contents/

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
  // date: Date; // TODO organise projects by date
}

// export interface blogThumbnailDetails {
//   title: string;
//   imageUrl: string;
//   // date: Date; // TODO organise projects by date
// }

// const Projects = () => {  
//   const items: blogThumbnailDetails[] = [
//     {
//       title: 'RaspberryPi - In Progress',
//       imageUrl: JapanAquarium,
//     },
//     {
//       title: 'Github Page',
//       imageUrl: JapanAquarium,
//     },
//     {
//       title: 'JapaneseReps',
//       imageUrl: JapanAquarium,
//     },
//     {
//       title: 'Seng302',
//       imageUrl: JapanAquarium,
//     },
//   ];

//   return (
//     <div className="app" style={{
//       backgroundColor: 'rgba(20, 26, 31, 0.8)',
//       borderRadius: '2px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     }}>
//       <Header></Header>
//       <div></div>
//       <div style={{
//         padding: 30,
//       }}>
//         <h1>My Projects</h1>
//         {/* <TableOfContents /> */}
//         {/* <BlogThumbnailList items={items} /> */}
//       </div>
//     </div>
//   );
// };

// export default Projects;



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

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Home: React.FC = () => {
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
    <div 
      style={{
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header></Header>
      <div className="app" style={{
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
          <h2 id="header-1">2022 - JapaneseReps</h2>
            <ReactPlayer url='https://youtu.be/-lx23Mga0Jk' />
            <p>During my last year of university I developed an app to help me with a Japanese language course I was also taking at the time.</p>
            <p>
              In that course I learnt about intents, recycler views, and gained an understanding of the kotlin language and app development in Android Studio. 
              The exam for this course stood out to me. This was because within a set timeframe we developed an app based on given requirements.
            </p>
          <h2 id="header-2">Second header</h2>
          <p>{DummyText}</p>
          <h3 id="header-3">Third header</h3>
          <p>{DummyText}</p>
          <p>{DummyText}</p>
          <h2 id="header-4">Fourth header</h2>
          <p>{DummyText}</p>
          <p>{DummyText}</p>
          <p>{DummyText}</p>
          <p>{DummyText}</p>
          <h3 id="header-5">Fifth header</h3>
          <p>{DummyText}</p>
          <p>{DummyText}</p>
        </main>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
