import jwt from "jsonwebtoken";

export default function autharizeUser(req , res , next){

        const header = req.header("Authorization")

        if(header != null){
            
            const token = header.replace("Bearer " , "")

            jwt.verify(token , "i-computer-54" , 
                
                (err , decoded)=>{
                    if(decoded == null){
                        res.status(401).json({Message : "Unauthorized Access"})
                    }else{
                        req.user = decoded
                        next()
                    }

                }
            )
        }else{next()}
    }