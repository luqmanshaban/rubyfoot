import React from 'react'

const EmailSubscription = () => {
  return (
    <div className='flex justify-center items-center gap-y-5 flex-col bg-white py-20'>
        <h1  className='text-dark md:text-4xl text-2xl font-bold text-center'>Get Frequent discounts</h1>
        <form className='flex md:flex-row gap-x-3 flex-col gap-y-3'>
            <input className='p-3 rounded-full bg-slate-300' type="email" name="email" id="" placeholder='Email' required/>
            <input className='p-2 px-5 cursor-pointer rounded-full bg-dark text-txt hover:bg-slate-600' type="submit" value="Subscribe" />
        </form>
    </div>
  )
}

export default EmailSubscription