import { toast } from "react-hot-toast";

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}
export async function passwordValidate(values){
    const errors = PasswordVerify({},values)
    return errors
}
export async function resetPasswordValidation(values){
  const errors = PasswordVerify({},values)

  if(values.password !== values.confirm_pwd){
    errors.exist = toast.error("Passwords are not matching...!")
  }
}
export async function registerValidation(values){
  const errors = usernameVerify({}, values)
  PasswordVerify(errors,values)
  emailVerify(errors,values)


  return errors;
}

function PasswordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}

function usernameVerify(errors = {}, values) {
  if (!values.username) {
    errors.username = toast.error('Username Required...!');
  } else if (values.username.includes(" ")) {
    errors.username = toast.error('Invalid Username...!');
  }
  return errors;
}
function emailVerify(error ={}, values){
  if(!values.email){
      error.email = toast.error("Email Required...!");
  }else if(values.email.includes(" ")){
      error.email = toast.error("Wrong Email...!")
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      error.email = toast.error("Invalid email address...!")
  }

  return error;
}
