import React from "react"
import '../styles/index.css'



interface IAppProps {
}

const ProjectsPage: React.FunctionComponent<IAppProps> = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline hover:bg-sky-700">Projects Page</h1>
    </div>
  );
};

export default ProjectsPage;
