import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


interface ImageContainerProps {
  imageUrl: string;
  width: number;
  height: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, width, height }) => {
  const containerStyle: React.CSSProperties = {
    width: `${width}px`,     // Set the width of the container
    height: `${height}px`,   // Set the height of the container
    overflow: 'hidden',      // Hide any overflow to prevent image stretching
    borderRadius: '4px',     // Optional: Add border radius for rounded corners
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',           // Make the image fill the container width
    height: '100%',          // Make the image fill the container height
    objectFit: 'scale-down',      // Maintain aspect ratio and cover container
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Image" style={imageStyle} />
    </div>
  );
};


export interface CarouselItem {
    imageUrl: string,
    title: string,
    description: string,
};

interface Props {
    carouselItems: CarouselItem[];
}

const ReactMultiCarousel: React.FC<Props> = ({ carouselItems }) => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <div>
        <div style={{ position: "relative" }}>
          <Carousel
            infinite={true}
            // rewindWithAnimation={true}
            // rewind={true}
            responsive={responsive}
            autoPlay={true}
            showDots={true}
            partialVisible={false}
            focusOnSelect={true}
            autoPlaySpeed={5000}
            pauseOnHover={true}
          >
            {carouselItems.map((item) => (
                <div>
                  <div style={{
                  }}>
                    <ImageContainer imageUrl={item.imageUrl} width={500} height={400} />
                    <div style={{
                      padding: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
}

export default ReactMultiCarousel;