import { IProjects } from "./projects.interface";
import Project from "./projects.model";

export const createProjecttoDB = async (payload:IProjects):Promise<IProjects>=>{

    const project =await new Project(payload);
      await project.save();
   
      return project;

  }


  export const getProjectToDB =async():Promise<IProjects[]>=>{
    const result = await Project.find();
    return result;
 }

 export const getProjectByIdFromDB = async(payload:string):Promise<IProjects | null>=>{

   const result = await Project.findOne({_id:payload})  
  //  console.log(result);
   return result;
 }

 export const updateProjectByIdFromDB = async (id:string,payload:IProjects) => {
    const result = await Project.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  }
export const deleteProjectByIdFromDB = async (payload:string) => {
    const result = await Project.findByIdAndDelete({_id:payload})  
      return result;
  }