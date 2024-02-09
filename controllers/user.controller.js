import {prisma} from '../prisma/index.js';

const signup = async(req, res)=> {
   const {email,name,password} = req.body;
   if(!name || !email || !password) {
    throw Error('All fields are required');
   }

   const user = await prisma.user.create({
    data:{
        name,
        email,
        password
    }
   })

   res.status(201).json({user, message:'Signup successfull'});
}


const getAllUsers = async(req, res)=> {
    const users = await prisma.user.findMany();
    res.status(200).json({users});
}


export{
    signup,
    getAllUsers
    
}