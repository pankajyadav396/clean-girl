"use client";
import React from 'react';
import Image from 'next/image';
import girlImg from "../../public/assets/images/webp/clean-girl-header.png";
import layer from "../../public/assets/images/webp/white-layer-header.png";
import bluecircle from "../../public/assets/images/svg/blue-circle.svg";
import logo from "../../public/assets/images/svg/logo.svg";
import PrimaryButton from './common/PrimaryButton';
import { BlueStars, CartIcon } from './common/Icons';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className="bg-light-pink xl:bg-hero relative bg-no-repeat bg-size-100 bg-center min-h-[670px] max-h-[810px] overflow-hidden">
            <Image
                src={layer}
                alt='layer img bottom'
                width={1440}
                height={129}
                className='absolute bottom-0 xl:bottom-[-55px] w-[1100px] lg:w-full h-[52px] sm:h-16 lg:h-24 xl:h-[129px]'
            />
            <div className='bg-pink flex items-center h-[40px] px-3'>
                <div className="mx-auto max-w-[1140px] w-full">
                    <div className="flex items-center sm:justify-between justify-center gap-2.5">
                        <p className='font-medium text-white !leading-125 text-xxs sm:text-sm '>
                            Join the Clean Revolution! Pre-Order Now
                        </p>
                        <div className="bg-white rounded-5xl py-0.5 gap-[5px] sm:py-1.5 sm:gap-2.5 px-2.5 flex items-center">
                            <span>
                                <Image
                                    src={bluecircle}
                                    alt="blue circle 13% left"
                                    className='max-sm:size-3'
                                    width={14.8}
                                    height={14.8}
                                />
                            </span>
                            <p className='!leading-125 text-nowrap text-xxs sm:text-sm font-semibold font-lexend text-navy-blue inline-block'>
                                Only 13% Left
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white py-2.5'>
                <div className="mx-auto max-w-[420px] sm:max-w-[1172px] px-4">
                    <div className="flex justify-between">
                        <Link href="/">
                            <Image
                                src={logo}
                                className='size-11 sm:size-12 md:size-[60px]'
                                alt='logo img'
                                width={59}
                                height={60}
                            />
                        </Link>
                        <div className="flex gap-5 sm:gap-6 items-center">
                            <Link href="/cart">
                                <PrimaryButton className='max-sm:py-2 hover:shadow-grey-pink duration-300 max-sm:px-2.5 max-sm:text-xs' text='Pre-Order' />
                            </Link>
                            <span>
                                <CartIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[430px] sm:max-w-[1172px] mx-auto px-5 mt-12 sm:mt-1.5'>
                <div className="flex gap-5 max-sm:items-center max-sm:justify-center md:gap-[70px]">
                    <div className="w-8/12 md:w-1/2 sm:mt-[78px]">
                        <h1 className="font-normal text-pink font-Shrikhand leading-145 sm:leading-130 mb-2.5 lg:text-6xl md:text-5xl sm:text-4xl text-2xxl xl:text-8xl">
                            Hey! I’m <span className='block'>Clean Girl</span>
                        </h1>
                        <p className="sm:mb-6 md:mb-10 text-base text-dark-pink max-w-[358px] font-lexend font-normal leading-125 sm:leading-150">
                            Thank you so much for supporting me to make the world a beautiful place!
                        </p>
                        <PrimaryButton
                            className="shadow-grey-pink hidden sm:block hover:shadow-none hover:opacity-80"
                            text="Pre-Order Magic Cleaning Foam"
                        />
                        <div className="sm:flex hidden gap-[5px] mt-8 pt-0.5">
                            <span className='max-sm:size-3'>
                                <BlueStars />
                            </span>
                            <p className='text-navy-blue font-medium font-lexend !leading-125'>
                                Thank you so much for your support!
                            </p>
                        </div>
                    </div>
                    <div className="w-4/12 md:w-1/2 flex items-center justify-end md:justify-center xl:justify-start">
                        <Image
                            src={girlImg}
                            alt="Clean Girl Product"
                            className='max-w-[127px] md:max-w-[270px] sm:max-w-[200px] lg:max-w-[350px] xl:max-w-[433.39px]'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className='block sm:hidden max-w-[400px] mx-auto mt-9'>
                    <PrimaryButton
                        className="shadow-grey-pink w-full sm:hidden block hover:shadow-none hover:opacity-80"
                        text="Pre-Order Magic Cleaning Foam"
                    />
                    <div className="flex items-center justify-center gap-[5px] mt-3.5">
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
    );
};

export default Header;
