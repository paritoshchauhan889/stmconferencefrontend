import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";


const Services = () => {
  return (
    <Layout title={'Service - pages'}>
      <div className="row mx-2">
        <div className="col-md-12  ">
          <div className="section-title text-center mb-4 pb-2">
            <h1 className="title mb-4 mt-3" style={{ color: "#1d5818", fontSize: 50 }}>Our Services</h1>
            <hr></hr>
            <p
             
              className="text-muted para-desc  mb-0 text-center"
            >
              At STM Conferences, we are committed to providing top-notch
              services that enable researchers and professionals to make a
              lasting impact in their respective fields. Our offerings are
              designed to support you at every stage of your journey, whether
              it's publishing your work, reaching your target audience, or
              orchestrating successful conferences. Get in touch with us today
              to explore how we can collaborate to elevate your academic and
              professional endeavors.
            </p>
          </div>

        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card service-wrapper rounded border-0 shadow p-4"  style={{marginTop: '15px',
    marginBottom: '15px'}}>
              <div className="content">
                <h5 className="title">Author Services</h5>
                <p className="text-muted ">
                  Empower your authors with comprehensive support through every
                  stage of their publication journey. Our Author Services are
                  designed to assist researchers in optimizing their manuscripts
                  for submission, ensuring that their work meets the highest
                  quality standards. From formatting and language editing to
                  peer-review guidance, we provide the tools authors need to
                  enhance their chances of successful publication.
                </p>
                <div className="mt-3">
                  <Link to="/author-services" className="text-custom">
                    Read More <i className="mdi mdi-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="big-icon h1 text-custom">
                <span className="uim-svg" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                  >
                    <path
                      className="uim-primary"
                      d="M12,6a.99974.99974,0,0,1,1,1v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12V7A.99974.99974,0,0,1,12,6Z"
                    />
                    <path
                      className="uim-tertiary"
                      d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-4 mt-2">
            <div className="card service-wrapper rounded border-0 shadow p-4"  style={{marginTop: '15px',
    marginBottom: '15px'}}>
              <div className="content ">
                <h5 className="title">Advertising</h5>
                <p className="text-muted mt-3 mb-0">
                  Promote your research, products, and services effectively with
                  our Advertising solutions. Reach a global audience of
                  researchers, academics, and professionals within your industry.
                  Our tailored advertising options enable you to showcase your
                  offerings in a strategic and engaging manner, maximizing your
                  brand visibility and impact.
                </p>
                <div className="mt-3">
                  <Link to="/aboutus" className="text-custom">
                    Read More <i className="mdi mdi-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="big-icon h1 text-custom">
                <span className="uim-svg" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em" 
                  >
                    <path
                      className="uim-primary"
                      d="M12,6a.99974.99974,0,0,1,1,1v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12V7A.99974.99974,0,0,1,12,6Z"
                    />
                    <path
                      className="uim-tertiary"
                      d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4 mb-4">
            <div className="card service-wrapper rounded border-0 shadow p-4"  style={{marginTop: '15px',
    marginBottom: '15px'}}>
              <div className="content">
                <h5 className="title">Conferences Facilitating</h5>
                <p className="text-muted  mb-0">
                  Organizing a successful conference requires meticulous planning
                  and execution. Our Conferences Facilitating service is your
                  partner in ensuring that your events run smoothly and
                  seamlessly. From pre-event logistics to on-site coordination, we
                  handle the details, leaving you free to focus on delivering a
                  valuable experience to your attendees.
                </p>
                <div className="mt-3">
                  <Link to="/conference-facilitation-services" className="text-custom">
                    Read More <i className="mdi mdi-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="big-icon h1 text-custom">
                <span className="uim-svg" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                  >
                    <path
                      className="uim-primary"
                      d="M12,6a.99974.99974,0,0,1,1,1v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12V7A.99974.99974,0,0,1,12,6Z"
                    />
                    <path
                      className="uim-tertiary"
                      d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4 mb-4">
            <div className="card service-wrapper rounded border-0 shadow p-4" style={{marginTop: '15px',
    marginBottom: '15px'}}>
              <div className="content ">
                <h5 className="title"> Conference Publication Service</h5>
                <p className="text-muted mb-0">
                  Capture the essence of your conferences and share the knowledge
                  gained with a wider audience through our Conference Publication
                  Service. We help you compile and curate conference proceedings,
                  ensuring that the insights, research, and discussions presented
                  during your events are preserved and accessible to scholars,
                  researchers, and practitioners around the world.
                </p>
                <div className="mt-3">
                  <Link to="/conference-publication-service" className="text-custom">
                    Read More <i className="mdi mdi-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="big-icon h1 text-custom">
                <span className="uim-svg" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                  >
                    <path
                      className="uim-primary"
                      d="M12,6a.99974.99974,0,0,1,1,1v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12V7A.99974.99974,0,0,1,12,6Z"
                    />
                    <path
                      className="uim-tertiary"
                      d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.42249l2.09766,1.2113a1.00016,1.00016,0,0,1-1,1.73242l-2.59766-1.5A1.00455,1.00455,0,0,1,11,12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Services;
