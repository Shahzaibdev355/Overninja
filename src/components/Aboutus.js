
// import '../assets/css/theme.css'
// import '../assets/css/about.css'
// import '../assets/css/post-6.css'

import TestimonialSlider from './TestimonialSlider'

import '../assets/css/slider.css'

import "../assets/css/counter.css"

import Footer from './Footer'
import Navbar from './Navbar'

import { useEffect } from 'react'



const Aboutus = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    useEffect(() => {
        // const slideTrack = document.querySelector('.slide-track');
        // const slides = document.querySelectorAll('.slide');

        // slides.forEach((slide) => {
        //     const clone = slide.cloneNode(true);
        //     slideTrack.appendChild(clone);
        // });

        var slideTrack = document.querySelector('.review-slide-track');
        var slides = document.querySelectorAll('.review-slide');

        // Clone the slides
        slides.forEach(function (slide) {
            var clone = slide.cloneNode(true);
            slideTrack.appendChild(clone);
        });

    }, []);








    return (

        <div className="page-template-default page page-id-14 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.1.6 ast-single-post ast-inherit-site-logo-transparent ast-theme-transparent-header ast-hfb-header overninja-default overninja-kit-13 overninja-page overninja-page-14" id="page">

            <Navbar />

            <div id="content" className="site-content">
                <div className="ast-container">
                    <div id="primary" className="content-area primary">
                        <main id="main" className="site-main">
                            <article className="post-14 page type-page status-publish ast-article-single" id="post-14" itemType="https://schema.org/CreativeWork" itemScope="itemscope">
                                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                                </header>
                                <div className="entry-content clear" itemProp="text">
                                    <div data-overninja-type="wp-page" data-overninja-id={14} className="overninja overninja-14">
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-371e341 overninja-section-height-min-height overninja-section-items-bottom overninja-section-boxed overninja-section-height-default" data-id="371e341" data-element_type="section">
                                            <div className="overninja-background-overlay" />
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-007f03a" data-id="007f03a" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-4086b8e overninja-widget-divider--view-line overninja-widget overninja-widget-divider" data-id="4086b8e" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-divider">
                                                                    <span className="overninja-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-17048ea" data-id="17048ea" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-56886c0 overninja-widget overninja-widget-heading" data-id="56886c0" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default">
                                                                    About<br />Us</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-44f99fe overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="44f99fe" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-e2a398e" data-id="e2a398e" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-8a5f665 overninja-widget overninja-widget-heading" data-id="8a5f665" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    01</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-8da031c overninja-widget overninja-widget-heading" data-id="8da031c" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Our Vision </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-58a2c21 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="58a2c21" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-100 overninja-top-column overninja-element overninja-element-72c3c00" data-id="72c3c00" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-ae44670 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="ae44670" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-100 overninja-inner-column overninja-element overninja-element-51c7cd1" data-id="51c7cd1" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-049669f overninja-widget overninja-widget-heading" data-id="049669f" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h3 className="overninja-heading-title overninja-size-default">
                                                                                    INNOVATIVE SOLUTIONS THAT INSPIRE GROWTH
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-63c3aa6 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="63c3aa6" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-f976173" data-id="f976173" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-d5c77c9 overninja-widget overninja-widget-heading" data-id="d5c77c9" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                                    Our vision is to emerge as a top company providing online advertising strategies, digital marketing solutions. </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-30658a3" data-id="30658a3" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-973550e overninja-widget overninja-widget-text-editor" data-id="973550e" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
                                                                                <p>We dream of a digital world in which companies now not best live to tell the tale however thrive. At Overninja, we need to be the driving force that facilitates corporations be triumphant in the rapid-paced digital landscape. Our focus is on making the digital global clean to navigate, making sure that groups of all sizes can benefit from it.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-84bbf11 overninja-widget overninja-widget-text-editor" data-id="84bbf11" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
                                                                                <p>We consider inside the electricity of generation to convert companies, and we are dedicated to supporting our clients harness that strength to achieve their desires and depart their mark on the arena.</p>
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
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-44f99fe overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="44f99fe" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-e2a398e" data-id="e2a398e" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-8a5f665 overninja-widget overninja-widget-heading" data-id="8a5f665" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    02</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-8da031c overninja-widget overninja-widget-heading" data-id="8da031c" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Our Mission </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-58a2c21 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="58a2c21" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-100 overninja-top-column overninja-element overninja-element-72c3c00" data-id="72c3c00" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-ae44670 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="ae44670" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-100 overninja-inner-column overninja-element overninja-element-51c7cd1" data-id="51c7cd1" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-049669f overninja-widget overninja-widget-heading" data-id="049669f" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h3 className="overninja-heading-title overninja-size-default">
                                                                                    DELIVER RESULTS THAT EXCEED EXPECTATIONS
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-63c3aa6 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="63c3aa6" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-f976173" data-id="f976173" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-d5c77c9 overninja-widget overninja-widget-heading" data-id="d5c77c9" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                                    We aim to be high-quality in supplying always a success, specific, and ahead-thinking digital marketing solutions                                                                  </h5></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overninja-column overninja-col-50 overninja-inner-column overninja-element overninja-element-30658a3" data-id="30658a3" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-973550e overninja-widget overninja-widget-text-editor" data-id="973550e" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
                                                                                <p>
                                                                                    At Overninja, our mission is to make digital achievement possible for businesses of all kinds. We are dedicated to being the best friend that guides agencies via the digital journey, assisting them grow and leave a mark. Our technique is patron-centered, making sure that agencies sense supported and understood every step of the manner.                                                                      </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="overninja-element overninja-element-84bbf11 overninja-widget overninja-widget-text-editor" data-id="84bbf11" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div className="overninja-widget-container">
                                                                                <p>
                                                                                    We agree with within the electricity of technology to convert agencies, and our challenge is to make that transformation handy and impactful. With our innovative solutions and devoted assist, we are right here to help groups thrive in the digital era.
                                                                                </p>
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
                                        <article className="post-6 page type-page status-publish ast-article-single" id="post-6">
                                            <div className="entry-content clear" itemProp="text">
                                                <div data-overninja-type="wp-page" data-overninja-id={6} className="overninja overninja-6">
                                                    {/* <section className="overninja-section overninja-top-section overninja-element overninja-element-7e8df4c overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="7e8df4c" data-element_type="section">
                                                        <div className="overninja-container overninja-column-gap-no">
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-9021372" data-id={9021372} data-element_type="column">
                                                                <div className="overninja-widget-wrap overninja-element-populated">
                                                                  
                                                                </div>
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-b1f6799" data-id="b1f6799" data-element_type="column">
                                                                <div className="overninja-widget-wrap overninja-element-populated">
                                                                    <div className="overninja-element overninja-element-b5a9291 overninja-widget overninja-widget-heading" data-id="b5a9291" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h2 className="overninja-heading-title overninja-size-default about-heading-different">
                                                                                WHAT MAKES US DIFFERENT </h2>
                                                                        </div>
                                                                    </div>
                                                                    <div className="overninja-element overninja-element-b5a9291 overninja-widget overninja-widget-heading" data-id="b5a9291" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h3 className="overninja-heading-title overninja-size-default">
                                                                                The Codes We Live By </h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section> */}

                                                    <section className="overninja-section overninja-top-section overninja-element overninja-element-44f99fe overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="44f99fe" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-e2a398e" data-id="e2a398e" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-8a5f665 overninja-widget overninja-widget-heading" data-id="8a5f665" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    03</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-8da031c overninja-widget overninja-widget-heading" data-id="8da031c" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                The Codes We Live By </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-58a2c21 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="58a2c21" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-100 overninja-top-column overninja-element overninja-element-72c3c00" data-id="72c3c00" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <section className="overninja-section overninja-inner-section overninja-element overninja-element-ae44670 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="ae44670" data-element_type="section">
                                                            <div className="overninja-container overninja-column-gap-no">
                                                                <div className="overninja-column overninja-col-100 overninja-inner-column overninja-element overninja-element-51c7cd1" data-id="51c7cd1" data-element_type="column">
                                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                                        <div className="overninja-element overninja-element-049669f overninja-widget overninja-widget-heading" data-id="049669f" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div className="overninja-widget-container">
                                                                                <h2 className="overninja-heading-title overninja-size-default about-heading-different">
                                                                                WHAT MAKES US DIFFERENT
                                                                                </h2>
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


                                                    <section style={{ marginTop: 70, marginBottom: 0 }} className="overninja-section overninja-top-section overninja-element overninja-element-3b14451 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="3b14451" data-element_type="section">
                                                        <div className="overninja-container overninja-column-gap-no">
                                                            <div className="overninja-column overninja-col-30 overninja-top-column overninja-element overninja-element-d91be7a" data-id="d91be7a" data-element_type="column">
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-694fdb8" data-id="694fdb8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                                <div className="overninja-widget-wrap overninja-element-populated">
                                                                    <div className="overninja-background-overlay" />
                                                                    <div className="overninja-element overninja-element-14a7c27 overninja-widget overninja-widget-heading" data-id="14a7c27" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h4 className="overninja-heading-title overninja-size-default">
                                                                                Received client briefing</h4>
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
                                                                            <p>defining your needs and the UGC campaign
                                                                                objectives in collaboration to get started
                                                                                on the same page
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-9bc185c" data-id="9bc185c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                                <div className="overninja-widget-wrap overninja-element-populated mob-box-color">
                                                                    <div className="overninja-background-overlay" />
                                                                    <div className="overninja-element overninja-element-e80000e overninja-widget overninja-widget-heading" data-id="e80000e" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h4 className="overninja-heading-title overninja-size-default">
                                                                                Targeting &amp; Creator Brief </h4>
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
                                                                            <p>We develop a customized brief for our
                                                                                creators in accordance with the goals and
                                                                                requirements of the client. We then create a
                                                                                successful targeting strategy.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-944be9d" data-id="944be9d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                                <div className="overninja-widget-wrap overninja-element-populated ">
                                                                    <div className="overninja-background-overlay" />
                                                                    <div className="overninja-element overninja-element-67d262a overninja-widget overninja-widget-heading" data-id="67d262a" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h4 className="overninja-heading-title overninja-size-default">
                                                                                Utilizing the UGC Creators in Our Army</h4>
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
                                                                            <p>utilizing our enormous network of creative
                                                                                artists from a range of industries, markets,
                                                                                and genres.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section style={{ marginTop: 0 }} className="overninja-section overninja-top-section overninja-element overninja-element-3b14451 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="3b14451" data-element_type="section">
                                                        <div className="overninja-container overninja-column-gap-no">
                                                            <div className="overninja-column overninja-col-30 overninja-top-column overninja-element overninja-element-d91be7a" data-id="d91be7a" data-element_type="column">
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-694fdb8" data-id="694fdb8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                                <div className="overninja-widget-wrap overninja-element-populated mob-box-color">
                                                                    <div className="overninja-background-overlay" />
                                                                    <div className="overninja-element overninja-element-14a7c27 overninja-widget overninja-widget-heading" data-id="14a7c27" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h4 className="overninja-heading-title overninja-size-default">
                                                                                Choosing the Best Fit</h4>
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
                                                                            <p>Our staff evaluates and screens candidates to
                                                                                identify the best match for your
                                                                                objectives based on their qualifications,
                                                                                experience, and work preferences.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-9bc185c" data-id="9bc185c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                                <div className="overninja-widget-wrap overninja-element-populated">
                                                                    <div className="overninja-background-overlay" />
                                                                    <div className="overninja-element overninja-element-e80000e overninja-widget overninja-widget-heading" data-id="e80000e" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h4 className="overninja-heading-title overninja-size-default">
                                                                                Starting Your Campaign Off! </h4>
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
                                                                            <p>After obtaining the content from the authors,
                                                                                we start, evaluate, and refine your
                                                                                campaign. Extra content is transformed into
                                                                                brand assets.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-944be9d" data-id="944be9d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                                                                <div className="overninja-widget-wrap overninja-element-populated">
                                                                    <div className="overninja-background-overlay" />
                                                                    <div className="overninja-element overninja-element-67d262a overninja-widget overninja-widget-heading" data-id="67d262a" data-element_type="widget" data-widget_type="heading.default">
                                                                        <div className="overninja-widget-container">
                                                                            <h4 className="overninja-heading-title overninja-size-default">
                                                                                Save a lot</h4>
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
                                                                            <p>You receive fantastic stuff for less money as
                                                                                opposed to being charged according to
                                                                                your following size.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </article>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-7e8df4c overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="7e8df4c" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-9021372" data-id={9021372} data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-f29bf23 overninja-widget overninja-widget-heading" data-id="f29bf23" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    04</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-8ed9ffd overninja-widget overninja-widget-heading" data-id="8ed9ffd" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Our Work</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-100 overninja-top-column overninja-element overninja-element-b1f6799" data-id="b1f6799" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div id="projectFacts" className="sectionClass">
                                                            <div className="fullWidth">
                                                                <div className="projectFactsWrap">
                                                                    <div className="item wow fadeInUpBig animated" data-number={12} style={{ visibility: 'visible' }}>
                                                                        <p id="number1" className="number">10+</p>
                                                                        <p>Satisfied Clients</p>
                                                                    </div>
                                                                    <div className="item wow fadeInUpBig animated" data-number={55} style={{ visibility: 'visible' }}>
                                                                        <p id="number2" className="number">30+</p>
                                                                        <p>Campaign managed</p>
                                                                    </div>
                                                                    <div className="item wow fadeInUpBig animated" data-number={359} style={{ visibility: 'visible' }}>
                                                                        <p id="number3" className="number">250k+</p>
                                                                        <p>Revenue Generated</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                      


                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-7e8df4c overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="7e8df4c" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-9021372" data-id={9021372} data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-f29bf23 overninja-widget overninja-widget-heading" data-id="f29bf23" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h6 className="overninja-heading-title overninja-size-default">
                                                                    05</h6>
                                                            </div>
                                                        </div>
                                                        <div className="overninja-element overninja-element-8ed9ffd overninja-widget overninja-widget-heading" data-id="8ed9ffd" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h5 className="overninja-heading-title overninja-size-default">
                                                                    Reviews</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-b1f6799" data-id="b1f6799" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-b5a9291 overninja-widget overninja-widget-heading" data-id="b5a9291" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h2 className="overninja-heading-title overninja-size-default about-heading-different">
                                                                    WHAT OUR CLIENTS SAY</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-12bd395 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="12bd395" data-element_type="section">
                                            <div className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-cb3011a" data-id="cb3011a" data-element_type="column">
                                                    <div className="overninja-widget-wrap">
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-7479ef5" data-id="7479ef5" data-element_type="column">
                                                    <div style={{ background: 'rgb(28,39,53)', border: '1px solid #2f3742' }} className="overninja-widget-wrap overninja-element-populated">

                                                        <TestimonialSlider />



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

            {/* <Footer /> */}

        </div>


    );
}

export default Aboutus;