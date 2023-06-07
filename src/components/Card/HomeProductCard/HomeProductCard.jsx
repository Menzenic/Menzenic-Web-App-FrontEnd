import { GenericProductCard } from ".."

const HomeProductCard = (props) => {
    return (
        <GenericProductCard
            {...props}
            likeicon={props.likeicon}
            image={props.image}
            title={props.title}
            rate={props.rate}
        />
    )
}

export default HomeProductCard
