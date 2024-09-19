import React from 'react';
import {ArrowUpRight} from "lucide-react";

const Resume = () => {
    return (
        <section className={'bg-[#121212]'}>
            <div className={'h-[1470px] flex justify-center items-center px-40'} style={{
                backgroundImage: `url('/background1.png')`,
            }}>
                <div className={'w-full flex flex-col gap-6'}>
                    <h2 className={'text-6xl font-bold text-[#6E4EF2]'}>My Resume</h2>
                    <div className={'flex justify-between text-xl text-[#bcbcbe]'}>
                        I believe that working hard and trying to learn every day will <br />
                        make me improve in satisfying my customers.
                        <button
                            className={'w-[176px] h-[58px] text-sm font-bold rounded-xl text-white flex justify-center items-center gap-2 gradient-primary'}> Get
                            in touch <ArrowUpRight/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;