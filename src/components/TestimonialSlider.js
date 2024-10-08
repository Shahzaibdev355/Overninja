


import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";



// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// import '../assets/css/md-bootstrap.css'

// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../assets/css/review-slider.css'

import '../assets/css/md-bootstrap.css';

const TestimonialSlider = () => {

  
  return (

    <MDBContainer style={{paddingLeft: '0px', paddingRight: '0px'}} className="my-5">
      <MDBCarousel showControls dark >
        {/* <MDBCarouselInner> */}
          <MDBCarouselItem className="active text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "100px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p className="">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </MDBCol>
            </MDBRow>
            {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul> */}
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "100px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">John Doe</h5>
                <p>Web Developer</p>
                <p className="">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </MDBCol>
            </MDBRow>
            {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul> */}
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "100px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Anna Deynah</h5>
                <p>Web Developer</p>
                <p className="">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </MDBCol>
            </MDBRow>
            {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul> */}
          </MDBCarouselItem>
        {/* </MDBCarouselInner> */}
      </MDBCarousel>
    </MDBContainer>

  );
}

export default TestimonialSlider;