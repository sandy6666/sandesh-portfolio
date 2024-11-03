import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Resume from "@/components/Home/Resume";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Resume />
      <Skills />
      <Projects />
    </>
  );
}