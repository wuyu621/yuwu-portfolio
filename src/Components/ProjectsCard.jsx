import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, title, github, text, technologies }) => {
  return (
    <a
      href={url}
      className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 duration-300"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-80 rounded-t-lg object-cover"
      />
      <div className="p-6  flex flex-col gap-2">
        <h2 className=" capitalize font-bold text-xl tracking-wide text-violet-500 ">
          {title}
        </h2>

        <p className="text-slate-700">{text}</p>
        <p className="text-slate-500 font-semibold text-sm mt-2">
          {technologies}
        </p>

        <div className="flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="text-violet-500 h-6 w-6 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="text-violet-500 h-6 w-6 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
