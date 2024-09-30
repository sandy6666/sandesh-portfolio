import React from 'react';

const Info = () => {
    return (
        <section
            className={'h-full md:h-[260px] pl-4 py-8 w-full flex flex-col md:flex-row md:items-center justify-center md:gap-20 gap-10 lg:gap-32 xl:gap-56 bg-[#272730]'}>
            <div className={'flex gap-2'}>
                <div className={'text-7xl flex text-white font-bold'}><span
                    className={'text-3xl flex items-center font-semibold md:text-5xl text-primary'}>+</span>5
                </div>
                <div className={'text-lg flex flex-col justify-center text-[#8f8f92]'}>Years of <div
                    className={'font-bold'}>Experience</div></div>
            </div>
            <div className={'flex gap-2'}>
                <div className={'text-7xl flex text-white font-bold'}><span
                    className={'text-3xl flex items-center font-semibold md:text-5xl text-primary'}>+</span>20
                </div>
                <div className={'text-lg flex flex-col justify-center text-[#8f8f92]'}>Projects <div
                    className={'font-bold'}>Completed</div></div>
            </div>
            <div className={'flex gap-2'}>
                <div className={'text-7xl flex text-white font-bold'}><span
                    className={'text-3xl flex items-center font-semibold md:text-5xl text-primary'}>+</span>3
                </div>
                <div className={'text-lg flex flex-col justify-center text-[#8f8f92]'}>Adobe Certifications <div
                    className={'font-bold'}>Completed</div></div>
            </div>
        </section>
    );
};

export default Info;