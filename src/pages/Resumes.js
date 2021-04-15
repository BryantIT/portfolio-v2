import React, { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Progress from "../components/Progress";

const Resumes = ({ profile }) => {
  const [skills, setSkills] = useState([])

  useEffect(() =>{
    if (profile) {
      setSkills(profile.skills)
    }
  }, [profile])

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.sort((a, b) => a.name.localeCompare(b.name)).map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.name}>
                  <Progress title={skill.name} percentage={skill.rating * 21} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resumes
