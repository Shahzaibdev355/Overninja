


import { useEffect, useState } from "react";
import '../assets/css/navbar.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/bootstrap-icons.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link  } from "react-router-dom";
import PropTypes from 'prop-types';

import Logo from '../assets/Logo/New Logo.png'


const Navbar = ( { pageClassName } ) => {

    Navbar.propTypes = {
        pageClassName: PropTypes.string,
    };

   
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [isDeepDropdownOpen, setDeepDropdownOpen] = useState(false);
    const [isDeepDropdownOpen2, setDeepDropdownOpen2] = useState(false);
    const [isDeepDropdownOpen3, setDeepDropdownOpen3] = useState(false);
    const [isDeepDropdownOpen4, setDeepDropdownOpen4] = useState(false);
    const [isDeepDropdownOpen5, setDeepDropdownOpen5] = useState(false);


   


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
        // Close the deep dropdown when the top-level dropdown is toggled
        setDeepDropdownOpen(false);
        setDeepDropdownOpen2(false)
        setDeepDropdownOpen3(false)
        setDeepDropdownOpen4(false)
        setDeepDropdownOpen5(false)
    };




    const toggleDeepDropdown = (e) => {
        e.stopPropagation();
        setDeepDropdownOpen(!isDeepDropdownOpen);
        setDeepDropdownOpen2(false)
        setDeepDropdownOpen3(false)
        setDeepDropdownOpen4(false)
        setDeepDropdownOpen5(false)
    };


    const toggleDeepDropdown2 = (e) => {
        e.stopPropagation();
        setDeepDropdownOpen2(!isDeepDropdownOpen2);
        setDeepDropdownOpen(false)
        setDeepDropdownOpen3(false)
        setDeepDropdownOpen4(false)
        setDeepDropdownOpen5(false)
    };

    const toggleDeepDropdown3 = (e) => {
        e.stopPropagation();
        setDeepDropdownOpen3(!isDeepDropdownOpen3);
        setDeepDropdownOpen(false)
        setDeepDropdownOpen2(false)
        setDeepDropdownOpen4(false)
        setDeepDropdownOpen5(false)
    };

    const toggleDeepDropdown4 = (e) => {
        e.stopPropagation();
        setDeepDropdownOpen4(!isDeepDropdownOpen4);
        setDeepDropdownOpen(false)
        setDeepDropdownOpen2(false)
        setDeepDropdownOpen3(false)
        setDeepDropdownOpen5(false)
    };

    const toggleDeepDropdown5 = (e) => {
        e.stopPropagation();
        setDeepDropdownOpen5(!isDeepDropdownOpen5);
        setDeepDropdownOpen(false)
        setDeepDropdownOpen2(false)
        setDeepDropdownOpen3(false)
        setDeepDropdownOpen4(false)
    };



    
    const handleNavLinkClick = () => {
        
        setIsMobileNavOpen(false);
        setDropdownOpen(false);
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
    };


    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
   


    


    return (
        <>




            {/* <nav style={{ border: '3px solid red' }} id="navbar" className="navbar"> */}
            {/* <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}   > */}
            <nav
                id="navbar"
                className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''} ${pageClassName}`}
                >

                <Link href="" className="logo-link"> <img style={{ width: 200, height: 'auto' }} src={Logo} alt /></Link>


                <ul>
                    <li><Link className="nav-link scrollto " to="/about"
                        onClick={handleNavLinkClick} >About Us</Link></li>

                    {/* <li><Link className="nav-link scrollto " to="/service"  onClick={handleNavLinkClick}>What We Do</Link></li> */}
                    

                    <li className="dropdown megamenu">
                   

                        <Link className="nav-link scrollto " to="/service"><span>Services</span> 

                            <FontAwesomeIcon icon={faAngleDown} className="nav-icon1"/>
                        </Link>

                        <ul style={{ border: '', display: '' }}>
                            <li className="service-column-1">
                                <h4 >Brand Marketing</h4>
                                <Link to="/mobilestrategy">Mobile Strategy</Link>
                                <Link to="/digitalstrategy" >Digital Strategy</Link>
                                <Link to="/socialstrategy">Social Strategy</Link>
                                <Link to="/productstrategy" >Product Strategy</Link>
                                <Link to="/analytics&bi">Analytics & BI</Link>
                            </li>
                            <li className="service-column-2">
                                <h4>Creative Content</h4>
                                <Link to="/marketing-video-production" >Marketing Video Production  </Link>
                                <Link to="/concept-design"  >Concept & Design</Link>
                                <Link to="/social-media-management"  >Social Media Management</Link>
                                <Link to="/app-store-asset"  >App Store Assets</Link>
                                <Link to="/ugs-videos" > User Generated Content</Link>
                            </li>
                            <li className="service-column-3">
                                <h4> Media Buying</h4>
                                <Link to="/social-media&search-ads" >Social Media & Search Ads</Link>
                                <Link to="/ad-networks" >Ad Networks & RTBs</Link>
                                <Link to="/influencer-marketing" >Influencer Marketing</Link>
                                <Link to="/email-marketing" >Email Marketing</Link>
                                <Link to="/ott-marketing" >OTT Marketing</Link>
                            </li>
                            <li className="service-column-4">
                                <h4>Organic Awareness</h4>
                                <Link to="/seo">Search Engine Optimization</Link>
                                <Link to="/app-store-optimization">App Store Optimization</Link>
                                <Link to="/conversion-rate-optimization">Conversion Rate Optimization</Link>
                                <Link to="/aso-localization">ASO Localization</Link>
                                <Link to="" />
                                <br />
                            </li>
                            <li className="service-column-5">
                                <h4> Product Dev </h4>
                                <Link to="/product-consulting" >Product Consulting</Link>
                                <Link to="/ui-ux" > UI & UX</Link>
                                <Link to="/web-development" >Web Development</Link>
                                <Link to="/digital-transformation" >Digital Transformation</Link>
                                <Link to="/app-development" >App Development</Link>
                            </li>
                        </ul>

                    </li>




                    <li
                        style={{ }}
                        className={`dropdown deep-dropdown ${isDropdownOpen ? 'dropdown-active' : ''}`}
                        onClick={toggleDropdown}
                    >
                        <Link to="#">
                            <span> Services </span> 
                            {/* <i className="bi bi-chevron-down" /> */}
                            <FontAwesomeIcon icon={faAngleDown} className="nav-icon2"/>
                        </Link>


                        <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>

                            
                            <li
                                className={`dropdown ${isDeepDropdownOpen ? 'dropdown-active' : ''}`}
                                onClick={toggleDeepDropdown}
                            >

                                <Link href="#">
                                    <span>Brand Marketing</span>
                                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon3"/>
                                </Link>


                                <ul style={{ display: isDeepDropdownOpen ? 'block' : 'none' }}>

                                <li><Link to="/mobilestrategy"  onClick={handleNavLinkClick}>Mobile Strategy</Link> </li>
                                <li><Link to="/digitalstrategy"  onClick={handleNavLinkClick}>Digital Strategy</Link> </li>
                                <li><Link to="/socialstrategy"  onClick={handleNavLinkClick}>Social Strategy</Link> </li>
                                <li><Link to="/productstrategy"  onClick={handleNavLinkClick}>Product Strategy</Link> </li>
                                <li><Link to="/analytics&bi"   onClick={handleNavLinkClick}>Analytics & BI</Link> </li>

                                </ul>
                            </li>


                            <li
                                className={`dropdown ${isDeepDropdownOpen2 ? 'dropdown-active' : ''}`}
                                onClick={toggleDeepDropdown2}
                            >

                                <Link href="#">
                                    <span>Creative Content</span> 
                                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon3"/>
                                </Link>

                                {/* <ul> */}

                                <ul style={{ display: isDeepDropdownOpen2 ? 'block' : 'none' }}>

                                <li><Link to="/marketing-video-production"   onClick={handleNavLinkClick}>Marketing Video Production  </Link> </li>
                                <li><Link to="/concept-design"  onClick={handleNavLinkClick}>Concept & Design</Link> </li>
                                <li><Link to="/social-media-management"  onClick={handleNavLinkClick} >Social Media Management</Link> </li>
                                <li><Link to="/app-store-asset"   onClick={handleNavLinkClick} >App Store Assets</Link> </li>
                                <li><Link to="/ugs-videos"  onClick={handleNavLinkClick}> User Generated Content</Link> </li>

                                </ul>
                            </li>

                            <li
                                className={`dropdown ${isDeepDropdownOpen3 ? 'dropdown-active' : ''}`}
                                onClick={toggleDeepDropdown3}
                            >

                                <Link href="#">
                                    <span>Media Buying</span> 
                                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon3"/>
                                </Link>

                                {/* <ul> */}

                                <ul style={{ display: isDeepDropdownOpen3 ? 'block' : 'none' }}>

                                <li><Link to="/social-media&search-ads"  onClick={handleNavLinkClick}>Social Media & Search Ads</Link> </li>
                                <li><Link to="/ad-networks"  onClick={handleNavLinkClick}>Ad Networks & RTBs</Link> </li>
                                <li><Link to="/influencer-marketing"  onClick={handleNavLinkClick}>Influencer Marketing</Link> </li>
                                <li><Link to="/email-marketing"  onClick={handleNavLinkClick}>Email Marketing</Link> </li>
                                <li><Link to="/ott-marketing"  onClick={handleNavLinkClick}>OTT Marketing</Link> </li>

                                </ul>
                            </li>


                            <li
                                className={`dropdown ${isDeepDropdownOpen4 ? 'dropdown-active' : ''}`}
                                onClick={toggleDeepDropdown4}
                            >

                                <Link href="#">
                                    <span>Organic Awareness</span> 
                                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon3"/>
                                </Link>

                                {/* <ul> */}

                                <ul style={{ display: isDeepDropdownOpen4 ? 'block' : 'none' }}>

                                <li><Link to="/seo"  onClick={handleNavLinkClick}>Search Engine Optimization</Link> </li>
                                <li><Link to="/app-store-optimization"  onClick={handleNavLinkClick}>App Store Optimization</Link> </li>
                                <li><Link to="/conversion-rate-optimization"  onClick={handleNavLinkClick}>Conversion Rate Optimization</Link> </li>
                                <li><Link to="/aso-localization"  onClick={handleNavLinkClick}>ASO Localization</Link> </li>

                                </ul>
                            </li>


                            <li
                                className={`dropdown ${isDeepDropdownOpen5 ? 'dropdown-active' : ''}`}
                                onClick={toggleDeepDropdown5}
                            >

                                <Link href="#">
                                    <span>Product Dev</span> 
                                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon3"/>
                                </Link>

                                {/* <ul> */}

                                <ul style={{ display: isDeepDropdownOpen5 ? 'block' : 'none' }}>

                                <li><Link to="/product-consulting"  onClick={handleNavLinkClick}>Product Consulting</Link> </li>
                                <li><Link to="/ui-ux"  onClick={handleNavLinkClick}> UI& UX</Link> </li>
                                <li><Link to="/web-development"  onClick={handleNavLinkClick}>Web Development</Link> </li>
                                <li><Link to="/digital-transformation"  onClick={handleNavLinkClick}>Digital Transformation</Link> </li>
                                <li><Link to="/app-development"  onClick={handleNavLinkClick}>App Development</Link> </li>

                                </ul>
                            </li>



                        </ul>



                    </li>







                    <li><Link className="nav-link scrollto navLink-mobile" to="/service"  onClick={handleNavLinkClick} >What We Do</Link></li>

                    <li><Link className="nav-link scrollto" to="/casestudies"  onClick={handleNavLinkClick} >Case studies</Link></li>
                    <li><Link className="nav-link scrollto " to="/blog"   onClick={handleNavLinkClick}>Blog</Link></li>
                    <li><Link className="nav-link scrollto" to="/contactus"  onClick={handleNavLinkClick} >Contact</Link></li>
                    <li><Link className="getstarted scrollto" to="/marketingaudit"  onClick={handleNavLinkClick} >Get Free Audit</Link></li>
                    
                </ul>

                {/* <i className="bi bi-list mobile-nav-toggle" onClick={testNav} /> */}
                {/* <FontAwesomeIcon icon={faBars} className="mobile-nav-toggle" onClick={testNav}/> */}
                
               
                {/* <FontAwesomeIcon icon={isMobileNavOpen ? faXmark : faBars}  className="mobile-nav-toggle" onClick={testNav}/> */}

                <div
                    className={`mobile-nav-toggle ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}
                    onClick={toggleMobileNav}
                >
                    <FontAwesomeIcon icon={isMobileNavOpen ? faXmark : faBars} className="mobile-nav-icon"/>
                </div>
           
            </nav>




        </>


    );
}

export default Navbar;