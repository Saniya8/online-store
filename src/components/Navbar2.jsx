import React, { useState } from 'react'
import logo from '../images/logo.jpeg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from "@material-ui/icons/Close";

const Navbar2 = () => {

    const [sidebar, setSidebar] = useState(false)
    const openSidebar = () => {
        if (!sidebar) { setSidebar(true) }
        else { setSidebar(false) }
    }

    return (
        <div>
            <div className='bg-herobg w-full h-full flex flex-wrap justify-center items-center py-3 px-3'>
                <h1 className='text-white font-semibold text-center text-xs sm:text-base'><span className='font-bold'>Special Offer: 70% Off.</span> Don't Miss it. Additional 20% off for New Users with Coupon Code
                    <span className='text-navOrange font-bold'> NEW20</span> in
                    <a className='font-bold cursor-pointer' href="https://workdo.io/product-category/shopify/?utm_source=site_topbar&utm_medium=site_topbar&utm_campaign=shopify"> Shopify</a>,
                    <a className='font-bold cursor-pointer' href="https://workdo.io/product-category/opencart/?utm_source=site_topbar&utm_medium=site_topbar&utm_campaign=opencart"> Opencart</a> &
                    <a className='font-bold cursor-pointer' href="https://workdo.io/product-category/wordpress/?utm_source=site_topbar&utm_medium=site_topbar&utm_campaign=wordpress"> Wordpress</a>
                </h1>
            </div>

            <div className='flex flex-wrap w-full h-full justify-around py-3 px-2 items-center'>

                {/* sidebar starts */}
                <div
                    className=" flex flex-col justify-between w-3/6 sm:w-56"
                    style={{
                        minHeight: "100vh",
                        background: "rgb(57 61 70 / 94%)",
                        padding: 10,
                        boxShadow: "6px 0px 2px rgba(0, 0, 0, 0.15)",
                        zIndex: 2,
                        position: "fixed",
                        top: 0,
                        left: !sidebar ? "-100%" : 0,
                        bottom: 0,
                        transition: "300ms ease-in",
                    }}
                >
                    <span
                        onClick={() => setSidebar(false)}
                        style={{
                            position: "absolute",
                            right: 10,
                            top: 10,
                            zIndex: 2,
                            cursor: "pointer",
                        }}
                    >
                        <CloseIcon style={{ color: "white" }} />
                    </span>
                    <div>
                        <div className="flex flex-col gap-7 px-4 justify-center items-center pt-11 text-white">

                            <div className='themes'>
                                <ul className='cursor-pointer'>Themes<ArrowDropDownIcon /></ul>
                                <div className='themes-content rounded-lg w-52 p-1 text-left text-xs bg-white'>
                                    <a href="#" className='p-1'>All-In-One Packages</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>WordPress Themes</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Shopify Themes</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Opencart Themes</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Dash Bizezz Addon</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Apps</a>
                                </div>
                            </div>

                            <div className='products'>
                                <ul className='cursor-pointer'>Products<ArrowDropDownIcon /></ul>
                                <div className='products-content rounded-lg w-52 p-1 text-left text-xs bg-white'>

                                    <h1 className='text-navOrange'>ERP Family</h1>
                                    <a href="#" className='p-1'>ERPGo</a>
                                    <a href="#" className='p-1'>HRMGo</a>
                                    <a href="#" className='p-1'>AccountGo</a>
                                    <a href="#" className='p-1'>POSGo</a><hr className='border-gray-300' />

                                    <h1 className='text-navOrange'>CRM Family</h1>
                                    <a href="#" className='p-1'>CRMGo</a>
                                    <a href="#" className='p-1'>WorkGo</a>
                                    <a href="#" className='p-1'>Salesy</a>
                                    <a href="#" className='p-1'>TicketGo</a>
                                    <a href="#" className='p-1'>LeadGo</a><hr className='border-gray-300' />

                                    <h1 className='text-navOrange'>E-commerce Family</h1>
                                    <a href="#" className='p-1'>StoreGo</a>
                                    <a href="#" className='p-1'>VcardGo</a>
                                    <a href="#" className='p-1'>LMSGo</a>
                                    <a href="#" className='p-1'>WhatsStore</a><hr className='border-gray-300' />

                                    <h1 className='text-navOrange'>PM Family</h1>
                                    <a href="#" className='p-1'>Taskly</a>
                                    <a href="#" className='p-1'>TaskGo</a>
                                    <a href="#" className='p-1'>ClockGo</a>
                                    <a href="#" className='p-1'>RotaGo</a><hr className='border-gray-300' />

                                    <h1 className='text-navOrange'>Other Family</h1>
                                    <a href="#" className='p-1'>CMMSGo</a>
                                    <a href="#" className='p-1'>Firebase</a>
                                    <a href="#" className='p-1'>Google Analytics</a>

                                </div>
                            </div>

                            <div className='development'>
                                <ul className='cursor-pointer '>Development<ArrowDropDownIcon /></ul>
                                <div className='development-content rounded-lg w-52 p-1 text-left text-xs bg-white'>
                                    <a href="#" className='p-1'>Mobile Apps Solutions</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Ecommerce Solutions</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Bizezz Solutions</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Apps</a>
                                </div>
                            </div>

                            <div className='support'>
                                <ul className='cursor-pointer '>Support<ArrowDropDownIcon /></ul>
                                <div className='support-content rounded-lg w-52 p-1 text-left text-xs bg-white'>
                                    <a href="#" className='p-1'>Contact Us</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Request Support</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Search Your Ticket</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Suggestion</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Blog</a><hr className='border-gray-300' />
                                    <a href="#" className='p-1'>Documents & Tutorials</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* sidebar ends */}

                <div className='flex flex-wrap items-center'>
                    <div className='w-36'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='hidden md:flex flex-wrap px-10 gap-7 text-sm font-semibold'>
                        <div className='themes'>
                            <ul className='cursor-pointer text-black'>Themes<ArrowDropDownIcon className='text-navOrange'/></ul>
                            <div className='themes-content rounded-lg w-52 px-3 py-5 text-left text-xs'>
                                <a href="#" className='p-1'>All-In-One Packages</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>WordPress Themes</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Shopify Themes</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Opencart Themes</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Dash Bizezz Addon</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Apps</a>
                            </div>
                        </div>
                        <div className='products'>
                            <ul className='cursor-pointer text-black'>Products<ArrowDropDownIcon className='text-navOrange'/></ul>
                            <div className='products-content rounded-lg w-52 px-3 py-5 text-left text-xs'>

                                <h1 className='text-navOrange'>ERP Family</h1>
                                <a href="#" className='p-1'>ERPGo</a>
                                <a href="#" className='p-1'>HRMGo</a>
                                <a href="#" className='p-1'>AccountGo</a>
                                <a href="#" className='p-1'>POSGo</a><hr className='border-gray-300' />

                                <h1 className='text-navOrange'>CRM Family</h1>
                                <a href="#" className='p-1'>CRMGo</a>
                                <a href="#" className='p-1'>WorkGo</a>
                                <a href="#" className='p-1'>Salesy</a>
                                <a href="#" className='p-1'>TicketGo</a>
                                <a href="#" className='p-1'>LeadGo</a><hr className='border-gray-300' />

                                <h1 className='text-navOrange'>E-commerce Family</h1>
                                <a href="#" className='p-1'>StoreGo</a>
                                <a href="#" className='p-1'>VcardGo</a>
                                <a href="#" className='p-1'>LMSGo</a>
                                <a href="#" className='p-1'>WhatsStore</a><hr className='border-gray-300' />

                                <h1 className='text-navOrange'>PM Family</h1>
                                <a href="#" className='p-1'>Taskly</a>
                                <a href="#" className='p-1'>TaskGo</a>
                                <a href="#" className='p-1'>ClockGo</a>
                                <a href="#" className='p-1'>RotaGo</a><hr className='border-gray-300' />

                                <h1 className='text-navOrange'>Other Family</h1>
                                <a href="#" className='p-1'>CMMSGo</a>
                                <a href="#" className='p-1'>Firebase</a>
                                <a href="#" className='p-1'>Google Analytics</a>

                            </div>
                        </div>
                        <div className='development'>
                            <ul className='cursor-pointer text-black'>Development<ArrowDropDownIcon className='text-navOrange'/></ul>
                            <div className='development-content rounded-lg w-52 px-3 py-5 text-left text-xs'>
                                <a href="#" className='p-1'>Mobile Apps Solutions</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Ecommerce Solutions</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Bizezz Solutions</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Apps</a>
                            </div>
                        </div>
                        <div className='support'>
                            <ul className='cursor-pointer text-black'>Support<ArrowDropDownIcon className='text-navOrange'/></ul>
                            <div className='support-content rounded-lg w-52 px-3 py-5 text-left text-xs'>
                                <a href="#" className='p-1'>Contact Us</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Request Support</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Search Your Ticket</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Suggestion</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Blog</a><hr className='border-gray-300' />
                                <a href="#" className='p-1'>Documents & Tutorials</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap items-center gap-2'>
                    <div><ShoppingCartIcon /></div>
                    <div>
                        <button className='px-3 sm:px-6 py-2 bg-navOrange rounded-full text-black text-sm font-semibold hover:shadow-xl'>Login <PersonIcon /></button>
                    </div>
                </div>

                <div className='block md:hidden' onClick={openSidebar}>
                    <MenuIcon className='text-black cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Navbar2