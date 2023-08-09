import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Slider from "./Slider";
import image1 from '../../../assets/children-1.webp'
import image2 from '../../../assets/children-2.webp'
import image3 from '../../../assets/children-3.webp'
import header1 from '../../../assets/header-1.json'
import header2 from '../../../assets/header-2.json'
import header3 from '../../../assets/header-3.json'

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <>
            <div className="w-full">
                {/* banner section added */}
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide2"><Slider toy={header1} image={image2} /></div>                    
                    <div className="keen-slider__slide number-slide2"><Slider toy={header3} image={image3} /></div>  
                    <div className="keen-slider__slide number-slide2"><Slider toy={header2} image={image1} /></div>                 
                </div>
                {/* banner section end */}
            </div>
        </>
    );
};

export default Banner;





