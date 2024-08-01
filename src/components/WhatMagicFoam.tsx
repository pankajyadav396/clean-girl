import React from 'react';
import Image from 'next/image';
import { What_Can_Magic_List } from './common/Helper';
import PrimaryButton from './common/PrimaryButton';
import logo from '../../public/assets/images/svg/logo.svg';

const WhatMagicFoam: React.FC = (): JSX.Element => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='max-sm:bg-light-pink pt-12'>
            <div className="mx-auto max-w-[1432px] max-xl:px-3">
                <h2 className='font-Shrikhand font-normal text-2xxl md:mb-14 sm:mb-10 mb-6 lg:pb-1 md:text-3xl text-center lg:text-4xxl !leading-145 text-pink'>
                    What can Magic Foam Clean?
                </h2>
                <div className='flex items-center justify-center max-415:flex-col flex-wrap gap-6'>
                    {What_Can_Magic_List.map((obj, index) => (
                        <div key={index} className='flex max-w-[267px] h-full max-sm:items-center flex-col gap-2.5 sm:gap-4 md:gap-5 xl:gap-6'>
                            <Image
                                src={obj.img}
                                alt={obj.alt}
                                width={267}
                                height={405}
                                className="415:max-w-[158px] w-[220px] max-sm:min-h-[280px] 576:max-w-[300px] md:max-w-[350px] lg:w-[267px] lg:h-[405px]"
                            />
                            <div className="flex gap-1.5 items-center justify-between">
                                <p className='font-jost font-semibold text-xsm sm:text-xl leading-145 text-pink'>
                                    {obj.title}
                                </p>
                                <div className='max-sm:size-[13px]'>
                                    {obj.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center md:pt-1.5 px-5'>
                <PrimaryButton className='max-sm:px-2.5 w-full lg:mt-16 md:mt-12 sm:mt-10 mt-6 py-4 max-w-[400px] mx-auto hover:shadow-none shadow-grey-pink' text='Pre-Order Yours' />
            </div>
            <div className='flex items-center justify-center mt-[46px] sm:mt-14 md:mt-20 lg:mt-24 xl:mt-[136px]'>
                <Image
                    src={logo}
                    alt='logo img'
                    width={226}
                    height={233}
                    className='lg:min-w-[226px] lg:min-h-[233px] max-sm:w-[100px] max-sm:h-[104px] sm:size-[150px] md:size-[200px]'
                />
            </div>
            <div className='h-[1px] bg-pink w-full xl:mt-[113px] lg:mt-[24] md:mt-20 mt-[37px] sm:mt-14'></div>
            <p className='font-plus-sans font-normal leading-150 text-pink text-base font-lexend text-dark-blue py-[22px] md:py-6 text-center'>
                copy right {currentYear}  ©2024 CleanGirl
            </p>
        </div>
    );
};
export default WhatMagicFoam;
