

// import '../assets/css/what-we-do.css'
import '../assets/css/blog-slider.css'
import "../assets/css/blog.css"

import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Navbar from './Navbar';
import { useEffect } from "react";
import { Link } from 'react-router-dom';


const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="ast-page-builder-template  overninja-kit-13 overninja-page" id="page">

            <Navbar/>

            <div id="content" className="site-content">
                <div className="ast-container">
                    <div id="primary" className="content-area primary">
                        <main id="main" className="site-main">
                            <article className="post-8 page type-page status-publish ast-article-single" id="post-8" itemType="https://schema.org/CreativeWork" itemScope="itemscope">
                                <header className="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                                </header>
                                <div className="entry-content clear" itemProp="text">
                                    <div data-overninja-type="wp-page" data-overninja-id={8} className="overninja overninja-8">
                                        <section className="overninja-section overninja-top-section overninja-element overninja-element-a0c48cd overninja-section-height-min-height overninja-section-items-bottom overninja-section-boxed overninja-section-height-default" data-id="a0c48cd" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                            <div className="overninja-background-overlay" />
                                            <div style={{ minHeight: '' }} className="overninja-container overninja-column-gap-no">
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-3667665" data-id={3667665} data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-c3b866a overninja-widget-divider--view-line overninja-widget overninja-widget-divider" data-id="c3b866a" data-element_type="widget" data-widget_type="divider.default">
                                                            <div className="overninja-widget-container">
                                                                <div className="overninja-divider">
                                                                    <span className="overninja-divider-separator">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="overninja-column overninja-col-50 overninja-top-column overninja-element overninja-element-009c95e" data-id="009c95e" data-element_type="column">
                                                    <div className="overninja-widget-wrap overninja-element-populated">
                                                        <div className="overninja-element overninja-element-f55bdc6 overninja-widget overninja-widget-heading" data-id="f55bdc6" data-element_type="widget" data-widget_type="heading.default">
                                                            <div className="overninja-widget-container">
                                                                <h1 className="overninja-heading-title overninja-size-default">
                                                                    Blog</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        {/*NEWS SECTION*/}
                                        <section className="news" id="news">
                                            <div className="titletext">
                                                <h1>News <span>Feed</span></h1>
                                            </div>
                                            <div className="container">
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag">News</span>
                                                        <h4>Trending Tech Products</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/x1LjRp9t/pexels-cottonbro-studio-3944454.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag">News</span>
                                                        <h4>Newly Introduced AI Model</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>
                
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/J7dh4BTc/pexels-cottonbro-studio-3944460.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag">News</span>
                                                        <h4>Recent Trends In IT</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/3N6rLPyb/pexels-negative-space-177557.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag">News</span>
                                                        <h4>Top Grossing Video Games</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/ydRz1kWn/pexels-andrea-piacquadio-3760778.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag">News</span>
                                                        <h4>Market Crises</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag tag-blue">News</span>
                                                        <h4>What's new in 2022 Tech</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag tag-blue">News</span>
                                                        <h4>What's new in 2022 Tech</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag tag-blue">News</span>
                                                        <h4>What's new in 2022 Tech</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>
                                                    <div className="card__footer">
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card__header">
                                                        <img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" className="card__image" width={600} />
                                                    </div>
                                                    <div className="card__body">
                                                        <span className="tag tag-blue">News</span>
                                                        <h4>What's new in 2022 Tech</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                                                            perferendis molestiae non nemo
                                                            doloribus. Doloremque, nihil! At ea atque quidem!</p>
                                                    </div>

                                                    <div className="card__footer">
                                                        {/* <div className="user">
                                                            <img src="https://i.pravatar.cc/40?img=21" alt="user__image" className="user__image" />
                                                            <div className="user__info">
                                                                <h5>User 6</h5>
                                                                <small>2h ago</small>
                                                            </div>
                                                        </div> */}
                                                        <Link to="/blog-detail" className="continue-read">Continue Reading  <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faLongArrowAltRight} /></Link>

                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="blog-slider__button">More Blogs</a>
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

export default Blog;