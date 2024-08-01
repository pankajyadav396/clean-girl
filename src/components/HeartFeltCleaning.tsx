import React from 'react';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { Heart_Felt_List } from './common/Helper';

const HeartFeltCleaning: React.FC = (): JSX.Element => {
    return (
        <div className='max-sm:bg-light-pink'>
            <h2 className='px-4 font-Shrikhand font-normal mb-3 sm:mb-4 text-2xxl md:text-3xl text-center lg:text-4xl xl:text-4xxl !leading-145 text-pink'>
                Heartfelt Cleaning
            </h2>
            <p className='px-4 text-base font-lexend text-pink text-center md:mb-14 sm:mb-12 leading-125 mb-10 lg:pb-1'>
                Every hopeful transformation begins with the first wipe :)
            </p>
            <div className="max-w-[1916px] mx-auto pl-5 md:pl-0">
                <Swiper
                    modules={[A11y, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={3.6}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3.8,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {Heart_Felt_List.map((obj, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={obj.img}
                                alt='img swiper video'
                                width={364}
                                height={364}
                                className="!w-full hidden md:block"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <Image
                                src={obj.img2}
                                alt='img swiper video'
                                width={364}
                                height={364}
                                className="!w-full block md:hidden"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default HeartFeltCleaning;
