import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Hero2 = () => {
    return (
        <div className='bg-herobg2 flex flex-col gap-10 justify-center items-center p-5 sm:p-32'>

            <div className='text-center md:w-5/6'>
                <h1 className='font-bold text-xl sm:text-5xl'><span className="text-navOrange">Build</span> An Ecommerce Store In Minutes...
                    Start <span className="text-navOrange">Selling</span> In A Few Clicks.
                </h1>
            </div>

            <div className='sm:space-x-5 gap-3 flex flex-col md:flex-row items-center '>
                <button className='bg-navOrange hover:bg-greeni hover:text-white rounded-full px-7 py-4 font-semibold text-sm text-center'>Buy Extended License <ShoppingBasketIcon className='text-white pl-1' /></button>
                <button className='bg-greeni hover:shadow-xl rounded-full px-7 py-4 font-semibold text-white text-sm text-center hover:scale-105'>Buy Regular License <ShoppingBasketIcon className='text-white pl-1' /></button>
            </div>

            {/* <div> */}
                {/* <div className='border-red-700 border-2 w-3/5'>
                    <h1 className='font-semibold'>Regular vs Extended License:</h1>
                    <h1 className='text-gray-700'>Choose the Regular License if your end product is distributed free of charge, and choose
                        the Extended License if your end product is sold or otherwise limited to paying customers.
                    </h1>
                </div> */}

                <div className='md:w-3/5'>
                    <h1 className='font-semibold'>Regular vs Extended License:</h1>
                    <h1 className='text-gray-700'>Choose the Regular License if your end product is distributed free of charge, and choose
                        the Extended License if your end product is sold or otherwise limited to paying customers.
                    </h1>
                </div>
            {/* </div> */}

        </div>
    )
}

export default Hero2