import React from "react";
import blogData from "../../data/BlogData";
import blogsbackgroundImg from "../../images/Pngs/blogsbackground.png";
import clsx from "clsx";
import "./Blogs.css";
import "../../utils/styles/styles.css";
import { useLocation } from "react-router";

const Blogs = () => {
    const location = useLocation();

    return (
        <div className="blogs">
            <section
                className={clsx(
                    "blogs-container relative flex flex-col items-center py-6",
                    location.pathname === "/blogs" ? "pt-32" : "h-full"
                )}
            >
                <h2
                    className={clsx(
                        "blog-section-title font-semibold text-4xl sm:text-[44px] text-white text-left w-full px-16 mt-2",
                        location.pathname === "/blogs"
                            ? "text-left"
                            : "text-center"
                    )}
                >
                    Blogs
                </h2>
                <div className="blog-container py-2 mt-14 w-full mx-auto grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-20">
                    {blogData.map((blog) => (
                        <div
                            className={clsx(
                                "blog-data flex flex-col text-center rounded-md w-full mx-0 sm:mx-4"
                            )}
                            key={blog.id}
                        >
                            <a
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={blog.image}
                                    alt="Blog"
                                    className={clsx(
                                        "blog-image h-52 w-full md:h-64 object-cover rounded-md shadow transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                    )}
                                />
                            </a>

                            <h2 className="blog-heading text-left w-3/4 sm:w-full label-arial font-bold text-white text-base sm:text-lg mt-4">
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
