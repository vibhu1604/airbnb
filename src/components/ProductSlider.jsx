import React from 'react'


function ProductSlider(props) {
    return (
        <>
            <div className='p-2 relative'>
                <span className='bg-white absolute top-[20px] left-[20px] py-1 px-2 rounded-lg'>{props.avail}</span>
                <img className='w-100' src={props.img} />
                <div className='rating'>
                    <span>Star</span>
                    <span>{props.rate}</span>
                    <span>({props.reviews})</span>
                    <span>- {props.location}</span>
                </div>
                <div>{props.title}</div>
                <div>From ${props.price} / person</div>
            </div>

        </>
    )
}

export default ProductSlider
