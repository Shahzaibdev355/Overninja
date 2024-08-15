
// import "../assets/css/theme.css"
// import "../assets/css/post-6.css"

import { faFacebookSquare, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="site-footer" id="colophon" itemID="#colophon">
        <div className="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-2-lheavy ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-primary-footer-builder">
            <div className="ast-builder-grid-row-container-inner">
                <div className="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
                    <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
                        <aside className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1">
                            <section id="block-3" className="widget widget_block">
                                <h5 className="wp-block-heading footer-heading-1">Got a project? </h5>
                            </section>
                        </aside>
                        <aside className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2">
                            <section id="block-4" className="widget widget_block">
                                <h2 className="wp-block-heading footer-heading-2">Let's talk</h2>
                            </section>
                        </aside>
                        <aside className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1">
                            <section id="block-3" className="widget widget_block">
                                <Link to="/contactus" className="wp-block-heading footer-heading-1 footer-link"> Contact Us </Link>
                                
                            </section>
                        </aside>
                        <div className="ast-builder-layout-element ast-flex site-footer-focus-item" data-section="section-fb-social-icons-1">
                                <div className="ast-footer-social-1-wrap ast-footer-social-wrap">
                                    <div className="footer-social-inner-wrap element-social-inner-wrap social-show-label-true ast-social-color-type-custom ast-social-stack-none ast-social-element-style-filled">
                                        <a href=" https://www.facebook.com/OverNinja-Technologies-Pvt-Ltd-102444516208720" aria-label="Facebook" target="_blank" className="ast-builder-social-element ast-inline-flex ast-facebook footer-social-item">
                                            <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                                <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" />
                                            </span></a>
                                        <a href="https://www.instagram.com/over_ninja_tech/" aria-label="Pinterest" target="_blank" className="ast-builder-social-element ast-inline-flex ast-pinterest footer-social-item"><span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />                                    </span></a>
                                        <a href="https://twitter.com/OverNinjaTech/" aria-label="Behance" target="_blank" className="ast-builder-social-element ast-inline-flex ast-behance footer-social-item"><span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />                                    </span></a>
                                        <a href="https://www.linkedin.com/company/overninja-technologies-pvt-ltd/" aria-label="Behance" target="_blank" className="ast-builder-social-element ast-inline-flex ast-behance footer-social-item"><span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />                                    </span></a>
                                        <a href="https://www.youtube.com/channel/UCFOSePYtK_me2voSMpGWEKA" aria-label="Behance" target="_blank" className="ast-builder-social-element ast-inline-flex ast-behance footer-social-item"><span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                            <FontAwesomeIcon icon={faYoutube} className="footer-icon" />                                    </span></a>
                                    </div>
                                </div>
                               


                        </div>
                    </div>
                    <div className="site-footer-primary-section-2 site-footer-section site-footer-section-2">
                        <aside className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-3" aria-label="Footer Widget 3">
                            <section id="text-5" className="widget widget_text">
                                <div className="textwidget">
                                    <p>
                                    <i className="fas fa-map-marker-alt footer-link-2" /> 501, Shapath 1, SG Hwy,
                                        Ahmedabad, Gujarat 380054
                                        <br/>
                                        <i className="fas fa-envelope footer-link-2" /> 
                                        <a href="mailTo:sales@overninja.com" className="footer-link">
                                            sales@overninja.com
                                        </a>
                                        <br/>
                                        <i className="fab fa-skype footer-link-2" />
                                        <a href="https://join.skype.com/invite/qdGdJjdkYUqH" className="footer-link">
                                            overninja.tech
                                        </a>
                                        <br/>
                                        <i className="fab fa-whatsapp footer-link-2" />
                                        <a href="https://api.whatsapp.com/send/?phone=919998847740&text&type=phone_number&app_absent=0" className="footer-link">
                                            +91 999-884-7740
                                        </a>
                                        <br />
                                       
                                        
                                    </p>
                                </div>
                            </section>
                        </aside>
                        <aside className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-4" aria-label="Footer Widget 4">
                            <section id="text-8" className="widget widget_text">
                                <div className="textwidget">
                                    <p style={{lineHeight: '1.1'}} ><strong>Providing creative ideas for your business</strong></p>
                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        <div className="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-2-equal ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-below-footer-builder">
            <div className="ast-builder-grid-row-container-inner">
                <div className="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
                    <div className="site-footer-below-section-1 site-footer-section site-footer-section-1">
                        <div className="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright" data-section="section-footer-builder">
                            <div className="ast-footer-copyright">
                                <p>© 2023 Overninja Technologies | All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer-below-section-2 site-footer-section site-footer-section-2">
                        <div className="footer-widget-area widget-area site-footer-focus-item ast-footer-html-1" data-section="section-fb-html-1">
                                <div className="ast-header-html inner-link-style-">
                                    <div className="ast-builder-html-element">

                                        <section id="block-3" className="widget widget_block">
                                            <Link to="/privacypolicy" className="wp-block-heading footer-link-privacy"> Privacy Policy </Link>
                                            <Link to="/termsofservice" className="wp-block-heading footer-link"> Terms Of Use </Link>
                                        </section>


                                    </div>

                                </div>
                            
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;