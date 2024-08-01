import React from 'react';
import Image from 'next/image';
import tiktok from "../../public/assets/images/webp/tiktok-photo-gril.png";
import tiktokbtn from "../../public/assets/images/webp/tiktok-btn.png";

const ViralTiktok: React.FC = (): JSX.Element => {
    return (
        <div className='lg:pt-20 bg-white px-5 pt-20 xl:pt-[100px]'>
            <div className="mx-auto max-w-[1140px]">
                <div className="flex flex-col-reverse 915:flex-row flex-wrap justify-center items-center">
                    <div className="915:w-1/2 md:w-9/12 sm:w-10/12 xl:pt-4 w-11/12">
                        <div className="sm:gap-7 gap-[15px] flex h-full w-full justify-center">
                            <Image
                                src={tiktok}
                                alt='tiktok image viral'
                                width={263}
                                height={433}
                                className='w-1/2 max-w-[243px] 915:mt-[92px] max-h-[433px] shadow-pink-blur border border-pink rounded-xxl'
                            />
                            <Image
                                src={tiktok}
                                alt='tiktok image viral'
                                width={263}
                                height={433}
                                className='w-1/2 max-w-[243px] max-sm:rotate-[1.8deg] rotate-[4deg] max-h-[433px] shadow-pink-blur border border-pink rounded-xxl'
                            />
                        </div>
                    </div>
                    <div className="915:w-1/2 915:pl-[72px] flex flex-col 915:items-start mb-6 sm:mb-8 md:mb-10 915:mb-0 items-center justify-center">
                        <a href="/">
                            <Image
                                src={tiktokbtn}
                                alt='tiktok btn'
                                width={199}
                                height={40}
                            />
                        </a>
                        <p className='font-Shrikhand font-normal text-2xxl px-3 mt-2 md:text-3xl text-center 915:text-start lg:text-4xl xl:text-4xxl !leading-145 text-pink sm:mt-4 md:mt-6'>
                            Over 4 Million Supporters Worldwide & Counting!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViralTiktok;
