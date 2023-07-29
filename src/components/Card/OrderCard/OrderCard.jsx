import { RatingIcon, RatingSliderArrow } from "../../../utils/assets";
import { TemplateProductMockUp } from "../../../utils/assets";

const OrderCard = (props) => {
    return (
        <div
            className="w-[19.5rem] h-[6.563rem] bg-white flex items-center rounded-[0.1875rem]"
            style={{
                boxShadow: "19px 14px 77px rgba(0, 0, 0, 0.11)",
            }}
        >
            <div className="flex flex-col items-center">
                <img
                    src={props.image ?? TemplateProductMockUp}
                    alt={props.name}
                    className="w-9 h-14"
                />
                <h3 className="text-[0.75rem] text-center">
                    {props.name ?? "Intimate Body Wash"}
                </h3>
            </div>
            <div className="mx-5 h-[4.625rem] border border-[#DBDBDB]"></div>
            <div className="p-2">
                <div className="flex items-center">
                    <div className="mr-4">
                        <h4 className="mb-[10px] text-[#999999] leading-[14px]">
                            Rate Product
                        </h4>
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div>
                                    <i className="fa-solid fa-star" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <RatingSliderArrow />
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
