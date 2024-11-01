import React from "react";
import Posts from "./Posts";
import "./Home.css";
import image from "./../asssets/1.png";
import handfood from "./../asssets/2.png";
import Data from "./Data";
import Carousel from "react-bootstrap/Carousel";
import item1 from "./../asssets/item1.jpg";
import item2 from "./../asssets/item2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const orderslist = Data.map((order) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <div>{order.img}</div>
          <h5>{order.title}</h5>
          <span>{order.time}</span>
          <h6>{order.cost}</h6>
        </div>
        <button href="#">order now</button>
      </div>
    );
  });

  return (
    <div>
      <Posts />
      {/* numbers section */}
      <section className="members">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>1287+</h3>
              <h6>Savings</h6>
            </div>
            <div className="col-md-3">
              <h3>5786+</h3>
              <h6>Photos</h6>
            </div>
            <div className="col-md-3">
              <h3>1440+</h3>
              <h6>Rockets</h6>
            </div>
            <div className="col-md-3">
              <h3>7110+</h3>
              <h6>Globes</h6>
            </div>
          </div>
        </div>
      </section>
      {/*end  numbers section */}

      {/* pride section */}
      <section className="pride " id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={image} alt="" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button href="#">learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/* end pride section */}

      {/* hand-make section */}
      <section className="hand-make  ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button href="#">learn more</button>
            </div>
            <div className="col-md-6">
              <img src={handfood} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* end hand-make section */}
      {/* stomach saction */}
      <section className="stomach ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                When a man's stomach is full it makes no
                <br />
                difference whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio 
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <a href="#">watch our story</a>
            </div>
          </div>
        </div>
      </section>
      {/* order section */}
      <section id="explor-foods" className="order">
        <div className="container">
          <div className="row">
            <h2>Explore Our Foods</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>

          <div className="row">{orderslist}</div>
        </div>
      </section>
      {/*  end order section */}

      {/* sider section */}
      <section id="review" className="slider">
        <h2>Testimonials</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={item1} alt="" />
                  <Carousel.Caption>
                    <p>
                      nulla vitae elot libero, a pharetra augue mollis interdum.
                    </p>
                    <span>front end developer </span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item2} alt="" />
                  <Carousel.Caption>
                    <p>
                      lotem ipsoum dolor sot amet,consecteture adipiscing elit.{" "}
                    </p>
                    <span>web designer </span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* end sider section */}
      {/*  Frequently  section */}
      <section id="freq" className="Frequently ">
        <h2>Frequently Asked Questions</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5> ~ Is Foodera Bread really baked fresh each day?</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5> ~ Do you bake breads containing animal fats or products?</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>~ Can I order your products online?</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5> ~ When are you opening a shop near me?</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*   end Frequently  section */}
      {/* baked section */}
      <section className="baked">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Baked fresh daily by bakers with passion.</h2>
            </div>
            <div className="col-md-4">
              <button href="#">learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/*end baked section */}
      {/* Subscribe  section */}
      <section className="Subscribe ">
        <div className="container">
          <div className="col-md-12">
            <h2>
              Hurry up! Subscribe our newsletter
              <br />
              and get 25% Off
            </h2>
            <p>Limited time offer for this month. No credit card required.</p>
            <form className="my-form">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <input
                      placeholder="Email Address here"
                      name="email"
                      type="email"
                      id="address"
                    />
                  </div>
                  <div className="col-md-4">
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*end Subscribe  section */}

      {/* footer  section */}
      <section className="footer">
        <div className="container">
          <div className="d-flex justify-content-center mb-3 " style={{ padding:"18px", marginTop:"35PX"}}>
            <a href="#home" className="text-light mx-3 " style={{ fontSize:"18px" }}>
              Register
            </a>
            <a href="#home" className="text-light mx-3" style={{ fontSize:"18px" }}>
              Forum
            </a>
            <a href="#home" className="text-light mx-3" style={{ fontSize:"18px" }}>
              Affiliate
            </a>
            <a href="#home" className="text-light mx-3" style={{ fontSize:"18px" }}>
              FAQ
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebookF} className="text-light mx-3" style={{ fontSize:"22px" }} />
            <FontAwesomeIcon icon={faTwitter} className="text-light mx-3 " style={{ fontSize:"22px" }} />
            <FontAwesomeIcon icon={faYoutube} className="text-light mx-3" style={{ fontSize:"22px" }} />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-light mx-3" style={{ fontSize:"22px" }} />
            <FontAwesomeIcon icon={faInstagram} className="text-light mx-3"  style={{ fontSize:"22px" }}/>
            
          </div>
          <div>
            <p>© 2021. Foodera. All rights reserved</p>
          </div>
        </div>
      </section>
      {/*end Subscribe  section */}
    </div>
  );
}
