import React from 'react'
import HeroImg from '../../assets/img/hero-img.png'

const HeroSection = () => {
    return (
        <div className='relative flex w-full items-center bg-cover bg-center text-left flext-start h-svh' style={{backgroundImage
                : `url(${HeroImg})`}}>
            <div className='absolute top-0 right-0 bottom-0 left-0'></div>
            <main className='z-10 px-10 lg:px-24'>
                <div className='text-left'>
                    <h2 className='text-2xl text-white'>T-shirt / Tops</h2>
                </div>
                <p className='mt-3 text-6xl text-white sm:mt-5 sm:max-w-xl'>
                    Summer
                    Value Pack
                </p>
                <p className='mt-3 text-2xl text-white sm:mt-5 sm:max-w-xl'>
                    cool / colorful / comfy
                </p>
                <button className='mt-6 h-12 w-44 rounded border border-black bg-black text-white hover:border-black hover:bg-white hover:text-black'>
                    Shop Now
                </button>
            </main>

        </div>
    )
}

export default HeroSection