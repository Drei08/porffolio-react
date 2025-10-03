import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import axios  from "axios";


export default function ProjectSecond() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.github.com/users/Drei08/repos`
      );
      setProjects(res.data);
    })();
  }, []);

  useEffect(() => {
    console.log("PROJS", projects);
  }, [projects]);

  return (
    <div className="mt-[25vh] text-white m-auto">
      <h1 className="text-4xl text-center">Projetos</h1>

      <div className="mt-35 flex flex-wrap justify-center gap-4">
         {projects.map((item) => {
          return (
            <ProjectItem
              key={item.node_id}
              html_url={item.html_url}
              name={item.name}
              description={item.description}
              language={item.language}
              stargazers_count={item.stargazers_count}
            ></ProjectItem>
          );
        })}
      </div>
    </div>
  )
}
