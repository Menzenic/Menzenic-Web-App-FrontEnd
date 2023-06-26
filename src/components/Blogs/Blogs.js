import React from "react";
import blogData from "../../data/BlogData";
import blogsbackgroundImg from "../../images/Pngs/blogsbackground.png";
import clsx from "clsx";
import "./Blogs.css";

const Blogs = () => {
    return (
        <section
            className={clsx("blogs relative bg-white-100 py-5 min-h-[528px]")}
        >
            <h2 className="blog-section-title text-5xl font-normal my-8 text-white">
                Blogs
            </h2>
            <div className="blog-container max-w-7xl w-full mx-auto p-2 flex justify-center gap-8">
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
                                "blog-image w-full h-44 object-cover rounded-md shadow"
                            )}
                        />
                        <h2 className="blog-heading text-left font-bold text-white text-lg mt-4">
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
    );
};

export default Blogs;
