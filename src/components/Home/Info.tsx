import React from 'react';

const Info = () => {
    return (
        <section className={'h-[260px] w-full flex items-center justify-center gap-56 bg-[#272730]'}>
            <div className={'flex gap-2'}>
                <div className={'text-7xl text-white font-bold'}>+5</div>
                <div className={'text-lg flex flex-col justify-center text-[#8f8f92]'}>Years of <div
                    className={'font-bold'}>Experience</div></div>
            </div>
            <div className={'flex gap-2'}>
                <div className={'text-7xl text-white font-bold'}>+20</div>
                <div className={'text-lg flex flex-col justify-center text-[#8f8f92]'}>Projects <div
                    className={'font-bold'}>Completed</div></div>
            </div>
            <div className={'flex gap-2'}>
                <div className={'text-7xl text-white font-bold'}>+3</div>
                <div className={'text-lg flex flex-col justify-center text-[#8f8f92]'}>Adobe Certifications <div
                    className={'font-bold'}>Completed</div></div>
            </div>
        </section>
    );
};

export default Info;