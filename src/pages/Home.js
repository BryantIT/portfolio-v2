import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";

const Home = ({ lightMode, profile }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [name, setName] = useState()
  const [headline, setHeadline] = useState()

  useEffect(() => {
    if (profile) {
      setName(profile.basics.name)
      setHeadline(profile.basics.headline)
      setIsMounted(true)
    }
  }, [profile])

  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };

  const paramConfigLight = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: false
        }
      },
      color: {
        value: "#000000"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  }

  return (
    isMounted ? (
      <Layout>
        <div className="mi-home-area mi-padding-section">
          <Particles className="mi-home-particle" params={lightMode? paramConfigLight : paramConfig} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Hi, I'm <span className="color-theme">{name}</span>
                  </h1>
                  <p>{headline}</p>
                  <Socialicons bordered />
                  <div className="sign">
                    <p>aka</p>
                    <span className="fast-flicker">c</span>ode<span className="flicker">{' nin'}</span>ja
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    ) : null
  )
}

export default Home;
