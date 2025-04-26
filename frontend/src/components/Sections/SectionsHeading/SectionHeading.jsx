import React from 'react'

const SectionHeading = ({title}) => {
    return (
        <>
            <div className={"flex flex-wrap items-center justify-center gap-4 py-5 px-16"}>
                <div></div>
                <p className={"text-3xl"}>{title}</p>
            </div>
        </>
    )
}
export default SectionHeading
