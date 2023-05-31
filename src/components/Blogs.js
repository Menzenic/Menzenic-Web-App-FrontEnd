import React from "react";
import "../styles/Blogs.css";
import blogImage1 from "../images/blog1.jpg";
import blogImage2 from "../images/blog2.jpg";
import blogImage3 from "../images/blog3.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      category: "TESTICULAR PAIN",
      date: "May 1, 2023",
      heading: "How To Protect Your Balls - Testicular Pain After Running",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices est ut mi condimentum, at tristique risus pharetra.",
      link: "https://medium.com/blog-post-1",
      image: blogImage1,
    },
    {
      id: 2,
      title: "Blog Post 2",
      category: "FERTILITY IN MEN",
      date: "May 1, 2023",
      heading: "How To Increase Male Fertility",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices est ut mi condimentum, at tristique risus pharetra.",
      link: "https://medium.com/blog-post-2",
      image: blogImage2,
    },
    {
      id: 3,
      title: "Blog Post 3",
      category: "HYGIENE",
      date: "May 1, 2023",
      heading: "Intimate Brightening Cream for Men: Boosting Confidence ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices est ut mi condimentum, at tristique risus pharetra.",
      link: "https://medium.com/blog-post-3",
      image: blogImage3,
    },
  ];

  return (
    <section className="blogs">
      <div className="container">
        <h2 className="section-title">Exciting and Insightful Blog Updates</h2>
        <div className="blog-grid">
          {blogPosts.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-details">
                <span className="blog-category">{blog.category}</span>
                <div className="blog-date">{blog.date}</div>
                <h3 className="blog-heading">{blog.heading}</h3>
                <p className="blog-content">{blog.content}</p>
                <div className="read-more">
                  <span>Read More</span>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="view-more">
          <button className="btn btn-view-more">View More</button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
