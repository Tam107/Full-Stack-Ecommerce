import React, {useCallback, useState} from 'react'
import RangeSlider from "react-range-slider-input";
import {colorSelector} from "./ColorsFilter";

const SizeFilter = ({sizes, hidleTitle}) => {
    const [appliedSize, setAppliedSize] = useState([]);
    const onClickDiv = useCallback((item) => {
        if (appliedSize.indexOf(item) > -1) {
            setAppliedSize(appliedSize?.filter(size => size !== item));
        } else {
            setAppliedSize([...appliedSize, item]);
        }
    }, [appliedSize, setAppliedSize]);
    return (
        <div className={`flex flex-col mt-2 ${hidleTitle ? '' : 'mb-4'}`}>
            {!hidleTitle && <p className={"text-[16px] text-black mt-5 mb-5"}>
                Size
            </p>}
            <div className='flex flex-wrap px-2'>
                {sizes?.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col mr-2'>
                            <div className='w-[50px] border text-center mb-4 rounded-lg mr-4 cursor-pointer
                   hover:scale-110 bg-white border-gray-500 text-gray-500' style={appliedSize?.includes(item) ? {
                                background: 'black',
                                color: 'white'
                            } : {}} onClick={() => onClickDiv(item)}>{item}</div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SizeFilter
