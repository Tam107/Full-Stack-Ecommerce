import React from 'react'
import ArrowIcon from "../../components/common/ArrowIcon";
import {Link} from "react-router-dom";
import SvgFavourite from "../../components/common/SvgFavourite";

const ProductCard = ({id,title,description,price,discoutnt,rating,brand,thumbnail}) => {
    console.log("title", title)
    return (
        <div className='flex flex-col hover:scale-105 relative'>
            <Link to={`/product/${id}`}>
                <img className={`h-[350px] w-[300px] border rounded-lg cursor-pointer object-cover block`} src={thumbnail} alt='Jeans'/>
            </Link>

            <div className='flex justify-between items-center'>
                <div className='flex flex-col pt-2'>
                    <p className='text-[16px] p-1'>{title}</p>
                    {description && <p className='text-[12px] px-1 text-gray-600'>{brand}</p>}
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
            <button onClick={()=> console.log("Click button")} className='absolute top-0 right-0 pt-4 pr-4 cursor-pointer'><SvgFavourite /></button>
        </div>
    )
}

export default ProductCard
