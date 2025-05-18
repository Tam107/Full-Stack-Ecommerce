import React from 'react'

const SectionHeading = ({title}) => {
    return (
        <>
            <div className={"flex flex-wrap items-center p-4 my-2"}>


                <p className={"text-2xl ml-2"}>{title}</p>
            </div>
        </>
    )
}
export default SectionHeading
