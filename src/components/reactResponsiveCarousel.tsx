import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselItem } from './imageList';

interface Props {
    carouselItems: CarouselItem[];
}

const ReactResponsiveCarousel: React.FC<Props> = ({ carouselItems }) => {
  return (
    <div style={{
      width: `35%`,
      height: `100%`,
      alignContent: 'center',
      margin: 'auto',
    }}>
      <Carousel
        autoPlay
        infiniteLoop
        centerMode
        interval={5000}
      >
        {carouselItems.map((image) => (
          // <ImageContainer imageUrl={image.download_url} width={100} height={400} />
          <img
            src={image.imageUrl}
            alt={image.title}
            style={{
              overflow: 'hidden',      // Hide any overflow to prevent image stretching
              borderRadius: '4px',
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ReactResponsiveCarousel;