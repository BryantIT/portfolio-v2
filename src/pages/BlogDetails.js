import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

function BlogDetails(props) {
  const [content, setContent] = useState("")

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          Hello Blog Details
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
