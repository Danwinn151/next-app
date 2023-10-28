"use client"

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const user = () => {
  const { data:session } = useSession()
 console.log(session)
 const router = useRouter()
 

  useEffect(() => {
    if(!session) {
      router.push("/")
    }
  },[session])

  if(!session) { // if there is no session, show the loading text
    return (
      <div className='text-center'>
        Loading...
      </div>
    )
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <p className='mt-4'>
        You are welcome {' '}
       <span className='font-bold'>{session?.user?.name}</span> 
      </p>
      <p className='my-4'>
        Here is your email {" "}
      <span className='font-bold'>{session?.user?.email}</span>
      </p>
      
        
      </div>
      <div className='flex justify-center'>
        <button onClick={() => signOut()} className='bg-red-500 rounded-md px-3 py-3'>
          Sign out
        </button>
       </div>
    </>
    
  )
}

export default user

