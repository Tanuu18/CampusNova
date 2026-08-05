


//Authorization
// const roleMiddleware=(role)=>{
//     return (req,res,next)=>{
//       if(req.user.role!==role){
//         return res.status(403).json({success:false,message:"Access Denied"})
//     }
//     next();
//     }
// }

const roleMiddleware=(...role)=>{
    return (req,res,next)=>{
      if(!role.includes(req.user.role)){
        return res.status(403).json({success:false,message:"Access Denied"})
    }
    next();
    }
}

export default roleMiddleware;