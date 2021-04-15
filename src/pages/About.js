import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from 'react-progressive-image';
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";


const About = ({ profile }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [information, setInformation] = useState("")
  const [services, setServices] = useState([])
  const [reviews, setReviews] = useState([])
  const [basics, setBasics] = useState()
  const [skills, setSkills] = useState([])

  useEffect(() => {
    if (profile && profile.basics && profile.skills) {
      setBasics(profile.basics)
      setSkills(profile.skills)
      setIsMounted(true)
    }
  }, [profile])

  console.log('Profile', skills)

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, [])

  return (
    isMounted ? (
      <Layout>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="About Me" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <img src={basics.image} alt='profile'/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    I am <span className="color-theme">{basics.name}</span>
                  </h3>
                  <p>
                    {basics.summary}
                  </p>
                  <ul>
                    {!basics.name ? null : (
                      <li>
                        <b>Full Name</b> {basics.name}
                      </li>
                    )}
                    {!basics.email ? null : (
                      <li>
                        <b>Email</b> {'brich@codeninja.life'}
                      </li>
                    )}
                  </ul>
                  <a href={'./Bryant-Richards-Resume.pdf'} className="mi-button" download>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Skills" />
            <div className="mi-service-wrapper">
              <div className="row mt-30-reverse">
                {skills.sort((a, b) => a.name.localeCompare(b.name)).map((skill) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mt-30"
                    key={skills.name}
                  >
                    <Service content={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    ) : null
  )
}

export default About
