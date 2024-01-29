const mongoose = require('mongoose');
const Tache = require('../models/TodoModel')
const Controller = {
    postTask: async(req,res)=>{
        try{
            const result = await Tache.create({
                title: req.title,
                description: req.description,
                status: req.status,
                priority:req.priority,
                created_by: req.created_by,
                deadline:req.deadline
            }
            
            )
        }catch(e){
            console.log(e.mesage)
        }
    },
    getAllTasks : async (req,res)=>{
        try{
           const result = await Tache.find(); 
           console.log(result)
        }catch(e){
            console.log(e.message)
        } 
        

    },
    getTaskByID :  async (req,res)=>{
        try{
           const result = await Tache.find(req.params.id); 
           console.log(result)
        }catch(e){
            console.log(e.message)
        } 
        

    }


}

module.exports = Controller;