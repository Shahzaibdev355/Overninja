
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
        window.scrollTo(0, 0);
      }, []);



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

        // data-overninja-type="wp-page"

        <div className="home page-template-default page page-id-6 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.1.6 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header overninja-default overninja-kit-13 overninja-page overninja-page-6" id="page">
           
           <Navbar/>

            <div id="content" className="site-content">
                <div className="ast-container">
                    <div id="primary" className="content-area primary">
                        <main id="main" className="site-main">
                            <article className="post-6 page type-page status-publish ast-article-single" id="post-6">
                                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                                </header>
                                <div className="entry-content clear" itemProp="text">
                                    <div data-overninja-type="wp-page" data-overninja-id={6} className="overninja overninja-6">
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-7b51e64 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="7b51e64" data-element_type="section">
                                            <div className="overninja-background-overlay" />
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-d91309a" data-id="d91309a" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-f145a47 overninja-widget-divider--view-line overninja-widget overninja-widget-divider" data-id="f145a47" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-divider">
                                                                    <span className="overninja-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-ec80e8e" data-id="ec80e8e" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-12949c3 overninja-widget overninja-widget-heading" data-id="12949c3" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h1 className="overninja-heading-title overninja-size-default">
                                                                    Creative
                                                                    &amp;<br />Innovative<br />Ideas</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-621a84a" data-id="621a84a" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-67f6d8c overninja-view-default overninja-widget overninja-widget-icon" data-id="67f6d8c" data-element_type="widget" data-widget_type="icon.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-icon-wrapper">
                                                                    <div className="overninja-icon">
                                                                        <i aria-hidden="true" className="fas fa-quote-left" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-49923a8 overninja-widget overninja-widget-heading" data-id="49923a8" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    "Transparency is the new normal,
                                                                    honesty is the currency that
                                                                    buys <br /> credibility."
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-052d062 overninja-widget overninja-widget-heading" data-id="052d062" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    Bharat Mer <br /> CEO</h6>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-3b14451 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="3b14451" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-25 overninja-top-column overninja-element overninja-element-d91be7a" data-id="d91be7a" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-1e0051b overninja-widget overninja-widget-heading" data-id="1e0051b" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    01</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-9307841 overninja-widget overninja-widget-heading" data-id={9307841} data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Services</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-25 overninja-top-column overninja-element overninja-element-694fdb8" data-id="694fdb8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-background-overlay" />
                                                        <div className="overninja-element overninja-element-14a7c27 overninja-widget overninja-widget-heading" data-id="14a7c27" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h3 className="overninja-heading-title overninja-size-default">
                                                                    Demand<br />Generation</h3>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-ff95d86 overninja-widget overninja-widget-heading" data-id="ff95d86" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    When your business needs attention.</h5>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-e871fa3 overninja-widget-divider--view-line overninja-widget overninja-widget-divider" data-id="e871fa3" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-divider">
                                                                    <span className="overninja-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-16a11df overninja-widget overninja-widget-text-editor" data-id="16a11df" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="overninja-widget-container">
                                                                <p>With our comprehensive suite of services, we make sure
                                                                    your brand shines brightly to generate
                                                                    awareness, capture leads, and convert into customers.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-25 overninja-top-column overninja-element overninja-element-9bc185c" data-id="9bc185c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                    <div className="overninja-widget-wrap overninja-element-populated  mob-box-color">
                                                        <div className="overninja-background-overlay" />
                                                        <div className="overninja-element overninja-element-e80000e overninja-widget overninja-widget-heading" data-id="e80000e" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h3 className="overninja-heading-title overninja-size-default">
                                                                    Brand<br />Acceleration</h3>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-a0232ce overninja-widget overninja-widget-heading" data-id="a0232ce" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    When your business needs more sales.
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-d459c40 overninja-widget-divider--view-line overninja-widget overninja-widget-divider" data-id="d459c40" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-divider">
                                                                    <span className="overninja-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-db6615f overninja-widget overninja-widget-text-editor" data-id="db6615f" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="overninja-widget-container">
                                                                <p>With a team of top-notch experts, we make sure to rapidly
                                                                    increase the visibility, recognition, and
                                                                    growth of a brand in the market for more quality leads.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-25 overninja-top-column overninja-element overninja-element-944be9d" data-id="944be9d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-background-overlay" />
                                                        <div className="overninja-element overninja-element-67d262a overninja-widget overninja-widget-heading" data-id="67d262a" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h3 className="overninja-heading-title overninja-size-default">
                                                                    Technology<br />Performance</h3>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-74ab1da overninja-widget overninja-widget-heading" data-id="74ab1da" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    When your business needs fast growth.</h5>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-8c79c9b overninja-widget-divider--view-line overninja-widget overninja-widget-divider" data-id="8c79c9b" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-divider">
                                                                    <span className="overninja-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-f2e2008 overninja-widget overninja-widget-text-editor" data-id="f2e2008" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div className="overninja-widget-container">
                                                                <p>By defining and establishing performance metrics and key
                                                                    performance indicators we identify areas
                                                                    for improvement and set performance targets.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-efed607 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="efed607" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-e2f0733" data-id="e2f0733" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-b31d6b7 overninja-widget overninja-widget-heading" data-id="b31d6b7" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    02</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-99372f9 overninja-widget overninja-widget-heading" data-id="99372f9" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Why Us</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-26ace21" data-id="26ace21" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-43c8f1f overninja-widget overninja-widget-heading" data-id="43c8f1f" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default">
                                                                    How we do it</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-0afa3c7 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="0afa3c7" data-element_type="section">
                                            <div className="overninja-background-overlay" />
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-33b82e4" data-id="33b82e4" data-element_type="column">
                                                    <div className="overninja-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-30c8b0e" data-id="30c8b0e" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-5eeef6a overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="5eeef6a" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-66 overninja-inner-column overninja-element overninja-element-7c9fcde" data-id="7c9fcde" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-6f56d76 overninja-widget overninja-widget-heading" data-id="6f56d76" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                                    Gain Digital Advantage
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-1ddbf47 overninja-widget overninja-widget-heading" data-id="1ddbf47" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h4 className="overninja-heading-title overninja-size-default">
                                                                                    Innovative strategies
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-82aedfd overninja-widget overninja-widget-text-editor" data-id="82aedfd" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
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
                                                                <div className="overninja-column overninja-col-33 overninja-inner-column overninja-element overninja-element-df403d7" data-id="df403d7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-18c89c1 overninja-widget overninja-widget-spacer" data-id="18c89c1" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-e987fef overninja-reverse-mobile overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="e987fef" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-33 overninja-inner-column overninja-element overninja-element-e2bbada" data-id="e2bbada" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-56ac733 overninja-widget overninja-widget-spacer" data-id="56ac733" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overninja-column overninja-col-66 overninja-inner-column overninja-element overninja-element-450fe49" data-id="450fe49" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-3a1bf12 overninja-widget overninja-widget-heading" data-id="3a1bf12" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                                    Results-Oriented
                                                                                    Solutions</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-a8cfefa overninja-widget overninja-widget-heading" data-id="a8cfefa" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h4 className="overninja-heading-title overninja-size-default">
                                                                                    Strategic insights</h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-9cd7621 overninja-widget overninja-widget-text-editor" data-id="9cd7621" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
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
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-9b0cd24 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="9b0cd24" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-66 overninja-inner-column overninja-element overninja-element-0e489cf" data-id="0e489cf" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-aaefdc7 overninja-widget overninja-widget-heading" data-id="aaefdc7" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                                    From Art to Science
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-e89bcc9 overninja-widget overninja-widget-heading" data-id="e89bcc9" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h4 className="overninja-heading-title overninja-size-default">
                                                                                    Personalized tactics
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-991277b overninja-widget overninja-widget-text-editor" data-id="991277b" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
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
                                                                <div className="overninja-column overninja-col-33 overninja-inner-column overninja-element overninja-element-7032e60" data-id="7032e60" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-3254828 overninja-widget overninja-widget-spacer" data-id={3254828} data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
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
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-2af3f87 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="2af3f87" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-a34d2c1" data-id="a34d2c1" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-e2eb52d overninja-widget overninja-widget-heading" data-id="e2eb52d" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    03</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-2f5686d overninja-widget overninja-widget-heading" data-id="2f5686d" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Portfolio</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-580ecf2" data-id="580ecf2" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-b0965d8 overninja-widget overninja-widget-heading" data-id="b0965d8" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default">
                                                                    Case studies</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-dcbdce6" data-id="dcbdce6" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-7aaaea2 overninja-align-right overninja-widget overninja-widget-button" data-id="7aaaea2" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-button-wrapper">
                                                                    <a className="overninja-button overninja-button-link overninja-size-sm" href="#">
                                                                        <span className="overninja-button-content-wrapper">
                                                                            <span className="overninja-button-icon overninja-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="overninja-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-43f4dae overninja-section-full_width overninja-section-height-default overninja-section-height-default" data-id="43f4dae" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-c9217cc" data-id="c9217cc" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-e9accc5 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="e9accc5" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-100 overninja-inner-column overninja-element overninja-element-f1e545c" data-id="f1e545c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-background-overlay" />
                                                                        <div className="overninja-element overninja-element-ee06cdc overninja-widget overninja-widget-spacer" data-id="ee06cdc" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-43e61f6 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="43e61f6" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-100 overninja-inner-column overninja-element overninja-element-de44e06" data-id="de44e06" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-background-overlay" />
                                                                        <div className="overninja-element overninja-element-5eb4e78 overninja-widget overninja-widget-spacer" data-id="5eb4e78" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
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
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-76ac138" data-id="76ac138" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-0885c84 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="0885c84" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-fddd670" data-id="fddd670" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-background-overlay" />
                                                                        <div className="overninja-element overninja-element-c422722 overninja-widget overninja-widget-spacer" data-id="c422722" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-3b81689" data-id="3b81689" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-background-overlay" />
                                                                        <div className="overninja-element overninja-element-78d540d overninja-widget overninja-widget-spacer" data-id="78d540d" data-element_type="widget" data-widget_type="spacer.default">
                                                                            <div className="overninja-widget-container">
                                                                                <div className="overninja-spacer">
                                                                                    <div className="overninja-spacer-inner">
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
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-150ae58 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="150ae58" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-cae5541" data-id="cae5541" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-5109a71 overninja-widget overninja-widget-heading" data-id="5109a71" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    04</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-18aebf0 overninja-widget overninja-widget-heading" data-id="18aebf0" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    About Us</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-5663203" data-id={5663203} data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-addb53c overninja-widget overninja-widget-heading" data-id="addb53c" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default">
                                                                    Who we are</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-a4bf50b" data-id="a4bf50b" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-0cb5600 overninja-align-right overninja-widget overninja-widget-button" data-id="0cb5600" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-button-wrapper">
                                                                    <a className="overninja-button overninja-button-link overninja-size-sm" href="#">
                                                                        <span className="overninja-button-content-wrapper">
                                                                            <span className="overninja-button-icon overninja-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="overninja-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-837ff72 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="837ff72" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-100 overninja-top-column overninja-element overninja-element-96e569c" data-id="96e569c" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-2b4d367 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="2b4d367" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-100 overninja-inner-column overninja-element overninja-element-0c5d885" data-id="0c5d885" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-c12e9d8 overninja-widget overninja-widget-heading" data-id="c12e9d8" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h4 className="overninja-heading-title overninja-size-default">
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
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-3686581 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id={3686581} data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-a19f518" data-id="a19f518" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-fe7f46d overninja-widget overninja-widget-heading" data-id="fe7f46d" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h3 className="overninja-heading-title overninja-size-default">
                                                                                    We are the decisive
                                                                                    factor behind your success</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-6fb823c" data-id="6fb823c" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-f89cf62 overninja-widget overninja-widget-text-editor" data-id="f89cf62" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
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
                                                                        <div className="overninja-element overninja-element-9c9e4b9 overninja-widget overninja-widget-text-editor" data-id="9c9e4b9" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
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
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-c1a4b64 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="c1a4b64" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-a9fd454" data-id="a9fd454" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-5c26826 overninja-widget overninja-widget-heading" data-id="5c26826" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    05</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-c0fc686 overninja-widget overninja-widget-heading" data-id="c0fc686" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Some of</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-a1ceee7" data-id="a1ceee7" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-371b1ca overninja-widget overninja-widget-heading" data-id="371b1ca" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default">
                                                                    Our clients</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-bcef965" data-id="bcef965" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-2365b35 overninja-align-right overninja-widget overninja-widget-button" data-id="2365b35" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-button-wrapper">
                                                                    <a className="overninja-button overninja-button-link overninja-size-sm" href="#">
                                                                        <span className="overninja-button-content-wrapper">
                                                                            <span className="overninja-button-icon overninja-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="overninja-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section style={{ marginBottom: 70 }} className="overninja-section overninja-top-section overninja-element overninja-element-a2367c1 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="a2367c1" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-0f461c7" data-id="0f461c7" data-element_type="column">
                                                    <div className="overninja-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-ba79f17" data-id="ba79f17" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-04c70cc overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="04c70cc" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
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
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-c1a4b64 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="c1a4b64" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-a9fd454" data-id="a9fd454" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-5c26826 overninja-widget overninja-widget-heading" data-id="5c26826" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    06</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-c0fc686 overninja-widget overninja-widget-heading" data-id="c0fc686" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Blogs</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-a1ceee7" data-id="a1ceee7" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-371b1ca overninja-widget overninja-widget-heading" data-id="371b1ca" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default">
                                                                    Our insights</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-33 overninja-top-column overninja-element overninja-element-bcef965" data-id="bcef965" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-2365b35 overninja-align-right overninja-widget overninja-widget-button" data-id="2365b35" data-element_type="widget" data-widget_type="button.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-button-wrapper">
                                                                    <a className="overninja-button overninja-button-link overninja-size-sm" href="#">
                                                                        <span className="overninja-button-content-wrapper">
                                                                            <span className="overninja-button-icon overninja-align-icon-left">
                                                                                <i aria-hidden="true" className="fas fa-angle-right" /> </span>
                                                                            <span className="overninja-button-text" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-a2367c1 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="a2367c1" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-0f461c7" data-id="0f461c7" data-element_type="column">
                                                    <div className="overninja-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-ba79f17" data-id="ba79f17" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
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