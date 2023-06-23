import React from "react";
import blogData from "../../data/BlogData";
import blogsbackgroundImg from "../../images/blogsbackground.png";
import clsx from "clsx";
import "./Blogs.css";
import "../../utils/styles/styles.css";

const Blogs = () => {
    return (
        <div className="blogs">
            <section
                className={clsx("blogs-container relative bg-white-100 py-6")}
            >
                <h2 className="blog-section-title heading font-normal my-8 text-white">
                    Blogs
                </h2>
                <div className="blog-container  py-4 max-w-7xl w-full mx-auto  flex justify-center gap-8">
                    {blogData.map((blog) => (
                        <div
                            className={clsx(
                                "blog-data flex flex-col items-center text-center p-4 rounded-md",
                                "w-full h-full"
                            )}
                            key={blog.id}
                        >
                            <img
                                src={blog.image}
                                alt="Blog"
                                className={clsx(
                                    "blog-image w-72 h-64 object-cover rounded-md shadow"
                                )}
                            />
                            <h2 className="blog-heading text-left label-arial font-bold text-white text-lg mt-4">
                                {blog.heading}
                            </h2>
                            <a
                                className={clsx(
                                    "read-more text-white text-base w-full mt-2 text-left underline"
                                )}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
                <img
                    src={blogsbackgroundImg}
                    alt="blogs background img"
                    className={clsx(
                        "blogs-background-image absolute right-0 top-0 h-full w-full object-cover z-[-10]"
                    )}
                />
            </section>
        </div>
    );
};

export default Blogs;
