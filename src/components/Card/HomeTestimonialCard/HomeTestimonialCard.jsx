import { TestimonialCard } from "..";

const HomeTestimonialCard = (props) => {
  return (
    <TestimonialCard
      {...props}
      rating={props.rating}
      description={props.description}
      name={props.name}
      productImage={props.productImage}
      productName={props.productName}
    />
  );
};

export default HomeTestimonialCard;
