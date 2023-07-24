import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectOrders } from "../../store/orders/orders.selector";

import OrderCard from '../Card/OrderCard/OrderCard'

const Orders = () => {
    const ordersMap = useSelector(selectOrders)
    
    return (
        <div className="h-full w-max ml-[1.56rem]">
            <div className="grid grid-cols-2 gap-x-[4.62rem] gap-y-[2.69rem]">
                {ordersMap &&
                    (ordersMap.length > 0 ? (
                        Object.keys(ordersMap).map((order) => (
                            <OrderCard id={order} />
                        ))
                    ) : (
                        <div className="text-white"> No orders </div>
                    ))}
            </div>
        </div>
    );
};

export default Orders;
