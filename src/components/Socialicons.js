import React, {useState, useEffect} from "react";
import LineIcon from 'react-lineicons';

const Socialicons = (props) => {
  const [socialLinks, setSocialLinks] = useState({})

  useEffect(() => {
    setSocialLinks({
      linkedin: 'https://www.linkedin.com/in/bryant-richards/',
      github: 'https://github.com/BryantIT',
      twitter: 'https://twitter.com/mycodeninja'
    })
  }, [])

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.twitter ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          <LineIcon name="twitter"/>
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <LineIcon name="linkedin"/>
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <LineIcon name="github"/>
        </a>
      </li>}
    </ul>
  )
}

export default Socialicons
