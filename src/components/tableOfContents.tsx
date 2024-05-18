import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

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

    const observer = new IntersectionObserver(callback, { rootMargin: '500px' });

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

const App: React.FC = () => {
  return (
    <div className="container">
      <main>
        <h2 id="initial-header">Initial header</h2>
        <p>{DummyText}</p>
        <h2 id="second-header">Second header</h2>
        <p>{DummyText}</p>
        <h3 id="third-header">Third header</h3>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="fourth-header">Fourth header</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h3 id="fifth-header">Fifth header</h3>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
      </main>
      <TableOfContents />
    </div>
  );
};
