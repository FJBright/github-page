import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import JapanAquarium from '../assets/images/JapanAquarium.jpg';
import toohakPlanningPageOne from '../assets/images/toohak-planning-page-1.png';
import toohakPlanningPageTwo from '../assets/images/toohak-planning-page-2.png';
import githubPageOne from '../assets/images/githubPage200424.png';
import githubPageTwo from '../assets/images/githubPage240506.png';
import githubPageThree from '../assets/images/githubPage270424.png';
import githubPageFour from '../assets/images/githubPage060524.png';
import '../styles/style.css'; // Import the CSS file here
import ReactPlayer from 'react-player';

// https://www.emgoto.com/react-table-of-contents/

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
  // date: Date; // TODO organise projects by date
}

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
          <h2 id="header-github-page">GitHub page - React with TypeScript</h2>
          <img src={githubPageOne} />
          <img src={githubPageTwo} />
          <img src={githubPageThree} />
          <img src={githubPageFour} />
          <h4>2024</h4>
          <h2 id="header-Toohak">Toohak - Kotlin</h2>
          <h4>2022</h4>
            <ReactPlayer url='https://youtu.be/3eYTkhsNMEI' />
            <h3 id="header-Toohak-planning">Planning</h3>
            <p>
              Independently we sketched some initial ideas for what we wanted to develop. These were based on the functional requirements, limited time, and need to balance other courses.
            </p>
            <img src={toohakPlanningPageOne} />
            <img src={toohakPlanningPageTwo} />
            <p>
              Because of the limited time we opted for a multiplayer quiz game that made use of Android's nearby share. 
            </p>
            <ol>
              <li>
              Interact with the nearby physical world in some way. This interaction might rely on
              sensors, GPS/location, the camera, or Bluetooth to create a local area network.
              </li>
              <li>
              Interact with the nearby physical world in some additional way.
              </li>
              <li>
              Handle one type of input based on a non-simple (i.e. non-click) Gesture in a non-standard way, e.g. fling, drag, multitouch, etc.
              </li>
              <li>
              Provide a facility for “openness”—for a user to interoperate with entities beyond
              their phone or beyond your app. This could take many forms. You could allow the
              user to export a backup of your app's data that could be imported by someone else
              or on another device. You could provide support for deep-linking, such that certain
              patterns of URLs would trigger your app. You could allow the user to share
              achievements via texting or social media. If your idea for this feature situates your
              app within the larger community, it probably qualifies
              </li>
              <li>
              Gracefully handle configuration changes, not losing any of the user's data.
              </li>
              <li>
              Use a local database to persist data, preferably using Room.
              </li>
              <li>
              Send the user notifications related to your app in some way.
              </li>
              <li>
              Integrate an action bar in at least one activity.
              </li>
              <li>
              Provide a preference screen using the modern AndroidX Preference Library
              </li>
              <li>
              Add a multi-resolution launcher icon.
              </li>
              <li>
              Support both landscape and portrait orientations in all views—unless your content
              demands a fixed orientation, as in a game. In other words, all widgets should be able
              to be made fully visible in either orientation.
              </li>
              <li>
              Use string resources for all static text on the user interface.
              </li>
              <li>
              Write a set of user stories for your app and include them in your post mortem
              </li>
              <li>
              Find two people who are not part of your group, have them test your app, and record
              their feedback in your post mortem
              </li>
              <li>
              Successful demo of your app during the last week of class.
              </li>
            </ol>
          <h2 id="header-JapaneseReps">JapaneseReps - Kotlin</h2>
          <h4>2022</h4>
            <ReactPlayer url='https://youtu.be/-lx23Mga0Jk' />
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
