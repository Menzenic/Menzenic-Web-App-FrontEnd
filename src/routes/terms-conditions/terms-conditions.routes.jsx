import React from "react";
import { Footer } from "../../components";
import {
    FaLock,
    FaBalanceScale,
    FaTimesCircle,
    FaExclamationTriangle,
} from "react-icons/fa";

const TermsConditions = () => {
    return (
        <section>
            <div className=" py-8 px-4 pt-28 bg-black">
                <h1 className="text-3xl text-white font-bold mb-6 text-center">
                    Terms & Conditions
                </h1>
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                        <FaLock className="inline mr-2" />
                        Introduction
                    </h2>
                    <p className="text-gray-600 mb-4">
                        By using this website, you accept these terms and
                        conditions in full. If you disagree, you must not use
                        this website.
                    </p>

                    <h2 className="text-xl font-semibold mb-4">
                        <FaBalanceScale className="inline mr-2" />
                        Intellectual Property Rights
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We or our licensors own the intellectual property rights
                        in the website and material on the website. All rights
                        reserved.
                    </p>

                    <h2 className="text-xl font-semibold mb-4">
                        <FaTimesCircle className="inline mr-2" />
                        Restrictions
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You are restricted from publishing, selling, and using
                        this website in a damaging or unlawful way.
                    </p>

                    <h2 className="text-xl font-semibold mb-4">
                        <FaExclamationTriangle className="inline mr-2" />
                        Disclaimer
                    </h2>
                    <p className="text-gray-600">
                        The information on this website is for general purposes
                        only. We make no representations or warranties about its
                        accuracy or availability.
                    </p>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default TermsConditions;
