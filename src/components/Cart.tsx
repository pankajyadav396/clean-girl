"use client"

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/assets/images/svg/logo.svg'
import truck from '../../public/assets/images/svg/truck.svg'
import gift from '../../public/assets/images/svg/gift.svg'
import cartGirl from '../../public/assets/images/webp/add-cart-girl.png'
import { BlueStars, LineSvg, LockIcon, MinusIcon, PlusIcon, PlusWhiteIcon } from './common/Icons'
import { useState } from 'react'


const Cart: React.FC = () => {
    const initialRupees = 19.90;
    const [value, setValue] = useState<number>(1); // Initialize value with 1
    const [rupees, setRupees] = useState<number>(initialRupees); // Initialize rupees with 19.90

    const decrement = () => {
        if (value > 1) {
            setValue(value - 1);
            setRupees(prevRupees => parseFloat((prevRupees - initialRupees).toFixed(2)));
        }
    };

    const increment = () => {
        setValue(value + 1);
        setRupees(prevRupees => parseFloat((prevRupees + initialRupees).toFixed(2)));
    };

    return (
        <>
            <div className='overflow-hidden'>
                <div className='py-2.5 bg-old-pink px-4 relative z-[1]'>
                    <div className="mx-auto max-w-[1140px]">
                        <div className="flex justify-between flex-col md:flex-row gap-2.5 items-center">
                            <div className="flex gap-2.5 items-center">
                                <div className='h-[9px] rounded-full w-[150px] bg-pink'></div>
                                <Image
                                    src={truck}
                                    alt='logo img'
                                    width={22}
                                    height={18}
                                    className=''
                                />
                                <div className='h-[9px] rounded-full w-[150px] bg-grey-white'>
                                    <div className='w-[46%] h-full rounded-full bg-pink'></div>
                                </div>
                                <Image
                                    src={gift}
                                    alt='logo img'
                                    width={17}
                                    height={19}
                                    className=''
                                />
                            </div>
                            <p className='text-navy-blue font-medium font-lexend text-base leading-125'>
                                Spend <span className='font-bold'>$12 </span>  more and get a <span className='font-bold'>FREE GIFT!</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1180px] px-5 mx-auto'>
                    <div className="flex flex-wrap justify-center 915:justify-between overflow-hidden pt-14 mt-1 flex-col 915:flex-row">
                        <span className="absolute left-[50%] 915:left-[51.5%] xl:left-[50.5%] top-[0%] sm:top-[2%] md:top-[-2%] 915:top-0 915:rotate-[0deg] rotate-[90deg]">
                            <LineSvg />
                        </span>
                        <div className='max-w-[527px] w-full 915:w-[48%] max-915:mx-auto flex flex-col gap-[50px]'>
                            <div className='flex items-center gap-6 w-full'>
                                <div className="w-[62px] sm:w-[110px] h-[52px] sm:h-[85px] xl:h-[110px] bg-pink border rounded-lg border-gray-white">
                                </div>
                                <div className='flex w-full xl:w-[393px] flex-col gap-4'>
                                    <p className='text-xl text-navy-blue font-lexend font-semibold leading-125'>
                                        Clean Girl Magic Cleaning Foam
                                    </p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3 items-center'>
                                            <button onClick={decrement}>
                                                <MinusIcon />
                                            </button>
                                            <span className='text-dark-pink font-lexend font-semibold text-sm'>{value}</span>
                                            <button onClick={increment}>
                                                <PlusIcon />
                                            </button>
                                        </div>
                                        <p className='text-xl font-normal font-lexend leading-125 text-dark-pink'>
                                            ${rupees.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-6 w-full'>
                                <div className="w-[62px] sm:w-[110px] h-[52px] sm:h-[85px] flex items-center justify-center xl:h-[110px] bg-sermon-pink border rounded-lg border-gray-white">
                                    <LockIcon />
                                </div>
                                <div className='flex w-full xl:w-[388px] flex-col gap-2.5'>
                                    <p className='text-xl text-dark-pink font-lexend font-semibold leading-125'>
                                        Gift Name
                                    </p>
                                    <div className='flex items-center gap-3 justify-between'>
                                        <p className='font-lexend text-pink text-base !leading-125 font-normal'>
                                            Spend <span className='font-bold'>$12</span> more to unlock
                                        </p>
                                        <button className='bg-old-pink text-nowrap text-pink font-bold font-lexend px-4 py-2.5 rounded-5 text-base !leading-125'>
                                            FREE GIFT
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-9 915:mt-0 max-w-[522px] max-915:mx-auto w-full 915:w-[47%]">
                            <h5 className="font-bold text-lg sm:text-xl md:text-2xl text-navy-blue font-lexend !leading-125 mb-[18px] sm:mb-6">
                                Double the cleaning, Double the fun
                            </h5>
                            <div className="bg-old-pink flex items-center max-w-[522px] py-4 sm:py-0 px-5 sm:px-2.5 xl:px-0 sm:pt-[7px] rounded-[10px] md:rounded-2xl">
                                <Image
                                    src={cartGirl}
                                    alt="girl"
                                    className="w-[42px] sm:w-[102px] lg:ms-2 h-[80px] sm:h-[192px]" />
                                <div className="flex flex-col ms-3 sm:ms-4">
                                    <p className="text-sm font-semibold sm:text-lg md:text-xl text-navy-blue font-lexend !leading-125">
                                        Add one more Magic Cleaning Foam!
                                    </p>
                                    <p className="text-xs sm:text-lg md:text-xl font-normal font-lexend leading-125 text-dark-pink mt-0.5 sm:mt-4 mb-3 xl:mb-6">
                                        <span className='line-through'> $19.90</span>
                                        <span className="text-sm ms-2 sm:ms-5 text-pink sm:text-lg md:text-xl">$14.90</span>
                                    </p>
                                    <button className="text-white bg-pink max-w-[113px] sm:max-w-[165px] rounded-full py-2 sm:py-3 xl:py-3.5 font-bold font-lexend !leading-125 text-xs sm:text-base hover:bg-light-pink hover:text-pink group duration-300 flex items-center justify-center">
                                        <span className="me-1 sm:me-2.5">
                                            <PlusWhiteIcon />
                                        </span>Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="flex-col items-center justify-center hidden sm:flex pt-0.5 sm:justify-start sm:items-start">
                                <button className="bg-pink px-5 hover:shadow-none duration-300 mt-12 sm:w-[203px]  py-3.5 w-full sm:flex hidden justify-center shadow-grey-pink text-white font-bold font-lexend text-base rounded-full overflow-hidden">
                                    <span className="relative z-10">Securely Checkout</span>
                                </button>

                                <p className="flex items-center mt-2 text-xs font-medium text-center text-navy-blue sm:text-base leading-125 sm:mt-6 md:mt-7">
                                    <span className="me-1">
                                        <BlueStars />
                                    </span>Thank you so much for your support!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center flex-col justify-center'>
                    <a href="/" className='mt-[117px] relative'>  <Image
                        src={logo}
                        alt='logo img'
                        width={226}
                        height={233}
                        className='lg:min-w-[226px] lg:min-h-[235px] max-sm:w-[100px] max-sm:h-[104px] sm:size-[150px] md:size-[200px]'
                    />
                    </a>
                    <div className="flex flex-col sm:hidden border-t border-light-gray mt-12 py-9  w-full px-3.5 justify-center items-center sm:justify-start sm:items-start">
                        <button className="max-w-[402px] text-white bg-pink px-5  py-3.5 relative w-full shadow-grey-pink hover:shadow-none duration-300 justify-center font-bold font-lexend text-base rounded-full">
                            <span className="relative z-10">
                                Securely Checkout
                            </span>
                        </button>

                        <p className="flex items-center mt-2.5 text-xs font-medium text-center text-blue sm:text-base leading-125">
                            <span className="me-1">
                                <BlueStars />
                            </span>Thank you so much for your support!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart