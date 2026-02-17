import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";



export function createUser(req, res) {
	const hashedPassword = bcrypt.hashSync(req.body.password, 10);

	const user = new User({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: hashedPassword,
	});
	user
		.save()
		.then(() => {
			res.json({ message: "User created successfully" });
		})
		.catch((error) => {
			res.json({ message: "Error creating user", error: error });
		});
}


//promises part - async function for - await
export async function createUserAsync(req, res) {
	const hashedPassword = bcrypt.hashSync(req.body.password, 10);

	const user = new User({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: hashedPassword,
	});
	try {
		
		await user.save();
		res.json({ message: "User created successfully" });

	} catch (error) {

		res.json({ message: "Error creating user", error: error });

	}
}


export function loginUser(req , res){

    User.findOne({

        email : req.body.email

    }).then(

        (user)=>{

            if(user == null){
                res.status(401).json({
                    message : "User Not Found"
                })

            }else{

                const isPasswordValid = bcrypt.compareSync(req.body.password , user.password)

                if(isPasswordValid){

                const token = jwt.sign({

                    firstname : user.firstname,
                    lastname : user.lastname,
                    role : user.role,
                    image : user.image,
                    isEmailVerified : user.isEmailVerified

                } , process.env.JWT_SECRET_KEY)


                    res.json({message : "Successfully LogIn",
                        token : token
                    })

                } else{
                    res.status(401).json({message : "Password invalid"})
                }
            }
        }
    )
}


export function isAdmin(req){
	if(req.user == null){
		return false
	}

	if(req.user.role == "admin"){
		return true

	}else{
		return false
	}
}