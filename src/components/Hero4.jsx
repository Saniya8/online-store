import React from 'react'
import pcmob from '../images/pcmob.png';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Hero = () => {
    return (
        <div className='bg-herobg p-5 sm:p-20 space-y-8 sm:space-y-16'>

            <div className='text-center'>
                <h1 className='text-white font-semibold text-xl sm:text-4xl'><span className='text-navOrange text-xl sm:text-6xl'>Build </span> And
                    <span className='text-navOrange text-xl sm:text-6xl'> Manage </span> The Ecommerce Store Of Your Dreams</h1>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-20'>

                <div className='flex flex-col flex-wrap gap-4 justify-center items-center'>
                    <div>
                        <button className='bg-navOrange font-semibold rounded-full px-4 py-2 hover:bg-greeni hover:text-white'>Live Preview</button>
                    </div>
                    <div className=''>
                        <img src={pcmob} alt="pcmob" />
                    </div>
                </div>

                <div className='flex flex-col md:w-1/2 flex-wrap gap-7'>
                    <div>
                        <h1 className='text-white font-semibold text-xl sm:text-2xl'>
                            StoreGo is the fastest way to get your products on the market.
                        </h1>
                    </div>

                    <div>
                        <h1 className='text-white text-xs font-bold'>Want to build an ecommerce store? With StoreGo, you can do it in a few minutes! Build an ecommerce store, manage your inventory, and fulfill orders - in a few clicks.</h1>
                    </div>

                    <div className='text-sm font-semibold'>
                        <h1 className='text-white'>Fully Verified Ratings</h1>
                        <h1 className='text-white'>Trusted by Hundreds of Happy Users.</h1>
                    </div>

                    <div className='flex flex-col sm:flex-row flex-wrap gap-5'>
                        <h1 className='font-semibold text-xl sm:text-3xl text-white'>Only $29</h1>
                        <button className='bg-navOrange hover:bg-greeni hover:text-white rounded-full px-4 py-2 text-sm font-semibold'>Get Storego Now! <ShoppingBasketIcon /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero