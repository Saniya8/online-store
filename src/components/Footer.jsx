import React from 'react'
import logo from '../images/logo.jpeg';
import logos from '../images/logos.png';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

const Footer = () => {
    return (
        <div>

            <div className='flex flex-wrap py-12 px-5 sm:px-24 justify-center sm:justify-between items-center gap-10'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='space-x-4'>
                    <button className='bg-navOrange rounded-full px-4 py-2 text-sm text-center hover:shadow-xl hover:scale-105'>Support <HelpOutlineIcon className='pl-1' /></button>
                    <button className='bg-greeni rounded-full px-4 py-2 text-sm text-white text-center hover:shadow-xl hover:scale-105'>Contact Us <NearMeIcon className='pl-1' /></button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row py-5 xl:py-12 px-5 xl:px-24 justify-between items-center'>
                <div className='items-center w-full xl:w-52 space-y-2'>
                    <div className='text-sm'>
                        <p className='text-gray-600'>We build modern web tools to help you jump-start your daily business work.</p>
                        <p className='text-black font-semibold'>We Sell items exclusively on Envato</p>
                    </div>
                    <div>
                        <img src={logos} alt="logos" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5 py-5 w-full xl:w-1/2 justify-around'>
                    <div className='text-sm'>
                        <ul>About Us</ul>
                        <ul>Blog</ul>
                        <ul>Documents & Tutorials</ul>
                        <ul>Contact Us</ul>
                        <ul>Get Support</ul>
                    </div>

                    <div className='text-sm'>
                        <ul>Terms & Conditions</ul>
                        <ul>Refund Policy</ul>
                        <ul>Cookie Policy</ul>
                        <ul>License & Activation</ul>
                    </div>
                </div>

                <div className='w-full xl:w-2/5 space-y-2'>
                    <div>
                        <h1 className='font-bold text-2xl'>Join Our Community</h1>
                        <p className='text-sm'>Subscribe to get the latest news, updates and offers. Don’t worry, we won’t send spam!</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Type your Email address' className='border-darkgreen border-2 rounded-full px-5 py-2 text-center' />
                    </div>
                </div>

            </div>

            <hr className='border-1 border-gray-400' />

            <div className='px-5 xl:px-24'>
                <h1 className='text-sm text-center py-4'>All rights reserved © 2023 <span className='text-navOrange'>WorkDo FZCO.</span> Crafted with ❤️ to enhance the web.</h1>
            </div>

        </div>
    )
}

export default Footer