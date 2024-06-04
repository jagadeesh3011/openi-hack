/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { React } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* header area End */}

      <div className="dash-board-main-wrapper">
        <div className="main-center-content-m-left main-center-content-m-left">
          <div className="banner-badge bg_image">
            <div className="inner">
              <h3 className="title">
                Knowledge Repository and Intelligent Search System
              </h3>
              <p className="dsic">
                Develop an AI-powered knowledge repository and intelligent
                search system that leverages Azure OpenAI to provide accurate
                and contextual responses to user queries. This system will
                integrate seamlessly with existing knowledge sources like SharePoint sites and other
                documentation repositories.
              </p>{" "}
              <br />
              <Link to="/Chat" className="logo">
                <a className="rts-btn btn-blur">Try Now</a>
              </Link>
              <div className="inner-right-iamge">
                <img
                  src={require("../assets/images/banner/01.png")}
                  alt="banner"
                />
              </div>
            </div>
          </div>
          <div className="search__generator mt--50">
            <h4 className="title color-white-title-home">👋 Welcome, User</h4>

            <div className="tab-content mt--50" id="pills-tabContent">
              {/* single tab content area start */}
              <div className="row g-5">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* single image generator area start */}
                  <div className="single-image-generator">
                    <a href="image-generator.html" className="thumbnail">
                      <img
                        src={require("../assets/images/generator/01.jpg")}
                        alt="images"
                      />
                    </a>
                    <div className="inner-content">
                      <div className="left-content-area">
                        <h5 className="title">
                          Natural Language Query Understanding
                        </h5>
                        <p className="disc">
                          Use <span className="Azure">Azure OpenAI</span> models
                          to understand and process natural language queries
                          from <br/>users.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* single image generator area end */}
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* single image generator area start */}
                  <div className="single-image-generator">
                    <a href="chatbot.html" className="thumbnail">
                      <img
                        src={require("../assets/images/generator/02.jpg")}
                        alt="images"
                      />
                    </a>
                    <div className="inner-content">
                      <div className="left-content-area">
                        <h5 className="title">Contextual Search</h5>
                        <p className="disc">
                          Our Implement a search engine powered by{" "}
                          <span className="Azure">generative AI </span>to
                          provide context-aware search results. <br/>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* single image generator area end */}
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* single image generator area start */}
                  <div className="single-image-generator">
                    <a href="voicegenerator.html" className="thumbnail">
                      <img
                        src={require("../assets/images/generator/03.jpg")}
                        alt="images"
                      />
                    </a>
                    <div className="inner-content">
                      <div className="left-content-area">
                        <h5 className="title">Interactive UI with React</h5>
                        <p className="disc">
                          Created an user-friendly{" "}
                          <span className="Azure">React front-end</span> for
                          querying AI, viewing results, and accessing documents.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* single image generator area end */}
                </div>
              </div>
              {/* single tab content area end */}
            </div>
          </div>
          <div className="copyright-area-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
