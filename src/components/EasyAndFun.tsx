import React from 'react';
import { Easy_Fun_List } from './common/Helper';
import Image from "next/image"

const EasyAndFun: React.FC = (): JSX.Element => {
    return (
        <div className='pt-[60px] md:pt-[100px] lg:pt-[200px] bg-light-pink md:bg-white xl:pb-[150px] pb-24 '>
            <div className="mx-auto max-w-[1140px] px-4">
                <h2 className='font-Shrikhand mb-0 sm:mb-8 pb-0 915:mb-12 md:pb-0.5 font-normal text-2xxl md:text-3xl text-center lg:text-4xl xl:text-4xxl !leading-145 text-pink'>
                    Easy & Fun!
                </h2>
                <div className='flex flex-wrap w-full justify-center -mx-4'>
                    {Easy_Fun_List.map((obj, index) => {
                        return (
                            <div key={index} className={`${index === 2 ? "915:w-1/3 sm:w-1/2 w-full mt-5 sm:mt-8 915:mt-0" : index === 0 || 1 ? "sm:w-1/2 915:w-1/3 w-full mt-5 sm:mt-0" : ""} px-3`}>
                                <div className="flex w-full h-full sm:gap-4 max-sm:items-center max-sm:justify-center max-sm:max-w-[366px] max-sm:mx-auto">
                                    <div className='max-sm:min-h-[100px] max-sm:min-w-[100px] max-sm:flex items-center'>
                                        <Image
                                            src={obj.img}
                                            alt={obj.alt}
                                            width={50}
                                            height={50}
                                            className={`${index === 0 ? "h-24 w-[86px] sm:h-[50px] sm:min-w-[50px]" : index === 1 ? "w-[75px] h-[71px] sm:h-[50px] sm:min-w-[50px]" : index === 2 ? "w-[75px] h-[74px] sm:h-[50px] sm:w-[50px]" : ""} `}
                                        />
                                    </div>
                                    <div className='flex flex-col sm:gap-2.5 gap-1.5'>
                                        <p className='text-navy-blue font-Shrikhand font-normal text-2xl leading-145'>
                                            {obj.title}
                                        </p>
                                        <p className='text-navy-blue font-lexend font-light sm:font-normal text-base leading-125 sm:leading-150'>
                                            {obj.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default EasyAndFun;
