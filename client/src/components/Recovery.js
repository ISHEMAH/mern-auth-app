import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from "../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'
const Recovery = () => {
  const formik = useFormik({
    initialValues:{
      password:""
    },
    validate:passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values => {
      console.log(values)
    }
  })
  return (
    <div className='container mx-auto'>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
                <h4 className='text-5xl font-bold'>
                   Recovery
                </h4>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                      Enter OTP TO recover passowrd.
                </span>
            </div>
            <form className="py-20" onSubmit={formik.handleSubmit}>
                <span className='py-4 text-mn text-left text-gray-500'>
                  Please enter your 1 time verification code to continue...
                </span>
                <div className='textbox flex flex-col items-center gap-6'>
                    <input {...formik.getFieldProps('password')} className={styles.textbox} type='text' placeholder='Password'/>
                    <button className={styles.btn} type='submit' >Let's go</button>
                </div>
                <div className='text-center py-4'>
                    <span className='text-gray-500 '>Forgot password ? <Link className='text-red-500' to='/recovery'>Recover Now</Link></span>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Password