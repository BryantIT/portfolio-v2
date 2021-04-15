import React, { useState, useEffect } from 'react';
import Pages from './Pages';

function App() {
  const [profile, setProfile] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const API_KEY = process.env.REACT_APP_BLOG_API_KEY;
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/bryantit')
      .then(res => res.json())
      .then(profile => {
        setProfile(profile);
      });
  }, []);

  useEffect(() => {
    fetch(`https://www.googleapis.com/blogger/v3/blogs/7286084568129189637/posts?key=${API_KEY}`)
      .then(res => res.json())
      .then(blogData => {
        setBlogData(blogData);
      });
  }, [API_KEY]);

  if (!profile) {
    return <div />;
  }

  return <Pages profile={profile} blog={blogData} />;
}

export default App;
