import React from 'react'
import ArrowIcon from '../common/ArrowIcon'


const Card = ({imagePath, title, description, actionArrow, height, width}) => {
    return (
        <div className='flex flex-col p-6'>
            <img
                className={`h-[${height ? height : '220px'}] max-h-[${height ? height : '220px'}] w-[${width ? width : '200px'}] max-w-[${width ? width : '220px'}]
         border rounded-lg hover:scale-105 cursor-pointer`} width={width ?? "200px"} height={height ?? "220px"}
                src={imagePath} alt='Jeans'/>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                    <p className='p-1 text-[16px]'>{title}</p>
                    {description && <p className='px-1 text-gray-600 text-[12px]'>{description}</p>}
                </div>
                {actionArrow && <span className='cursor-pointer items-center pr-2'><ArrowIcon/></span>}
            </div>
        </div>
    )
}

export default Card