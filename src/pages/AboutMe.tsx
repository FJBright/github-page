import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import { personalPictures } from '../components/imageContent/imageList';
import ReactMultiCarousel from '../components/reactMultiCarousel';
import Typewriter from '../components/typewriter';

export interface blogThumbnailDetails {
  title: string;
  imageUrl: string;
}

const Home = () => {
  // Calculate age dynamically based on birth year
  const birthDate = new Date('1999-09-04');
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) ? 1 : 0);

  return (
    <div>
      <Header></Header>
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
          paddingBottom: '40px',
          height: '80vh',
          marginLeft: '10vw',
          marginRight: '10vw',
          backgroundColor: 'rgb(255 255 255 / 80%)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 3px 4px',
        }}>
          <div>
            <br></br>
            <ReactMultiCarousel carouselItems={personalPictures} width={100} height={36}/>
            <span>Hey I'm Finn, a UC graduate of 2023.</span>
            <br></br>
            <span>
              A motivated Software Engineering with over 1 year of experience. 
              I have a passion for creating high-quality code and contributing 
              to impactful applications. From gathering requirements from users 
              and defining them into specific measurable steps, I have a proven 
              track record of planning and accomplishing results.
            </span>
            <span>In my career so far I've worked on Docker networks with Redis caches,</span>
            <span>AWS, Devops, React, React Native, NoSQL, and SQL.</span>
            <br></br>
            <br></br>
            <span>For more questions, you can contact me at Finn.bright457@gmail.com</span>
            <br></br>
            <a href="https://www.linkedin.com/in/finn-bright-a9165a220/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;