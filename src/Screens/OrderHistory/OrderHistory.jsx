import React from "react";
import OrderHistoryData from "../../data/OrderHistoryData";
import { RatingIcon } from "../../utils/assets";
import { RatingSliderArrow } from "../../utils/assets";

const OrderHistory = () => {
    return (
        <div className="order-history-container pl-10 py-4 ml-6">
            {/* <h2 className="text-3xl text-white font-bold mb-4 label-arial">
                Your Order History
            </h2> */}
            <div className="flex flex-wrap">
                {OrderHistoryData.map((order, index) => (
                    <div
                        key={index}
                        className="order-history-item flex items-center py-4 cursor-pointer w-1/2"
                    >
                        <div className="order-history-details pl-6 pr-1 py-4 ordered-product flex items-center">
                            <div className="order-history-image-container">
                                <img
                                    src={order.image}
                                    alt={order.name}
                                    className="w-9 h-14"
                                />
                                <h3 className="order-name text-sm font-normal label-arial">
                                    {order.name}
                                </h3>
                            </div>
                            <div className="order-history-line rating-line"></div>
                            <div className="order-history-content p-2">
                                <div className="flex items-center">
                                    <div className="order-history-rating mr-4">
                                        <h4 className="rate-product">
                                            Rate Product
                                        </h4>
                                        <div className="flex items-center">
                                            {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <RatingIcon
                                                        key={index}
                                                        className="h-4 w-4 text-gray-500"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <RatingSliderArrow className="order-history-arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;
