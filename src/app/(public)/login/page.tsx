"use client"

import { signIn } from 'next-auth/react';
import React, { SyntheticEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';




type LoginFormT = {
  email: string,
  pass: string,
}



export default function Page() {

    const { register: reg, handleSubmit, formState:{errors} } = useForm<LoginFormT>()


    const submitLoginForm: SubmitHandler<LoginFormT> = async (formData: LoginFormT) => {
      
      console.log("==> (onSubmit) data:", formData)
      const userLoginRes = await signIn("credentials", {
        email: formData.email,
        password: formData.pass,
        redirect: false
      })

      if (userLoginRes?.error) {
        console.log("userLoginRes?.error:", userLoginRes.error)
        console.log("modified");
        return
      }
    }



  return (

    <main className="fflex-col-center my-6 gap-4">

      <h2> Welcome </h2>

      <form className="fflex-col bg-base-100 w-full max-w-md gap-4 p-6 rounded-xl" 
            onSubmit={handleSubmit(submitLoginForm)} >

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Login</span>
          </div>
          <input type="text" className="input input-bordered w-full h-11" 
                              {...reg("email", { required: true })} />
          { errors.email && (
            <div className="label">
              <span className="label-text-alt text-error">
                This field is required
              </span>
            </div>
          )}
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input type="password" className="input input-bordered w-full h-11" {...reg("pass")} />
          { errors.pass && (
            <div className="label">
              <span className="label-text-alt text-error">
                This field is required
              </span>
            </div>
          )}
        </label>
        
        <button type='submit' className="btn btn-accent w-full my-4">Contact</button>

      </form>

    </main>

  )

}







