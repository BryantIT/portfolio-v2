import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMore } from 'react-icons/cg';

const Blog = (props) => {
  const [isMounted, setIsMounted] = useState(false)
  const [date, setDate] = useState()
  const { title, published, url, content } = props.data

  useEffect(() => {
    if (props) {
      const splitDate = published.split('-')
      const getDay = splitDate[2].split('T')
      const dateObj = {
        month: splitDate[1],
        day: getDay[0],
        year: splitDate[0]
      }
      setDate(dateObj)
      setIsMounted(true)
    }
  }, [props, published])

  return (
    isMounted ? (
      <div className="mi-blog">
        <div className="mi-blog-image">
          <Link to={url}>{title}</Link>
          <br />
          <span className="date">{`${date.month}/${date.day}/${date.year}`}</span>
        </div>
        <div className="mi-blog-content">
          <h5>
            {content.replace(/<\/?[^>]+>/gi, '').replace(/&nbsp;/gi, '').substr(0,75)}
            <p><a href={url} target="_blank" rel="noopener noreferrer"><CgMore /></a></p>
          </h5>
        </div>
      </div>
    ) : null
  )
}

export default Blog
