import React from 'react'
import content from '../../data/content.json'
import FbIcon from "../common/FbIcon";
import InstaIcon from "../common/InstaIcon";


const Footer = ({content}) => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {content?.items && content?.items.map((item, index) => (
                    <div key={index}>
                        <p className="font-semibold text-lg mb-4">{item?.title}</p>
                        <div className="flex flex-col gap-2">
                            {item?.list && item?.list.map((listItem, idx) => (
                                <a
                                    key={idx}
                                    href={listItem?.path}
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    {listItem?.label}
                                </a>
                            ))}
                            {item?.description && (
                                <p className="text-sm text-gray-400 mt-4">
                                    {item?.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-6 mt-8">
                <a href="/" aria-label="Facebook" className="hover:scale-110 transition-transform">
                    <FbIcon/>
                </a>
                <a href="/" aria-label="Instagram" className="hover:scale-110 transition-transform">
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
