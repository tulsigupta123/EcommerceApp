import bcrypt from "bcrypt";

// For password hashing-
export const hashPassword = async(password) =>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        console.log(hashedPassword);
        return hashedPassword;
    }catch(error){
        console.log(`Error is : ${error}`);
    };
};
   export const comparePassword = async(password,hashedPassword) => {
    await bcrypt.compare(password,hashedPassword);
    console.log(comparePassword);
        return comparePassword;
   }
