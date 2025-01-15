const SkillsCard = ({ title, icon }) => {
  return (
    <article className="flex items-center">
      <span>{icon}</span>
      <p className="ml-2 font-bold ">{title}</p>
    </article>
  );
};

export default SkillsCard;
