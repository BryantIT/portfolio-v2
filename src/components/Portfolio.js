import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";

const Portfolio =(props) => {
  const [imageThumb, setImageThumb] = useState()
  const { name, url, summary } = props.content

  useEffect(() => {
    if (props && props.content.images) {
      setImageThumb(props.content.images[0].resolutions.thumbnail.url)
    }
  }, [props])

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
          {
            imageThumb ? (
              <img src={imageThumb} alt={name} />
            ) : null
          }
        <ul>
          {url && imageThumb ? <li>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <Icon.Link />
            </a>
          </li> : null}
        </ul>
      </div>
      {!url ? <h5>{name}</h5> : <h5>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {name}
        </a>
      </h5>}
        <small>{summary}</small>
    </div>
  )
}

export default Portfolio;
