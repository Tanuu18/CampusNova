import jwt from 'jsonwebtoken'

const authMiddleware=async(req,res,next)=>{
   try{ if(!req.headers.authorization){
        return res.status(401).json({success:false,message:"unauthorized"})
    }
    const token=req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    next();
   }
    catch(error){
         return res.json({success:false,message:error.message})
    }
}

export default authMiddleware;