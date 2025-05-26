export const checkValidateData = (email , password) =>{

 console.log(typeof email, email, "email");

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
  const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if (!isEmailValid) return "Email ID is not Valid ";
    if (!isPasswordValid) return "Password is not Valid ";

    return null;

}