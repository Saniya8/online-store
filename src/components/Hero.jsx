import React from 'react'
import pc from '../images/pc.png';

const Hero = () => {
    return (
        <div className='bg-herobg flex flex-col sm:flex-row justify-between items-center  gap-10 sm:gap-20 p-5 sm:p-20'>
            <div className='flex flex-col md:w-1/2 flex-wrap gap-10 text-center order-2 sm:order-1'>
                <div>
                    <h1 className='text-white font-bold text-2xl sm:text-4xl'>THE <span className='text-navOrange'>ALL-IN-ONE</span> ONLINE STORE BUILDER FOR ECOMMERCE ENTREPRENEURS</h1>
                </div>
                <div>
                    <h1 className='text-gray-400 font-bold text-sm sm:text-base'>Build an online ecommerce store and start selling your products in a matter of minutes. Create your dream store, add products, manage inventory, and grow your business - with zero technical skills.</h1>
                </div>
                <div className='flex flex-wrap gap-5 justify-center'>
                    <button className='bg-navOrange hover:bg-greeni hover:text-white rounded-full px-4 py-2 text-sm'>Buy Now $29</button>
                    <button className='bg-greeni hover:scale-105 hover:text-white rounded-full px-4 py-2 text-sm'>Try Storego For Free!</button>
                </div>
            </div>

            <div className='flex flex-col flex-wrap gap-10 justify-center items-center order-1 sm:order-2'>
                <div className=''>
                    <img src={pc} alt="pc" />
                </div>
                <div>
                    <h1 className='text-white'>Fully Verified Ratings</h1>
                    <h1 className='text-white'>Trusted by Hundreds of Happy Users.</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero