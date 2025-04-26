import React from 'react'
import SectionHeading from "../SectionsHeading/SectionHeading";
import Card from "../../Card/Card";

const Category = ({title, data}) => {
    return (
        <>
            <div>
                <SectionHeading title={title}/>
                <div className={"flex flex-row flex-wrap justify-center"}>
                    {data && data?.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item?.title}
                                description={item?.description}
                                imagePath={item?.image}
                                actionArrow={true}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Category
