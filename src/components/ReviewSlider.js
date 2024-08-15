import "../assets/css/client-slider.css"
import { useEffect } from "react";
const ReviewSlider = () => {

    useEffect(() => {
        const slideTrack = document.querySelector('.review-slide-track');
        const slides = document.querySelectorAll('.review-slide');

        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            slideTrack.appendChild(clone);
        });

    }, []);

    return (
        // <img src="/assets/images/gallery-01-free-img.jpg" alt="" />
        // <img src={require("../assets/images1/Ad networks & RTBS page 2.webp").default} alt="Logo 004" />
        <div className="review-slider">
            <div className="review-slide-track">

                <div className="review-slide">
                    <img src="/images/logo-004.png" alt="Logo 004" />
                </div>
                <div className="review-slide">
                    <img src="/images/logo-002-free-img.png" height width alt />
                </div>
                <div className="review-slide">
                    <img src="./images/logo-003-free-img.png" height width alt />
                </div>
                <div className="review-slide">
                    <img src="./images/logo-006-free-img.png" height width alt />
                </div>
                <div className="review-slide">
                    <img src="./images/logo-005-free-img.png" height width alt />
                </div>
                <div className="review-slide">
                    <img src="./images/logo-001-free-img.png" height width alt />
                </div>
            </div>
        </div>
    );
}

export default ReviewSlider;