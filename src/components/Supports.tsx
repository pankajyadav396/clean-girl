import React from 'react';

const Supports: React.FC = (): JSX.Element => {
    return (
        <div className='bg-supporters max-sm:bg-supporter bg-no-repeat mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[150px] flex-col flex items-center justify-center bg-center min-h-[252px] sm:min-h-[300px] lg:min-h-[394px] bg-size-100'>
            <h2 className='text-white text-5xxl max-sm:-mt-10 font-extrabold gap-4 font-lexend leading-125'>
                4,281,923 +
            </h2>
            <p className='font-Shrikhand text-2xl leading-145 text-white'>
                Clean Girl Supporters
            </p>
        </div>
    );
}

export default Supports;
