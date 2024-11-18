import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

    return (
        <footer className={"bg-[#21212d] h-[130px]"}>
            <div
                className={"filter-invert h-full flex items-center flex justify-center"}
                style={{
                    backgroundImage: `url('/background.png')`,
                }}
            >
                {`© ${currentYear} All Rights Reserved by Sandesh S`}
            </div>
        </footer>
);
};

export default Footer;