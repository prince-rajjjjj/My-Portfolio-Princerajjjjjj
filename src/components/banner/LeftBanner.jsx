import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiAdobephotoshop } from "react-icons/si";
import FindMe from "./FindMe";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-20">
      {/* Welcome Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Prince Raj</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a developer studying at Chitkara University, passionate about
          learning new technologies and constantly improving my skills. I love
          solving coding challenges and building innovative solutions that push
          boundaries.
        </p>
      </div>

      {/* Socials & Skills Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
        {/* Find Me In Section */}
        <div className="w-full md:w-auto">
          <FindMe />
        </div>

        {/* Best Skill On Section */}
        <div className="w-full md:w-auto">
          <h2 className="text-base uppercase font-titleFont mb-4">Best Skill On</h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href="https://react.dev/" target="_blank">
              <FaReact />
            </a>
            <a className="bannerIcon" href="https://nodejs.org/en" target="_blank">
              <SiNodedotjs />
            </a>
            <a className="bannerIcon" href="https://tailwindcss.com/" target="_blank">
              <SiTailwindcss />
            </a>
            <a
              className="bannerIcon"
              href="https://www.adobe.com/products/photoshop.html"
              target="_blank"
            >
              <SiAdobephotoshop />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
