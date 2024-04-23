import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageContainer from "./imageContainer";

export interface CarouselItem {
    imageUrl: string,
    title: string,
    description: string,
};

interface Props {
    carouselItems: CarouselItem[];
}

const ImageCarousel: React.FC<Props> = ({ carouselItems }) => {
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
      <div className="App">
        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
            {carouselItems.map((item) => (
                <div style={{
                    padding: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ImageContainer imageUrl={item.imageUrl} width={900} height={600} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
}

export default ImageCarousel;