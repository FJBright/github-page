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
      <div>
        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
            {carouselItems.map((item) => (
                <div>
                  <div style={{
                    margin: 0,
                  }}>
                    <ImageContainer imageUrl={item.imageUrl} width={500} height={400} />
                    <div style={{
                      // padding: 0,
                      // display: 'flex',
                      // justifyContent: 'center',
                      // alignItems: 'center',
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

export default ImageCarousel;