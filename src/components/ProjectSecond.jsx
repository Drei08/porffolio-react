
import { Star } from 'lucide-react';
import ProjectItem from './ProjectItem';


export default function ProjectSecond() {
  

  return (
    <div className="mt-24 text-white m-auto">
      <h1 className="text-4xl text-center">Projetos</h1>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <ProjectItem 
        title={"test.github.io"}
        description={"descrição do projeto, blablabla"}
        tag={"css"}
        star={"710"}
        ></ProjectItem>

        <ProjectItem 
        title={"test.github.io"}
        description={"descrição do projeto, blablabla"}
        tag={"css"}
        star={"710"}
        ></ProjectItem>

        <ProjectItem 
        title={"test.github.io"}
        description={"descrição do projeto, blablabla"}
        tag={"css"}
        star={"710"}
        ></ProjectItem>

        <ProjectItem 
        title={"test.github.io"}
        description={"descrição do projeto, blablabla"}
        tag={"css"}
        star={"710"}
        ></ProjectItem>
      </div>
    </div>
  )
}
