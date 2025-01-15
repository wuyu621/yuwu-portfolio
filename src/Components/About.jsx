import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/about.svg";
const About = () => {
  return (
    <section className=" bg-white py-16" id="about">
      <div className="align-element grid md:grid-cols-12 items-center gap-8">
        <img
          src={AboutImg}
          alt="about img"
          className="w-full h-64 col-span-4 hidden md:block"
        />
        <article className="col-span-8">
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-4 leading-relaxed tracking-wide">
            Hi! My name is Yu.I'm a Seattle-based mom with a strong background
            in biotechnology and 8 years of experience as a project manager in
            the biomedicine industry. Currently, I’m transitioning into web
            development, driven by a passion for creating impactful,
            user-centric solutions.
          </p>
          <h1 className="mt-8 font-bold text-xl leading-relaxed tracking-wide capitalize">
            Made a wrong choice in career? Stay or Start anew?
          </h1>
          <p className="text-slate-600 mt-4 leading-relaxed tracking-wide">
            <span className="text-2xl font-bold">B</span>ack in the early 21st
            century, there was a saying in China: "Biotechnology is a sunrise
            industry, and we are about to conquer humanity’s greatest
            enemy—cancer." Like many of my high-achieving peers, I chose to
            pursue biotechnology, earning a master's degree from a top
            university in China and spending 8 years working in the field.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed tracking-wide">
            <span className="text-2xl font-bold">H</span>owever, over the course
            of my studies and career, I realized that research wasn’t my true
            passion. In the field of research, effort didn’t always guarantee
            success, and years of hard work could sometimes lead to no results
            at all. This unpredictability left me feeling unfulfilled. I longed
            for a career where my efforts would lead to tangible outcomes, where
            I could see the direct impact of my work and feel a sense of
            progress and achievement.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed tracking-wide">
            <span className="text-2xl font-bold">I</span> struggled for several
            years to figure out what my next step would be until a few friends
            successfully transitioned into coding careers. Their success
            inspired me to start anew. I vividly remember my first self-taught
            project—a simple, even rudimentary, dice game for my daughter. Her
            excitement and the way she said, “Mom, you’re amazing,” filled me
            with an immense sense of accomplishment and joy. That moment
            confirmed that I had found the right path.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed tracking-wide">
            <span className="text-2xl font-bold">N</span>ow, I am fully prepared
            to enter the tech industry with enthusiasm, determination, and a
            strong foundation in teamwork, time management, problem-solving, and
            client communication skills, all of which I developed during my
            years as a project manager. I look forward to making meaningful
            contributions to the field and bringing my unique perspective and
            drive to every project I take on.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
