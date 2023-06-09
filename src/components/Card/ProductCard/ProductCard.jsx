import clsx from 'clsx'

const ProductCard = (props) => {
    return (
        <div className="flex flex-col bg-white shadow-xl w-[18.77rem] h-[22.0625rem] items-center relative my-10">
            {props.likeicon ? <div className={clsx('absolute top-2 right-2', 'hover:cursor-pointer')}>{props.likeicon}</div> : ''}
            {props.image ? <img className='w-[6.625rem] h-[10.25rem]' src={props.image} alt={props.title}/>: <div>IMAGE</div>}
            {props.title ? <p className='text-2xl mt-4'>{props.title}</p> : <p>HEADING</p>}
            {props.rate ? <p className='text-xl mt-2'>{props.rate}</p> : <p>200</p>}
            <button className={clsx('mt-4 border rounded-md px-6 py-2', 'hover:bg-black hover:text-white', 'transition-all duration-200')}>ADD TO CART</button>
        </div>
    )
}

export default ProductCard