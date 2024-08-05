import React from 'react';
import PrimaryButton from './common/PrimaryButton';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import leftarrow from '../../public/assets/images/svg/left-arrow.svg';
import rightarrow from '../../public/assets/images/svg/right-arrow.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Satisfy_List } from './common/Helper';

const Satisfying: React.FC = (): JSX.Element => {
    return (
        <div className='xl:py-[150px] max-md:bg-light-pink bg-white py-12 lg:py-24 md:py-20 sm:py-16'>
            <div className="mx-auto px-4 max-w-[1172px]">
                <div className="flex flex-row flex-wrap items-center justify-center w-full">
                    <div className="md:w-1/2">
                        <h2 className='font-Shrikhand font-normal max-w-[558px] text-2xxl md:text-3xl max-md:text-center lg:text-4xxl !leading-145 text-pink'>
                            The Most Satisfying Cleaning Spray
                        </h2>
                        <p className='sm:mb-6 max-md:text-center md:mb-10 text-base mt-4 text-dark-pink max-w-[558px] font-lexend font-normal leading-125 sm:leading-150'>
                            Cleaner than ever before, simpler than traditional methods, and brighter than your cleanest dreams!
                        </p>
                        <PrimaryButton className='hidden md:block hover:shadow-none shadow-grey-pink' text='Pre-Order' />
                    </div>
                    <div className="md:w-1/2 w-full sm:w-8/12">
                        <Swiper
                            className='md:max-w-[320px] max-w-[181px] lg:max-w-[461px]'
                            modules={[Pagination, Navigation]}
                            loop={true}
                            slidesPerGroup={1}
                            slidesPerView={1}
                            pagination={{
                                el: '.custom-pagination', // Link to custom pagination
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".next-btn",
                                prevEl: ".prev-btn"
                            }}
                        >
                            {Satisfy_List.map((obj, index) => (
                                <SwiperSlide key={index} className='w-[461px] mt-10 md:mt-0'>
                                    <div className="max-w-[461px]">
                                        <div className="duration-300 w-full">
                                            <Image
                                                src={obj.img}
                                                alt='img swiper video'
                                                width={461}
                                                height={461}
                                                className="object-contain hidden md:block"
                                                style={{ width: 'auto', height: 'auto' }}
                                            />
                                            <Image
                                                src={obj.img2}
                                                alt='img swiper video'
                                                width={181}
                                                height={300}
                                                className="object-contain block md:hidden"
                                                style={{ width: 'auto', height: 'auto' }}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="max-w-[461px] max-sm:max-w-[400px] mt-10 mx-auto flex justify-between gap-4 items-center">
                            <button className="prev border-0 z-2 prev-btn">
                                <Image
                                    src={leftarrow}
                                    alt='left-arrow'
                                    width={76}
                                    height={40}
                                    className='min-w-[76px] min-h-10'
                                />
                            </button>
                            <div className="custom-pagination !flex !justify-center !items-center !bottom-0 swiper-pagination !relative"></div>
                            <button className="next border-0 !w-[76px] h-10 z-2 next-btn">
                                <Image
                                    src={rightarrow}
                                    alt='right-arrow'
                                    width={76}
                                    height={40}
                                    className='min-w-[76px] min-h-10'
                                />
                            </button>
                        </div>
                        <div className='text-center'>
                            <PrimaryButton className='max-sm:px-2.5 w-full mt-10 py-4 max-w-[400px] mx-auto md:hidden hover:shadow-none shadow-grey-pink' text='Pre-Order' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Satisfying;
