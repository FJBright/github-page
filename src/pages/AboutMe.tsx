import Header from './Header';
// TODO replace these assets with images hosted elsewhere
import { personalPictures } from '../components/imageList';
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
        height: '90vh',
      }}>
        <div style={{
          paddingTop: '10vh',
          paddingLeft: '20vh',
          paddingRight: '20vh',
          height: '80vh',
          marginLeft: '10vw',
          marginRight: '10vw',
          backgroundColor: 'rgb(255 255 255 / 80%)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 3px 4px',
        }}>
          <div>
            <br></br>
            <ReactMultiCarousel carouselItems={personalPictures} width={100} height={36}/>
            <span>Hey I'm Finn, a Kiwi/Australian/Singaporean</span>
            <br></br>
            <br></br>
            <span>I graduated in 2023, and I'm {age} years young.</span>
            <br></br>
            <span>During university I worked in small & large Agile teams to create projects.</span>
            <span>In my career so far I've worked on Docker networks with Redis caches,</span>
            <span>and a meriad of other tech stacks.</span>
            <br></br>
            <br></br>
            <span>For more questions, you can contact Finn.bright457@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;