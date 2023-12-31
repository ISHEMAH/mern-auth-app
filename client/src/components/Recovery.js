import React from 'react'
import styles from "../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
const Recovery = () => {
  
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
                      Enter OTP to recover passowrd.
                </span>
            </div>
            <form className="py-20">
                <p className=' text-center text-sm  text-gray-500'>
                  Enter 6 digit OTP sent to your email address.
                </p>
                <div className='textbox flex flex-col items-center gap-6'>
                    <input className={styles.textbox} type='text' placeholder='OTP'/>
                    <button className={styles.btn} type='submit' >Recover</button>
                </div>
                <div className='text-center py-4'>
                    <span className='text-gray-500 '>Can't get OTP ? <button className='text-red-500'>Resend</button></span>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery