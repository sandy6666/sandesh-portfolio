import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Resume from "@/components/Home/Resume";

export default function Home() {
    return (
        <>
            <Hero/>
            <Info />
            <Resume />
        </>
    );
}
