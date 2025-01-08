'use client';
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton} from "react-share";
import {Linkedin, LucideFacebook, Twitter} from "lucide-react";

const SocialShare = () => {
    let fullUrl;
    if (typeof window !== "undefined") {
        fullUrl = `${window.location.href}`;
    }
    return (
        <div className={'flex gap-4'}>
            <FacebookShareButton url={fullUrl}>
                <LucideFacebook className="w-6 h-6 cursor-pointer hover:text-blue-500"/>
            </FacebookShareButton>
            <TwitterShareButton url={fullUrl}>
                <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-400"/>
            </TwitterShareButton>
            <LinkedinShareButton url={fullUrl}>
                <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-400"/>
            </LinkedinShareButton>
        </div>
    );
};

export default SocialShare;