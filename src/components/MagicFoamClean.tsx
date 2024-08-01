import React from 'react';
import Image from 'next/image';
import layertop from '../../public/assets/images/webp/girl-magic-top-layer.png';
import girlimg from '../../public/assets/images/webp/magic-clean-girl.png';
import pinklayer from '../../public/assets/images/webp/pink-ellipse.png';
import { BlueStars, PinkStarsIcon, TiktokIcon } from './common/Icons';
import PrimaryButton from './common/PrimaryButton';

const MagicFoamClean: React.FC = (): JSX.Element => {
    return (
        <>

            <div className='bg-light-pink mt-[112px] md:mt-24 lg:mt-[130px] xl:mt-[187px]'>
                <Image
                    className="w-full xl:h-[187px] lg:h-[140px] lg:-translate-y-[97px] -translate-y-[70px]  xl:-translate-y-[147px] h-24"
                    src={layertop}
                    alt='top layer'
                    width={1440}
                    height={187}
                />
                <div className="mx-auto max-w-[1180px] lg:-translate-y-[97px] md:-translate-y-[70px] -translate-y-11 xl:-translate-y-[147px] px-[15px]">
                    <Image
                        src={girlimg}
                        alt='clean girl img'
                        width={477}
                        height={581}
                        className='block 915:hidden sm:max-w-[300px] md:max-w-[340px] max-w-[236px] min-h-[300px] mx-auto'
                    />
                    <div className="relative z-[10] max-w-[194px] sm:max-w-[240px] 915:mx-auto">
                        <div className='absolute w-[190px] sm:w-[210px] md:w-[230px] bg-sky-blue -left-[1px] top-[-1px] 915:top-1 z-[-1] rounded-5xl h-[26px] sm:h-8 '></div>
                        <div className='absolute w-[190px] sm:w-[210px] md:w-[230px] bg-navy-red 915:hidden -bottom-[1px] -right-[1px] z-[-1] rounded-5xl h-[26px] sm:h-8 '></div>
                        <div className="bg-black relative z-[10] flex px-3 items-center max-w-[240px] mx-auto rounded-full py-1.5 sm:py-2.5 gap-2">
                            <TiktokIcon />
                            <p className='text-white font-semibold text-nowrap text-xxs sm:text-sm font-lexend leading-145'>
                                Viral TikTok Cleaning Spray
                            </p>
                        </div>
                    </div>
                    <h2 className='font-Shrikhand font-normal mt-4 sm:mt-5 text-2lg md:text-3xl 915:text-center lg:text-4xl xl:text-4xxl !leading-145 text-pink'>
                        Clean Girl Magic Cleaning Foam
                    </h2>
                    <div className="flex items-center 915:justify-center md:mb-6 mb-3 sm:mb-4 gap-1.5 sm:mt-2 md:mt-4">
                        <PinkStarsIcon />
                        <p className='font-normal text-base leading-125 text-dark-pink'>
                            Satisfying Pink
                        </p>
                    </div>
                    <div className='flex items-center 915:justify-center gap-6'>
                        <div className="flex gap-4 items-center">
                            <p className='text-pink text-xl sm:text-2xl font-medium font-lexend leading-125'>
                                $29.90
                            </p>
                            <p className='text-grey line-through text-sm sm:text-base md:text-2xl font-medium font-lexend leading-125'>
                                $49.90
                            </p>
                        </div>
                        <button className='bg-pink hover:shadow-grey-pink duration-300 text-white rounded-full !leading-125 sm:px-3 px-2 py-[3px] sm:py-1.5 md:px-5 md:py-2.5 font-lexend text-xs sm:text-base font-normal sm:font-bold'>
                            Early Bird Discount
                        </button>
                    </div>
                    <div className="flex flex-col 915:flex-row items-center justify-center 915:gap-8 lg:gap-20 mt-9 915:mt-10 md:mt-14 sm:mt-12 md:pt-1 xl:mb-[-100px]">
                        <div className='915:w-1/2 hidden 915:flex items-center justify-center lg:w-5/12'>
                            <Image
                                src={girlimg}
                                alt='clean girl img'
                                width={477}
                                height={581}
                            />
                        </div>
                        <div className='915:w-1/2 md:w-8/12 sm:w-10/12 w-full lg:w-[49%] flex flex-col items-center justify-center'>
                            <div className='max-sm:max-w-[425px] w-full bg-navy-pink rounded-2xl p-6 pb-[30px] flex flex-col'>
                                <p className='text-navy-blue font-semibold text-xl font-lexend !leading-125'>
                                    Next batch ships Mar 14
                                </p>
                                <div className="sm:flex hidden gap-[5px] mt-5">
                                    <span className='max-sm:size-3'>
                                        <BlueStars />
                                    </span>
                                    <p className='text-navy-blue text-base font-normal font-lexend !leading-125'>
                                        Pre-order your Clean Girl Magic Foam before it sells out again!
                                    </p>
                                </div>
                                <div className="sm:flex hidden gap-[5px] mt-4">
                                    <span className='max-sm:size-3'>
                                        <BlueStars />
                                    </span>
                                    <p className='text-navy-blue text-base font-normal font-lexend !leading-125'>
                                        $5 off all Pre-Orders
                                    </p>
                                </div>
                                <div className='bg-white rounded-full mt-6 flex justify-between w-full py-2.5 sm:py-4 md:py-[18px] text-grey-dark px-5 md:px-6 text-sm sm:text-base leading-125 font-normal font-lexend'>
                                    <p>
                                        February 29
                                    </p>
                                    <p>
                                        Sold Out
                                    </p>
                                </div>
                                <div className='bg-transparent overflow-hidden outline outline-2 outline-navy-blue  relative z-[1] rounded-full mt-2.5 sm:mt-4 flex justify-between w-full py-2.5 sm:py-4 md:py-[18px] text-white px-5 md:px-6 text-sm sm:text-base leading-125 font-normal font-lexend'>
                                    <Image
                                        src={pinklayer}
                                        alt='clean girl img'
                                        width={450}
                                        height={60}
                                        className='absolute  w-[90%] h-full rounded-l-full top-0 -z-[1] left-0'
                                    />
                                    <p>
                                        March 14
                                    </p>
                                    <p>
                                        Only 13% Left!
                                    </p>
                                </div>
                                <div className='bg-white rounded-full mt-2.5 sm:mt-4 flex justify-between w-full py-2.5 sm:py-4 md:py-[18px] text-grey-dark px-5 md:px-6 text-sm sm:text-base leading-125 font-normal font-lexend'>
                                    <p>
                                        March 31
                                    </p>
                                    <p>
                                        In Production
                                    </p>
                                </div>
                            </div>
                            <div className='mx-auto flex flex-col justify-center md:gap-8 gap-3.5 sm:gap-5 w-full max-w-[510px] mt-9 sm:mt-10'>
                                <PrimaryButton
                                    className="shadow-grey-pink mb-0.5 max-sm:max-w-[425px] mx-auto w-full hover:shadow-none hover:opacity-80"
                                    text="Pre-Order Magic Cleaning Foam"
                                />
                                <div className="flex items-center justify-center gap-[5px]">
                                    <span>
                                        <BlueStars />
                                    </span>
                                    <p className='text-navy-blue text-xs sm:text-sm text-center md:text-base font-medium font-lexend !leading-125'>
                                        Thank you so much for your support!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={layertop}
                    alt='layer-bottom-ellipse'
                    width={1440}
                    height={187}
                    className='-rotate-180 w-full hidden md:block absolute xl:h-[187px] lg:h-[140px] md:h-24 left-0 md:-translate-y-6 lg:-translate-y-10'
                />
            </div>
        </>
    );
}

export default MagicFoamClean;