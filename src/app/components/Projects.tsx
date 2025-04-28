import ProjectCard from "./ProjectCard";
import constants from "../utils/constantUtils";

export default function Projects() {
  return (
    <div
      className="bg-white dark:bg-gray-900 py-24 sm:py-32"
      style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl">
            Projects
          </h2>
        </div>
        <div className="mx-auto flex mt-1 gap-8 border-t border-gray-200 dark:border-gray-700 pt-4 sm:mt-4 sm:pt-4 sm: flex-wrap lg:justify-between lg:flex-nowrap">
          {constants.projectList.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 md:w-1/3">
              <ProjectCard key={project.id} cardInfo={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
