import React from 'react';
import {
  DiRuby,
  DiJavascript,
  DiReact,
  DiNodejs } from 'react-icons/di';
import {
  SiRedux,
  SiFirebase,
  SiNextDotJs,
  SiGraphql,
  SiMaterialUi,
  SiHtml5,
  SiCss3} from 'react-icons/si';

const Service = (props) => {

  const iconSelector = (name) => {
    if (name === 'Ruby On Rails') {
      return <DiRuby />
    }
    if (name === 'JavaScript') {
      return <DiJavascript />
    }
    if (name === 'React') {
      return <DiReact />
    }
    if (name === 'Redux') {
      return <SiRedux />
    }
    if (name === 'Node.js') {
      return <DiNodejs />
    }
    if (name === 'Firebase') {
      return <SiFirebase />
    }
    if (name === 'Next.js') {
      return <SiNextDotJs />
    }
    if (name === 'GraphQL') {
      return <SiGraphql />
    }
    if (name === 'MaterialUI') {
      return <SiMaterialUi />
    }
    if (name === 'HTML') {
      return <SiHtml5 />
    }
    if (name === 'CSS') {
      return <SiCss3 />
    }
  }

  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        {iconSelector(props.content.name)}
      </span>
      <h5>{props.content.name}</h5>
    </div>
  )
}

export default Service
