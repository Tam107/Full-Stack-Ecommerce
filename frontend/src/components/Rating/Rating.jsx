import React, {useMemo} from 'react'
import SvgStarIcon from "../common/SvgStartIcon";
import {SvgEmptyStar} from "../common/SvgEmptyStar";

const Rating = ({rating}) => {
    const ratingNumber = useMemo(() => {
        return Array(Math.round(Number(rating))).fill()
    }, [rating])
    return (
        <div className={"flex items-center"}>
            {ratingNumber?.map((_, index) => {
                return (
                    <SvgStarIcon key={index}/>
                )
            })}
            {
                new Array(5 - ratingNumber?.length).fill().map((_,index) => {
                    return (
                        <SvgEmptyStar key={'empty-' + index}/>
                    )
                })
            }
            <p className={"text-[16px] text-gray-400 px-2 pt-1"}>{rating}</p>
        </div>
    )
}
export default Rating
