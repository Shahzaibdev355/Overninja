
// import "../assets/css/theme.css"
// import "../assets/css/post-6.css"
import "../assets/css/blog-slider.css"

// import "../assets/css/client-slider.css"

import "../assets/css/swiper.min.css"



import Swiper from "swiper";

import { useEffect } from "react";
import ReviewSlider from "./ReviewSlider";
import Navbar from "./Navbar"
// import Footer from "./Footer"

const Home = () => {



    useEffect(() => {
        const slideTrack = document.querySelector('.review-slide-track');
        const slides = document.querySelectorAll('.review-slide');

        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            slideTrack.appendChild(clone);
        });

    }, []);


    useEffect(() => {
        // Initialize Swiper when the component mounts
        const swiper = new Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            // autoHeight: true,
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            },
        });

        // Cleanup function (similar to componentWillUnmount)
        return () => {
            // Destroy Swiper instance when the component unmounts
            swiper.destroy();
        };
    }, []);


    return (

        // data-elementor-type="wp-page"

        <div className="home page-template-default page page-id-6 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.1.6 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header elementor-default elementor-kit-13 elementor-page elementor-page-6" id="page">
           
           <Navbar/>

            <div id="content" className="site-content">
                <div className="ast-container">
                    <div id="primary" className="content-area primary">
                        <main id="main" className="site-main">
                            <article className="post-6 page type-page status-publish ast-article-single" id="post-6">
                                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                                </header>
                                <div className="entry-content clear" itemProp="text">
                                    <div data-elementor-type="wp-page" data-elementor-id={6} className="elementor elementor-6">
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-7b51e64 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7b51e64" data-element_type="section">
                                            <div className="elementor-background-overlay" />
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d91309a" data-id="d91309a" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-f145a47 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="f145a47" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-divider">
                                                                    <span className="elementor-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ec80e8e" data-id="ec80e8e" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-12949c3 elementor-widget elementor-widget-heading" data-id="12949c3" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h1 className="elementor-heading-title elementor-size-default">
                                                                    Creative
                                                                    &amp;<br />Innovative<br />Ideas</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-621a84a" data-id="621a84a" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-67f6d8c elementor-view-default elementor-widget elementor-widget-icon" data-id="67f6d8c" data-element_type="widget" data-widget_type="icon.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-icon-wrapper">
                                                                    <div className="elementor-icon">
                                                                        <i aria-hidden="true" className="fas fa-quote-left" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-49923a8 elementor-widget elementor-widget-heading" data-id="49923a8" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    "Transparency is the new normal,
                                                                    honesty is the currency that
                                                                    buys <br /> credibility."
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-052d062 elementor-widget elementor-widget-heading" data-id="052d062" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    Bharat Mer <br /> CEO</h6>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-3b14451 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3b14451" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-d91be7a" data-id="d91be7a" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-1e0051b elementor-widget elementor-widget-heading" data-id="1e0051b" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    01</h6>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-9307841 elementor-widget elementor-widget-heading" data-id={9307841} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    Services</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-694fdb8" data-id="694fdb8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-background-overlay" />
                                                        <div className="elementor-element elementor-element-14a7c27 elementor-widget elementor-widget-heading" data-id="14a7c27" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h3 className="elementor-heading-title elementor-size-default">
                                                                    Demand<br />Generation</h3>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-ff95d86 elementor-widget elementor-widget-heading" data-id="ff95d86" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    When your business needs attention.</h5>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-e871fa3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="e871fa3" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-divider">
                                                                    <span className="elementor-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-16a11df elementor-widget elementor-widget-text-editor" data-id="16a11df" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <p>With our comprehensive suite of services, we make sure
                                                                    your brand shines brightly to generate
                                                                    awareness, capture leads, and convert into customers.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9bc185c" data-id="9bc185c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                    <div className="elementor-widget-wrap elementor-element-populated  mob-box-color">
                                                        <div className="elementor-background-overlay" />
                                                        <div className="elementor-element elementor-element-e80000e elementor-widget elementor-widget-heading" data-id="e80000e" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h3 className="elementor-heading-title elementor-size-default">
                                                                    Brand<br />Acceleration</h3>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-a0232ce elementor-widget elementor-widget-heading" data-id="a0232ce" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    When your business needs more sales.
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-d459c40 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="d459c40" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-divider">
                                                                    <span className="elementor-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-db6615f elementor-widget elementor-widget-text-editor" data-id="db6615f" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <p>With a team of top-notch experts, we make sure to rapidly
                                                                    increase the visibility, recognition, and
                                                                    growth of a brand in the market for more quality leads.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-944be9d" data-id="944be9d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-background-overlay" />
                                                        <div className="elementor-element elementor-element-67d262a elementor-widget elementor-widget-heading" data-id="67d262a" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h3 className="elementor-heading-title elementor-size-default">
                                                                    Technology<br />Performance</h3>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-74ab1da elementor-widget elementor-widget-heading" data-id="74ab1da" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    When your business needs fast growth.</h5>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-8c79c9b elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="8c79c9b" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-divider">
                                                                    <span className="elementor-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-f2e2008 elementor-widget elementor-widget-text-editor" data-id="f2e2008" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="elementor-widget-container">
                                                                <p>By defining and establishing performance metrics and key
                                                                    performance indicators we identify areas
                                                                    for improvement and set performance targets.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-efed607 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="efed607" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e2f0733" data-id="e2f0733" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-b31d6b7 elementor-widget elementor-widget-heading" data-id="b31d6b7" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    02</h6>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-99372f9 elementor-widget elementor-widget-heading" data-id="99372f9" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    Why Us</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-26ace21" data-id="26ace21" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-43c8f1f elementor-widget elementor-widget-heading" data-id="43c8f1f" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    How we do it</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-0afa3c7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0afa3c7" data-element_type="section">
                                            <div className="elementor-background-overlay" />
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-33b82e4" data-id="33b82e4" data-element_type="column">
                                                    <div className="elementor-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-30c8b0e" data-id="30c8b0e" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-5eeef6a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5eeef6a" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-7c9fcde" data-id="7c9fcde" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-6f56d76 elementor-widget elementor-widget-heading" data-id="6f56d76" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                                    Gain Digital Advantage
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-1ddbf47 elementor-widget elementor-widget-heading" data-id="1ddbf47" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h4 className="elementor-heading-title elementor-size-default">
                                                                                    Innovative strategies
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-82aedfd elementor-widget elementor-widget-text-editor" data-id="82aedfd" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="elementor-widget-container">
                                                                                <p>Throwing ideas at the wall and find out
                                                                                    what sticks is really a bad marketing
                                                                                    strategy; it requires a
                                                                                    careful planning and innovative
                                                                                    strategies to stay ahead of the
                                                                                    competition and gain digital
                                                                                    advantage.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-df403d7" data-id="df403d7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-18c89c1 elementor-widget elementor-widget-spacer" data-id="18c89c1" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-e987fef elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e987fef" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e2bbada" data-id="e2bbada" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-56ac733 elementor-widget elementor-widget-spacer" data-id="56ac733" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-450fe49" data-id="450fe49" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-3a1bf12 elementor-widget elementor-widget-heading" data-id="3a1bf12" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                                    Results-Oriented
                                                                                    Solutions</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-a8cfefa elementor-widget elementor-widget-heading" data-id="a8cfefa" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h4 className="elementor-heading-title elementor-size-default">
                                                                                    Strategic insights</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-9cd7621 elementor-widget elementor-widget-text-editor" data-id="9cd7621" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="elementor-widget-container">
                                                                                <p>Nobody pays for failed campaigns; you
                                                                                    should get return on investment when you
                                                                                    invest in digital
                                                                                    marketing. With us you invest in a
                                                                                    highly skilled team that don’t do
                                                                                    guesswork instead they make
                                                                                    sure you get ROI.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-9b0cd24 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9b0cd24" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-0e489cf" data-id="0e489cf" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-aaefdc7 elementor-widget elementor-widget-heading" data-id="aaefdc7" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                                    From Art to Science
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-e89bcc9 elementor-widget elementor-widget-heading" data-id="e89bcc9" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h4 className="elementor-heading-title elementor-size-default">
                                                                                    Personalized tactics
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-991277b elementor-widget elementor-widget-text-editor" data-id="991277b" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="elementor-widget-container">
                                                                                <p>Our team of ninjas provide custom
                                                                                    recommendations for digital solutions
                                                                                    and strategies. You get
                                                                                    qualified leads by targeting the right
                                                                                    people who become customers and you
                                                                                    celebrate your highest
                                                                                    revenue to date.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7032e60" data-id="7032e60" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-3254828 elementor-widget elementor-widget-spacer" data-id={3254828} data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-2af3f87 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2af3f87" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a34d2c1" data-id="a34d2c1" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-e2eb52d elementor-widget elementor-widget-heading" data-id="e2eb52d" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    03</h6>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-2f5686d elementor-widget elementor-widget-heading" data-id="2f5686d" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    Portfolio</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-580ecf2" data-id="580ecf2" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-b0965d8 elementor-widget elementor-widget-heading" data-id="b0965d8" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Case studies</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-dcbdce6" data-id="dcbdce6" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-7aaaea2 elementor-align-right elementor-widget elementor-widget-button" data-id="7aaaea2" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-icon elementor-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="elementor-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-43f4dae elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="43f4dae" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c9217cc" data-id="c9217cc" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-e9accc5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e9accc5" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f1e545c" data-id="f1e545c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-background-overlay" />
                                                                        <div className="elementor-element elementor-element-ee06cdc elementor-widget elementor-widget-spacer" data-id="ee06cdc" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-43e61f6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="43e61f6" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-de44e06" data-id="de44e06" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-background-overlay" />
                                                                        <div className="elementor-element elementor-element-5eb4e78 elementor-widget elementor-widget-spacer" data-id="5eb4e78" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-76ac138" data-id="76ac138" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-0885c84 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0885c84" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fddd670" data-id="fddd670" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-background-overlay" />
                                                                        <div className="elementor-element elementor-element-c422722 elementor-widget elementor-widget-spacer" data-id="c422722" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3b81689" data-id="3b81689" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-background-overlay" />
                                                                        <div className="elementor-element elementor-element-78d540d elementor-widget elementor-widget-spacer" data-id="78d540d" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="elementor-spacer">
                                                                                    <div className="elementor-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-150ae58 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="150ae58" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-cae5541" data-id="cae5541" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-5109a71 elementor-widget elementor-widget-heading" data-id="5109a71" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    04</h6>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-18aebf0 elementor-widget elementor-widget-heading" data-id="18aebf0" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    About Us</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5663203" data-id={5663203} data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-addb53c elementor-widget elementor-widget-heading" data-id="addb53c" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Who we are</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a4bf50b" data-id="a4bf50b" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-0cb5600 elementor-align-right elementor-widget elementor-widget-button" data-id="0cb5600" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-icon elementor-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="elementor-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-837ff72 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="837ff72" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-96e569c" data-id="96e569c" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-2b4d367 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2b4d367" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0c5d885" data-id="0c5d885" data-element_type="column">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-c12e9d8 elementor-widget elementor-widget-heading" data-id="c12e9d8" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h4 className="elementor-heading-title elementor-size-default">
                                                                                    We bring real solutions to each client’s
                                                                                    problems through a deep understanding of
                                                                                    their market,
                                                                                    solution, and vision.</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-3686581 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id={3686581} data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a19f518" data-id="a19f518" data-element_type="column">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-fe7f46d elementor-widget elementor-widget-heading" data-id="fe7f46d" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="elementor-widget-container">
                                                                                <h3 className="elementor-heading-title elementor-size-default">
                                                                                    We are the decisive
                                                                                    factor behind your success</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6fb823c" data-id="6fb823c" data-element_type="column">
                                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                                        <div className="elementor-element elementor-element-f89cf62 elementor-widget elementor-widget-text-editor" data-id="f89cf62" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="elementor-widget-container">
                                                                                <p>Experience the magic of cutting-edge
                                                                                    technologies as we pave the way for your
                                                                                    organization's
                                                                                    triumph! Say goodbye to tedious
                                                                                    operations and hello to a future of
                                                                                    enhanced productivity and
                                                                                    unstoppable growth. We're not just any
                                                                                    partners; we are the catalysts that
                                                                                    unleash the full potential
                                                                                    of technology to ensure your success
                                                                                    soars to new heights! Let's embark on
                                                                                    this transformative
                                                                                    journey together and watch your dreams
                                                                                    materialize.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-9c9e4b9 elementor-widget elementor-widget-text-editor" data-id="9c9e4b9" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="elementor-widget-container">
                                                                                <p>We treat your challenges as our own,
                                                                                    meticulously crafting solutions that
                                                                                    leave no room for failure.
                                                                                    When you partner with us, you gain an
                                                                                    unwavering support system, a team that
                                                                                    is as invested in your
                                                                                    success as you are.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-c1a4b64 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c1a4b64" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a9fd454" data-id="a9fd454" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-5c26826 elementor-widget elementor-widget-heading" data-id="5c26826" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    05</h6>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-c0fc686 elementor-widget elementor-widget-heading" data-id="c0fc686" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    Some of</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a1ceee7" data-id="a1ceee7" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-371b1ca elementor-widget elementor-widget-heading" data-id="371b1ca" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Our clients</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-bcef965" data-id="bcef965" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-2365b35 elementor-align-right elementor-widget elementor-widget-button" data-id="2365b35" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-icon elementor-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="elementor-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section style={{ marginBottom: 70 }} className="elementor-section elementor-top-section elementor-element elementor-element-a2367c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a2367c1" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0f461c7" data-id="0f461c7" data-element_type="column">
                                                    <div className="elementor-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ba79f17" data-id="ba79f17" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-04c70cc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="04c70cc" data-element_type="section">
                                                            <div className="elementor-container elementor-column-gap-no">
                                                                {/* <div className="review-slider">
                                                                    <div className="review-slide-track">
                                                                        <div className="review-slide">
                                                                            <img src="./assets/images/logo-004-free-img.png" height width alt />
                                                                        </div>
                                                                        <div className="review-slide">
                                                                            <img src="./assets/images/logo-002-free-img.png" height width alt />
                                                                        </div>
                                                                        <div className="review-slide">
                                                                            <img src="./assets/images/logo-003-free-img.png" height width alt />
                                                                        </div>
                                                                        <div className="review-slide">
                                                                            <img src="./assets/images/logo-006-free-img.png" height width alt />
                                                                        </div>
                                                                        <div className="review-slide">
                                                                            <img src="./assets/images/logo-005-free-img.png" height width alt />
                                                                        </div>
                                                                        <div className="review-slide">
                                                                            <img src="./assets/images/logo-001-free-img.png" height width alt />
                                                                        </div>
                                                                    </div>
                                                                </div> */}

                                                                <ReviewSlider/>

                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-c1a4b64 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c1a4b64" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a9fd454" data-id="a9fd454" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-5c26826 elementor-widget elementor-widget-heading" data-id="5c26826" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h6 className="elementor-heading-title elementor-size-default">
                                                                    06</h6>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-c0fc686 elementor-widget elementor-widget-heading" data-id="c0fc686" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h5 className="elementor-heading-title elementor-size-default">
                                                                    Blogs</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a1ceee7" data-id="a1ceee7" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-371b1ca elementor-widget elementor-widget-heading" data-id="371b1ca" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">
                                                                    Our insights</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-bcef965" data-id="bcef965" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="elementor-element elementor-element-2365b35 elementor-align-right elementor-widget elementor-widget-button" data-id="2365b35" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-button-wrapper">
                                                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                                                        <span className="elementor-button-content-wrapper">
                                                                            <span className="elementor-button-icon elementor-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="elementor-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="elementor-section elementor-top-section elementor-element elementor-element-a2367c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a2367c1" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-no">
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0f461c7" data-id="0f461c7" data-element_type="column">
                                                    <div className="elementor-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ba79f17" data-id="ba79f17" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div className="blog-slider">
                                                            <div className="blog-slider__wrp swiper-wrapper">
                                                                <div className="blog-slider__item swiper-slide">
                                                                    <div className="blog-slider__img">
                                                                        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt />
                                                                    </div>
                                                                    <div className="blog-slider__content">
                                                                        <span className="blog-slider__code">26 December
                                                                            2019</span>
                                                                        <div className="blog-slider__title">Lorem Ipsum Dolor
                                                                        </div>
                                                                        <div className="blog-slider__text">Lorem ipsum dolor sit
                                                                            amet consectetur, adipisicing elit. Recusandae
                                                                            voluptate repellendus magni illo ea animi?
                                                                        </div>
                                                                        <a href="#" className="blog-slider__button">READ
                                                                            MORE</a>
                                                                    </div>
                                                                </div>
                                                                <div className="blog-slider__item swiper-slide">
                                                                    <div className="blog-slider__img">
                                                                        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt />
                                                                    </div>
                                                                    <div className="blog-slider__content">
                                                                        <span className="blog-slider__code">26 December
                                                                            2019</span>
                                                                        <div className="blog-slider__title">Lorem Ipsum Dolor2
                                                                        </div>
                                                                        <div className="blog-slider__text">Lorem ipsum dolor sit
                                                                            amet consectetur, adipisicing elit. Recusandae
                                                                            voluptate repellendus magni illo ea animi?</div>
                                                                        <a href="#" className="blog-slider__button">READ
                                                                            MORE</a>
                                                                    </div>
                                                                </div>
                                                                <div className="blog-slider__item swiper-slide">
                                                                    <div className="blog-slider__img">
                                                                        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt />
                                                                    </div>
                                                                    <div className="blog-slider__content">
                                                                        <span className="blog-slider__code">26 December
                                                                            2019</span>
                                                                        <div className="blog-slider__title">Lorem Ipsum Dolor
                                                                        </div>
                                                                        <div className="blog-slider__text">Lorem ipsum dolor sit
                                                                            amet consectetur, adipisicing elit. Recusandae
                                                                            voluptate repellendus magni illo ea animi?</div>
                                                                        <a href="#" className="blog-slider__button">READ
                                                                            MORE</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="blog-slider__pagination" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>

            {/* <Footer/> */}
          
        </div>




                );
}

                export default Home;