import { NextFunction,Response,Request } from "express";
import { createProjecttoDB, deleteProjectByIdFromDB, getProjectByIdFromDB, getProjectToDB, updateProjectByIdFromDB } from "./projects.services";


export const createProject = async (req:Request,res:Response,next:NextFunction)=>{
    const data = req.body;
    const  project = await createProjecttoDB(data);
    res.status(200).json({
        status:"success",
        data:project
    })
}


export const getProjects =async (req:Request, res:Response,next:NextFunction) => {
    const result =await getProjectToDB();
    res.status(200).json({
       status:"status success",
       data:result
    })
}


export const getProjectByID = async (req:Request,res:Response,next:NextFunction)=>{
    // console.log(req);
    const {id} = req.params;
    const result = await getProjectByIdFromDB(id);
    res.status(200).json({
        status:"success",
        data:result
    })
}


export const updateProjectByID =async (req:Request, res:Response,next:NextFunction) => {
     const {id} = req.params;
     const project = req.body
     const updateProject =await updateProjectByIdFromDB(id,project);
     res.status(200).json({
        status:"success update projects",
        data:updateProject
    })
    
   }

export const deleteProjectByID =async (req:Request, res:Response,next:NextFunction) => {
    const {id} = req.params;
   const project =await deleteProjectByIdFromDB(id);
     res.status(200).json({
        status:" deleted success",
        data:project
    })
    
   }