import React, {useCallback, useState} from 'react'
import colors from "tailwindcss/colors";

export const colorSelector = {
    "Purple": "#8434E1",
    "Black": "#252525",
    "White": "#FFFFFF",
    "Gray": "#808080",
    "Blue": "#0000FF",
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Navy": "#000080",
    "Grey": "#808080",
    "Yellow": "#FFFF00",
    "Pink": "#FFC0CB",
    "Green": "#008000"

}

const ColorsFilter = ({colors}) => {
    const [appliedColors, setAppliedColors] = useState([]);
    const onClickDiv = useCallback(
        (item) => {
            if (appliedColors.indexOf(item) > -1) {
                setAppliedColors(appliedColors?.filter(color => color !== item));
            } else {
                setAppliedColors([...appliedColors, item]);
            }
        }, [appliedColors, setAppliedColors]);


    return (
        <div className={"flex flex-col mb-4"}>
            <p className={"text-[16px] text-black mt-5 mb-5"}>
                Colors
            </p>
            <div className="flex flex-wrap p-4">
                {colors?.map(item => {
                    return (
                        <div className={"flex flex-col mr-2"} key={item.id}>
                            <div
                                className={"w-8 h-8 border rounded-xl bg-orange-400 mr-4 mb-4 cursor-pointer hover:outline-2 hover:scale-105"}
                                style={{background: `${colorSelector[item]}`}}
                                onClick={() => onClickDiv(item)}
                            ></div>
                            <p className={"text-sm text-gray-400 mb-2"}
                               style={{color: `${appliedColors?.includes(item) ? 'black' : ''}`}}>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ColorsFilter
