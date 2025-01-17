import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-violet-50 max py-16">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Hi! I'm Yu</h1>
          <p className="mt-4 text-3xl text-slate-700 tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-l text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <a
            href="resume.pdf"
            target="_blank"
            className="capitalize text-violet-400 hover:text-violet-700 font-semibold  flex gap-x-1 items-center mt-4 "
          >
            <p>view my resume</p>
            <MdArrowOutward className="h-4 w-4 animate-bounce" />
          </a>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/wuyu621">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/wuyu621/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className=" hidden md:block">
          <img src={heroImg} alt="hero img" className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
