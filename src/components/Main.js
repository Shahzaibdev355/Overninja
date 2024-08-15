import { Route, Routes } from "react-router-dom";

import '../assets/css/theme.css'
// import "../assets/css/main.min.css"

import "../assets/css/post-13.css"
import "../assets/css/home.css"

import '../assets/css/what-we-do.css'
import '../assets/css/case-studies.css'
import '../assets/css/about.css'
import '../assets/css/contact-us.css'


import '../assets/css/style.min.css'
import '../assets/css/global.css'
import '../assets/css/frontend.min.css'
import '../assets/css/swiper.min.css'
import '../assets/css/blocks.css'
import '../assets/css/v4-shims.min.css'




import "../assets/css/bg-images.css"

import Footer from "./Footer";
import Navbar from "./Navbar";

import Home from "./Home";
import Service from "./Service";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import CaseStudies from "./CaseStudies";
import FreeAudit from "./FreeAudit";
import MobileStrategy from "./brand-marketing/MobileStrategy";
import DigitalStrategy from "./brand-marketing/DigitalStrategy";
import ProductStrategy from "./brand-marketing/ProductStrategy";
import SocialStrategy from "./brand-marketing/SocialStrategy";
import AnalyticsBi from "./brand-marketing/AnalyticsBi";
import MarketingVideoPro from "./creative-content/MarketingVideoPro";
import ConceptDesign from "./creative-content/ConceptDesign";
import SocialMediaMan from "./creative-content/SocialMediaMan";
import AppStoreAss from "./creative-content/AppStoreAss";
import UserGenCon from "./creative-content/UserGenCon";
import SocialMedSearchAds from "./media-buying/SocialMedSearchAds";
import InfluMarket from "./media-buying/InfluMarket";
import EmailMarket from "./media-buying/EmailMarket";
import OttMarket from "./media-buying/OttMarket";
import SearchEngOpt from "./organic-awareness/SearchEngOpt";
import AppStoreOpt from "./organic-awareness/AppStoreOpt";
import ConversionRateOpt from "./organic-awareness/ConversionRateOpt";
import AsoLocal from "./organic-awareness/AsoLocal";
import ProductConsult from "./product-dev/ProductConsult";
import UiUx from "./product-dev/UiUx";
import WebDev from "./product-dev/WebDev";
import DigitalTrans from "./product-dev/DigitalTrans";
import AppDev from "./product-dev/AppDev";
import AdNetwork from "./media-buying/AdNetwork";
import Privacy from "./Privacy";
import Terms from "./Terms";
import CaseStdyDetail from "./CaseStdyDetail";
import BlogDetail from "./BlogDetail";

const Main = () => {
    return ( 
        <>

            {/* <Navbar/> */}

                <Routes>


                    <Route path="/" element={<Home/>} ></Route>
                    <Route path="/about" element={<Aboutus/>}></Route>
                    <Route path="/service" element={<Service/>} ></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/contactus" element={<ContactUs/>}></Route>
                    <Route path="/casestudies" element={<CaseStudies/>}></Route>
                    <Route path="/marketingaudit" element={<FreeAudit/>}></Route>
                    <Route path="/privacypolicy" element={<Privacy/>}></Route>
                    <Route path="/termsofservice" element={<Terms/>}></Route>

                    <Route path="/case-study-detail" element={<CaseStdyDetail/>}></Route>

                    <Route path="/blog-detail" element={<BlogDetail/>}></Route>

                    

                    <Route path="/mobilestrategy" element={<MobileStrategy/>}></Route>
                    <Route path="/digitalstrategy" element={<DigitalStrategy/>}></Route>
                    <Route path="/productstrategy" element={<ProductStrategy/>}></Route>
                    <Route path="/socialstrategy" element={<SocialStrategy/>}></Route>
                    <Route path="/analytics&bi" element={<AnalyticsBi/>}></Route>

                    <Route path="/marketing-video-production" element={<MarketingVideoPro/>}></Route>
                    <Route path="/concept-design" element={<ConceptDesign/>}></Route>
                    <Route path="/social-media-management" element={<SocialMediaMan/>}></Route>
                    <Route path="/app-store-asset" element={<AppStoreAss/>}></Route>
                    <Route path="/ugs-videos" element={<UserGenCon/>}></Route>

                    <Route path="/social-media&search-ads" element={<SocialMedSearchAds/>}></Route>
                    <Route path="/ad-networks" element={<AdNetwork/>}></Route>
                    <Route path="/influencer-marketing" element={<InfluMarket/>}></Route>
                    <Route path="/email-marketing" element={<EmailMarket/>}></Route>
                    <Route path="/ott-marketing" element={<OttMarket/>}></Route>

                    <Route path="/seo" element={<SearchEngOpt/>}></Route>
                    <Route path="/app-store-optimization" element={<AppStoreOpt/>}></Route>
                    <Route path="/conversion-rate-optimization" element={<ConversionRateOpt/>}></Route>
                    <Route path="/aso-localization" element={<AsoLocal/>}></Route>

            
                    <Route path="/product-consulting" element={<ProductConsult/>}></Route>
                    <Route path="/ui-ux" element={<UiUx/>}></Route>
                    <Route path="/web-development" element={<WebDev/>}></Route>
                    <Route path="/digital-transformation" element={<DigitalTrans/>}></Route>
                    <Route path="/app-development" element={<AppDev/>}></Route>
                  

                   
                </Routes>

            <Footer/>

        </>
     );
}
 
export default Main;