
// import '../assets/css/bootstrap.min.css'

// import '../assets/css/form-min.css'
import '../assets/css/blog-detail.css'

import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faClock, faFolder, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'
import Navbar from './Navbar'

const BlogDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  


    return (

        <>

            <Navbar pageClassName="blog-detail-navbar"/>

            <section  id="blog" className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 entries">
                            <article className="entry entry-single">
                                <div className="entry-img">

                                    <img src="./images/blog/blog-1.jpg" alt className="img-fluid" />
                                </div>
                                <h2 className="entry-title">
                                    Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
                                </h2>
                                <div className="entry-meta">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <FontAwesomeIcon className='blog-icon' icon={faUser} />
                                            <p style={{ marginBottom: '0px' }}> John Doe </p>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <FontAwesomeIcon className='blog-icon' icon={faClock} />

                                            <time className='blog-time' dateTime="2020-01-01">Jan 1, 2020</time>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                        Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                    </p>
                                    <p>
                                        Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                                    </p>
                                    <blockquote>
                                        <p>
                                            Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                                        </p>
                                    </blockquote>
                                    <p>
                                        Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                                        Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                                        Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                                    </p>


                                    <div className="col-md-8 contact-us-box">
                                        <h4>Looking to Maximize Your App’s Potential?</h4>
                                        <p>Our team is always ready to help!</p>

                                        <Link to='/contactus'> Contact Us </Link>


                                    </div>


                                    <h3>Et quae iure vel ut odit alias.</h3>
                                    <p>
                                        Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                        Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                        Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                                    </p>
                                    <img src="./images/blog/blog-inside-post.jpg" className="img-fluid" alt />
                                    <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                                    <p>
                                        Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                                        Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                                    </p>
                                    <p>
                                        Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                                    </p>
                                </div>
                                <div className="entry-footer">
                                    {/* <i className="bi bi-folder" /> */}
                                    <FontAwesomeIcon icon={faFolder} />
                                    <ul className="cats">
                                        <li><a href="#">Business</a></li>
                                    </ul>
                                    {/* <i className="bi bi-tags" /> */}
                                    <FontAwesomeIcon icon={faTags} />
                                    <ul className="tags">
                                        <li><a href="#">Creative</a></li>
                                        <li><a href="#">Tips</a></li>
                                        <li><a href="#">Marketing</a></li>
                                    </ul>
                                </div>
                            </article>{/* End blog entry */}
                            <div className="blog-author d-flex align-items-center">
                                <img src="./images/blog/blog-author.jpg" className="rounded-circle float-left" alt />
                                <div>
                                    <h4>Jane Smith</h4>
                                    <div className="social-links">
                                        <a href="https://twitters.com/#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="https://facebook.com/#">
                                            {/* <i className="bi bi-facebook" /> */}
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        <a href="https://instagram.com/#">
                                            {/* <i className="biu bi-instagram" /> */}
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </div>
                                    <p>
                                        Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                                    </p>
                                </div>
                            </div>{/* End blog author bio */}

                            <div className="blog-comments">



                                <div className="col-md-8 reply-form">
                                    <h4>Sign up to our newsletter</h4>
                                    <p>Your email address will not be published. Required fields are marked * </p>
                                    <form action>
                                        <div className="row">

                                            <div className="col-md-8 form-group">
                                                <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                                            </div>
                                        </div>


                                        <button type="submit" className="btn btn-primary">Subscribe</button>
                                    </form>
                                </div>


                            </div>{/* End blog comments */}


                        </div>{/* End blog entries list */}


                        <div className="col-lg-4">
                            <div className="sidebar">



                                <section className="overninja-section overninja-inner-section overninja-element overninja-element-a5259c0 overninja-section-boxed overninja-section-height-default overninja-section-height-default" data-id="a5259c0" data-element_type="section">
                                    <div className="overninja-container overninja-column-gap-no justify-content-center">
                                        <div className="overninja-column overninja-col-80 overninja-inner-column overninja-element overninja-element-c813780" data-id="c813780" data-element_type="column">
                                            <div className="overninja-widget-wrap overninja-element-populated">
                                                <div className="overninja-element overninja-element-5f8ba3d overninja-widget overninja-widget-shortcode" data-id="5f8ba3d" data-element_type="widget" data-widget_type="shortcode.default">
                                                    <div className="overninja-widget-container">
                                                        <h4 className="overninja-heading-title overninja-size-default">
                                                            Looking for something else?
                                                        </h4>
                                                        <p style={{ marginTop: '8px', marginBottom: '7px' }}>
                                                            Growing together is so much faster!
                                                        </p>
                                                        <div className="overninja-shortcode">
                                                            <div className="wpforms-container " id="wpforms-5">
                                                                <form id="" className="wpforms-validate wpforms-form" method="">

                                                                    <div className="wpforms-field-container">
                                                                        <div id="wpforms-5-field_0-container" className="wpforms-field wpforms-field-name" >
                                                                            <div className="wpforms-field-row wpforms-field-large">

                                                                                <div className="wpforms-field-row-block wpforms-first ">
                                                                                    <label className="wpforms-field-label" >
                                                                                        First Name
                                                                                        <span className="wpforms-required-label">*</span></label>
                                                                                    <input type="text" id="" className="wpforms-field-name-first wpforms-field-required" name="" required />

                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        <div id="wpforms-5-field_0-container" className="wpforms-field wpforms-field-name" data-field-id={0}>
                                                                            <div className="wpforms-field-row wpforms-field-large">

                                                                                <div className="wpforms-field-row-block wpforms-first ">
                                                                                    <label className="wpforms-field-label">
                                                                                        Email Address
                                                                                        <span className="wpforms-required-label">*</span></label>
                                                                                    <input type="text" id="" className="wpforms-field-name-first wpforms-field-required" name="" required />

                                                                                </div>

                                                                            </div>

                                                                        </div>



                                                                        <div id="wpforms-5-field_1-container" className="wpforms-field wpforms-field-email" data-field-id={1}>
                                                                            <select id="" className="wpforms-field-large wpforms-field-required" name="" spellCheck="false" required>
                                                                                <option value="">  Montly Budget </option>
                                                                                <option value=""> option1 </option>
                                                                                <option value=""> option2 </option>
                                                                                <option value=""> option3 </option>
                                                                            </select>
                                                                        </div>

                                                                        <div id="wpforms-5-field_1-container" className="wpforms-field wpforms-field-email" data-field-id={1}>
                                                                            <select id="" className="wpforms-field-large wpforms-field-required" name="" spellCheck="false" required>
                                                                                <option value=""> Choose Service(s) </option>
                                                                                <option value=""> option1 </option>
                                                                                <option value=""> option2 </option>
                                                                                <option value=""> option3 </option>
                                                                            </select>
                                                                        </div>

                                                                    </div>
                                                                    <div className="wpforms-submit-container">

                                                                        <button type="submit" name="wpforms[submit]" id="wpforms-submit-5" className="sidebar-submit-btn" value="">Submit</button>

                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>




                            </div>{/* End sidebar */}



                        </div>{/* End blog sidebar */}
                    </div>
                </div>
            </section>

        </>


    );
}

export default BlogDetail;


