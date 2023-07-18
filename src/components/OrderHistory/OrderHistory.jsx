import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectOrderhistory } from "../../store/orderhistory/orderhistory.selector";

import OrderHistoryCard from "../Card/OrderHistoryCard/OrderHistoryCard";
import { fetchOrderhistoryAsync } from "../../store/orderhistory/orderhistory.action";

const OrderHistory = () => {
    // const [orderhistoryMap, setOrderhistoryMap] = useState({})
    const orderhistoryMap = useSelector(selectOrderhistory)
    console.log('orderhistoryMap:', orderhistoryMap)
    
    return (
        <div className="h-full w-max ml-[1.56rem]">
            <div className="grid grid-cols-2 gap-x-[4.62rem] gap-y-[2.69rem]">
                {orderhistoryMap &&
                    (orderhistoryMap.length > 0 ? (
                        Object.keys(orderhistoryMap).map((order) => (
                            <OrderHistoryCard id={order} />
                        ))
                    ) : (
                        <div className="text-white"> No orders </div>
                    ))}
            </div>
        </div>
    );
};

export default OrderHistory;
