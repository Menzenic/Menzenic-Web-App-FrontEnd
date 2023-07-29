import React from "react";
import { Footer } from "../../components";
import {
    RiLockPasswordFill,
    RiInformationFill,
    RiUserVoiceFill,
} from "react-icons/ri";

const PrivacyPolicy = () => {
    return (
        <section>
            <div className="container mx-auto px-4 py-8 bg-black text-white pt-28">
                <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
                <div className="mb-4 flex items-center border rounded-xl p-4">
                    <RiLockPasswordFill className="mr-4 w-20 h-20" />
                    <p>
                        Your data security is our priority. We take measures to
                        safeguard your personal information and ensure it
                        remains protected at all times.
                    </p>
                </div>
                <div className="mb-4 flex items-center border rounded-xl p-4">
                    <RiInformationFill className="mr-4 w-20 h-20" />
                    <p>
                        We collect only necessary information to provide our
                        services and improve user experience. Your data is never
                        shared with third parties without your consent.
                    </p>
                </div>
                <div className="mb-4 flex items-center border rounded-xl p-4">
                    <RiUserVoiceFill className="mr-4 w-20 h-20" />
                    <p>
                        Your feedback matters to us. We may use anonymous data
                        to analyze user behavior and enhance our products and
                        services.
                    </p>
                </div>
                <p className="text-sm text-gray-500">
                    This Privacy Policy was last updated on 28th July 2023. We
                    may update this policy from time to time, and any changes
                    will be reflected on this page.
                </p>
            </div>
            <Footer />
        </section>
    );
};

export default PrivacyPolicy;
