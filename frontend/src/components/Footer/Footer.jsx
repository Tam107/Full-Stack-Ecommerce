import React from 'react'
import content from '../../data/content.json'
import FbIcon from "../common/FbIcon";
import InstaIcon from "../common/InstaIcon";


const Footer = ({content}) => {
    return (
        <footer className="bg-black py-12 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
                {content?.items && content?.items.map((item, index) => (
                    <div key={index}>
                        <p className="mb-4 text-lg font-semibold">{item?.title}</p>
                        <div className="flex flex-col gap-2">
                            {item?.list && item?.list.map((listItem, idx) => (
                                <a
                                    key={idx}
                                    href={listItem?.path}
                                    className="text-sm text-gray-400 transition-colors hover:text-white"
                                >
                                    {listItem?.label}
                                </a>
                            ))}
                            {item?.description && (
                                <p className="mt-4 text-sm text-gray-400">
                                    {item?.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center justify-center gap-6">
                <a href="/" aria-label="Facebook" className="transition-transform hover:scale-110">
                    <FbIcon/>
                </a>
                <a href="/" aria-label="Instagram" className="transition-transform hover:scale-110">
                    <InstaIcon/>
                </a>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 border-t border-gray-700 pt-6">
                <p className="text-center text-xs text-gray-400">{content?.copyright}</p>
            </div>
        </footer>
    )
}
export default Footer
