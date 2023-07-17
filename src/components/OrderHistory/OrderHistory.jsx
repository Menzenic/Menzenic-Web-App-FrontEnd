import React from "react";
import OrderHistoryData from "../../data/OrderHistoryData";
import OrderHistoryCard from '../Card/OrderHistoryCard/OrderHistoryCard'
import { RatingIcon } from "../../utils/assets";
import { RatingSliderArrow } from "../../utils/assets";

const OrderHistory = () => {
    return (
        <div className="order-history-container pl-10 py-4 ml-6">
            <div className="grid grid-cols-2 gap-x-[4.62rem] gap-y-[2.69rem]">
                {OrderHistoryData.map((order, index) => (
                   <OrderHistoryCard />
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;
