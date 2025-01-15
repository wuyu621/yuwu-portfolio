import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="align-element pt-16" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 xs: grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
