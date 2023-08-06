import { toast } from "react-hot-toast";

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}
export async function passwordValidate(values){
    const errors = PasswordVerify({},values)
    return errors
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
