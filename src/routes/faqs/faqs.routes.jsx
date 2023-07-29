import React, { useState } from "react";
import { Footer } from "../../components";

const Faqs = () => {
    const [faq1Open, setFaq1Open] = useState(false);
    const [faq2Open, setFaq2Open] = useState(false);
    const [faq3Open, setFaq3Open] = useState(false);
    const [faq4Open, setFaq4Open] = useState(false);
    const [faq5Open, setFaq5Open] = useState(false);

    const toggleFaq = (faqNumber) => {
        switch (faqNumber) {
            case 1:
                setFaq1Open(!faq1Open);
                break;
            case 2:
                setFaq2Open(!faq2Open);
                break;
            case 3:
                setFaq3Open(!faq3Open);
                break;
            case 4:
                setFaq4Open(!faq4Open);
                break;
            case 5:
                setFaq5Open(!faq5Open);
                break;
            default:
                break;
        }
    };

    const ArrowIcon = ({ isOpen }) => (
        <svg
            className={`ml-2 h-5 w-5 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );

    return (
        <section>
            <div className="max-w-md mx-auto py-36 px-6 bg-black">
                <h2 className="text-2xl text-white font-bold mb-6">FAQs</h2>

                <div className="space-y-4">
                    <div>
                        <button
                            className="w-full flex justify-between items-center bg-gray-200 text-left py-3 px-4 rounded-lg"
                            onClick={() => toggleFaq(1)}
                        >
                            <span className="text-lg font-medium">
                                What is Menzenic brand?
                            </span>
                            <ArrowIcon isOpen={faq1Open} />
                        </button>
                        {faq1Open && (
                            <div className="bg-gray-100 p-4 mt-1 rounded-lg">
                                <p>
                                    Menzenic brand is an intimate hygiene and
                                    health care brand that offers a wide range
                                    of products designed to support women's
                                    well-being and confidence. We specialize in
                                    providing high-quality intimate hygiene care
                                    items that promote comfort and freshness.
                                    Our products are tailored to help women feel
                                    confident and maintain their intimate health
                                    with ease.
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className="w-full flex justify-between items-center bg-gray-200 text-left py-3 px-4 rounded-lg"
                            onClick={() => toggleFaq(2)}
                        >
                            <span className="text-lg font-medium">
                                How can I place an order?
                            </span>
                            <ArrowIcon isOpen={faq2Open} />
                        </button>
                        {faq2Open && (
                            <div className="bg-gray-100 p-4 mt-1 rounded-lg">
                                <p>
                                    To place an order, simply browse our
                                    products, select the product you need if you
                                    have to buy more than one product then add
                                    them in the cart then place order other wise
                                    directly click in the buy now button to
                                    complete your order.
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className="w-full flex justify-between items-center bg-gray-200 text-left py-3 px-4 rounded-lg"
                            onClick={() => toggleFaq(3)}
                        >
                            <span className="text-lg font-medium">
                                What are the shipping options?
                            </span>
                            <ArrowIcon isOpen={faq3Open} />
                        </button>
                        {faq3Open && (
                            <div className="bg-gray-100 p-4 mt-1 rounded-lg">
                                <p>
                                    We offer various shipping options based on
                                    your location. During the checkout process,
                                    you will be able to select your preferred
                                    shipping method, and the shipping cost will
                                    be calculated accordingly. We strive to
                                    provide reliable and timely delivery for all
                                    orders.
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className="w-full flex justify-between items-center bg-gray-200 text-left py-3 px-4 rounded-lg"
                            onClick={() => toggleFaq(4)}
                        >
                            <span className="text-lg font-medium">
                                Can I return or exchange an item?
                            </span>
                            <ArrowIcon isOpen={faq4Open} />
                        </button>
                        {faq4Open && (
                            <div className="bg-gray-100 p-4 mt-1 rounded-lg">
                                <p>
                                    We have a hassle-free return and exchange
                                    policy. If you are not satisfied with your
                                    purchase, you can return or exchange the
                                    item within 30 days of receiving it. Please
                                    ensure that the item is unused and in its
                                    original packaging for a smooth return or
                                    exchange process.
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className="w-full flex justify-between items-center bg-gray-200 text-left py-3 px-4 rounded-lg"
                            onClick={() => toggleFaq(5)}
                        >
                            <span className="text-lg font-medium">
                                How can I contact customer support?
                            </span>
                            <ArrowIcon isOpen={faq5Open} />
                        </button>
                        {faq5Open && (
                            <div className="bg-gray-100 p-4 mt-1 rounded-lg">
                                <p>
                                    If you have any questions or need
                                    assistance, our customer support team is
                                    available to help. You can reach out to us
                                    through our contact page or email us at
                                    support@menzenic.com. We strive to provide
                                    prompt and helpful responses to all customer
                                    inquiries.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Faqs;
