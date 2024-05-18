import React, { useEffect, useState } from 'react';
import ContentPage, { ContentProps } from '../../components/contentPage';

import toohakPlanningPageOne from '../../assets/images/toohak-planning-page-1.png';
import toohakPlanningPageTwo from '../../assets/images/toohak-planning-page-2.png';

const pageContent = {
    title: "Toohak - Kotlin App",
    date: "2022",
    imageDetails: [
      { src: toohakPlanningPageOne, title: '', description: '' },
      { src: toohakPlanningPageTwo, title: '', description: '' },
    ],
    text: [
      "Independently we sketched some initial ideas for what we wanted to develop. These were based on the functional requirements, limited time, and need to balance other courses.",
      "Because of the limited time we opted for a multiplayer quiz game that made use of Android's nearby share.",
    ]
};

const Toohak: React.FC = () => {
  const [content, setContent] = useState<ContentProps | null>(null);

  useEffect(() => {
    // Simulating fetching data
    setContent(pageContent);
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Toohak">
      <ContentPage 
        title={content.title}
        date={content.date}
        imageDetails={content.imageDetails}
        text={content.text}
      />
      {/* <ol>
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
      </ol> */}
    </div>
  );
};

export default Toohak;
