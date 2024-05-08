// import React from 'react';

// interface HeaderContainerProps {
//   headings: {
//     id: string,
//     title: string,
//     items: { id: string; title: string }[],
//   }[];
// }

// const Headings: React.FC<HeaderContainerProps> = ({ headings }) => {
//   return (
//     <ul>
//       {headings.map((heading: { id: string; title: string; items: { id: string; title: string }[]; }) => (
//         <li key={heading.id}>
//           <a
//             href={`#${heading.id}`}
//             onClick={(e) => {
//               e.preventDefault();
//               document.querySelector(`#${heading.id}`).scrollIntoView({
//                 behavior: "smooth"
//               });
//             }}
//           >
//             {heading.title}
//           </a>
//           {heading.items.length > 0 && (
//           <ul>
//             {heading.items.map((child) => (
//               <li key={child.id}>
//                 <a
//                   href={`#${child.id}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document.querySelector(`#${child.id}`).scrollIntoView({
//                       behavior: "smooth"
//                     });
//                   }}
//                 >
//                   {child.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//         </li>
//       ))}
//     </ul>
//   )
// };

// const TableOfContents = () => {
//     const getNestedHeadings = (headingElements: any[]) => {
//       const nestedHeadings: { id: any; title: any; items: { id: any; title: any; }[]; }[] = [];
    
//       headingElements.forEach((heading: { nodeName?: any; innerText?: any; id?: any; }, index: any) => {
//         const { innerText: title, id } = heading;
    
//         if (heading.nodeName === "H2") {
//           nestedHeadings.push({ id, title, items: [] });
//         } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
//           nestedHeadings[nestedHeadings.length - 1].items.push({
//             id,
//             title,
//           });
//         }
//       });
    
//       return nestedHeadings;
//     };

//     const useHeadingsData = () => {
//       const [nestedHeadings, setNestedHeadings] = useState([]);
    
//       useEffect(() => {
//         const headingElements = Array.from(
//           document.querySelectorAll("h2, h3")
//         );
    
//         const newNestedHeadings = getNestedHeadings(headingElements);
//         setNestedHeadings(newNestedHeadings);
//       }, []);
    
//       return { nestedHeadings };
//     };

//     const { nestedHeadings } = useHeadingsData();

//     return (
//         <nav aria-label="Table of contents">
//             Hello world!
//         </nav>
//     );
// };

// export default TableOfContents;

// function useState(arg0: never[]): [any, any] {
//     throw new Error("Function not implemented.");
// }


// function useEffect(arg0: () => void, arg1: never[]) {
//     throw new Error("Function not implemented.");
// }
