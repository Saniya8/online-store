import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { EffectCoverflow, Autoplay } from "swiper";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const SwiperComponent = () => {

    return (
        <div className='p-5 sm:p-20 space-y-10 sm:space-y-20 justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-xl sm:text-5xl font-bold text-darkgreen'>What People Are Saying About <span className='text-navOrange'>StoreGo</span></h1>
            </div>

            <div >
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"1"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                    loop={true} // Enable the loop
                    breakpoints={{
                        // Set slidesPerView to 1 on smaller screens
                        640: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className='bg-navOrange p-4 rounded-xl cursor-default'>
                        <div className='text-right pb-8'><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                        <div>
                            <h1 className='text-lg font-semibold'>Tbistone</h1>
                        </div>
                        <div>
                            <p>Very quick customer support, installing this application on my machine locally, within
                                5 minutes of creating a ticket, the developer was able to fix the issue I had within 10
                                minutes. EXCELLENT! Thank you very much
                            </p>
                        </div>
                        <div className='flex gap-2 pt-20'><AccountCircleIcon /><p className='flex flex-col'><p className='hover:underline cursor-pointer'>Tbistone</p> <p className='text-sm'>from codecanyon</p></p></div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-darkgreen p-4 rounded-xl cursor-default text-white'>
                        <div className='text-right pb-8'><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                        <div>
                            <h1 className='text-lg font-semibold'>Tbistone</h1>
                        </div>
                        <div>
                            <p>Very quick customer support, installing this application on my machine locally, within
                                5 minutes of creating a ticket, the developer was able to fix the issue I had within 10
                                minutes. EXCELLENT! Thank you very much
                            </p>
                        </div>
                        <div className='flex gap-2 pt-20'><AccountCircleIcon /><p className='flex flex-col'><p className='hover:underline cursor-pointer'>Tbistone</p> <p className='text-sm'>from codecanyon</p></p></div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-navOrange p-4 rounded-xl cursor-default'>
                        <div className='text-right pb-8'><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                        <div>
                            <h1 className='text-lg font-semibold'>Tbistone</h1>
                        </div>
                        <div>
                            <p>Very quick customer support, installing this application on my machine locally, within
                                5 minutes of creating a ticket, the developer was able to fix the issue I had within 10
                                minutes. EXCELLENT! Thank you very much
                            </p>
                        </div>
                        <div className='flex gap-2 pt-20'><AccountCircleIcon /><p className='flex flex-col'><p className='hover:underline cursor-pointer'>Tbistone</p> <p className='text-sm'>from codecanyon</p></p></div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-darkgreen p-4 rounded-xl cursor-default text-white'>
                        <div className='text-right pb-8'><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                        <div>
                            <h1 className='text-lg font-semibold'>Tbistone</h1>
                        </div>
                        <div>
                            <p>Very quick customer support, installing this application on my machine locally, within
                                5 minutes of creating a ticket, the developer was able to fix the issue I had within 10
                                minutes. EXCELLENT! Thank you very much
                            </p>
                        </div>
                        <div className='flex gap-2 pt-20'><AccountCircleIcon /><p className='flex flex-col'><p className='hover:underline cursor-pointer'>Tbistone</p> <p className='text-sm'>from codecanyon</p></p></div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-navOrange p-4 rounded-xl cursor-default'>
                        <div className='text-right pb-8'><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                        <div>
                            <h1 className='text-lg font-semibold'>Tbistone</h1>
                        </div>
                        <div>
                            <p>Very quick customer support, installing this application on my machine locally, within
                                5 minutes of creating a ticket, the developer was able to fix the issue I had within 10
                                minutes. EXCELLENT! Thank you very much
                            </p>
                        </div>
                        <div className='flex gap-2 pt-20'><AccountCircleIcon /><p className='flex flex-col'><p className='hover:underline cursor-pointer'>Tbistone</p> <p className='text-sm'>from codecanyon</p></p></div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-darkgreen p-4 rounded-xl cursor-default text-white'>
                        <div className='text-right pb-8'><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                        <div>
                            <h1 className='text-lg font-semibold'>Tbistone</h1>
                        </div>
                        <div>
                            <p>Very quick customer support, installing this application on my machine locally, within
                                5 minutes of creating a ticket, the developer was able to fix the issue I had within 10
                                minutes. EXCELLENT! Thank you very much
                            </p>
                        </div>
                        <div className='flex gap-2 pt-20'><AccountCircleIcon /><p className='flex flex-col'><p className='hover:underline cursor-pointer'>Tbistone</p> <p className='text-sm'>from codecanyon</p></p></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='text-center'>
                <button className='rounded-full text-base sm:text-lg px-6 sm:px-10 py-4 bg-navOrange hover:bg-greeni hover:text-white'>CHECK OUR REVIEWS</button>
            </div>
        </div>
    )
}

export default SwiperComponent