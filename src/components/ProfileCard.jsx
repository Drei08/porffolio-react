import React from 'react'

export default function ProfileCard() {
  return (
    <div className="border border-line-primary bg-background-primary text-white w-[55vw] min-w-[300px] max-w-[500px] m-auto mt-10 p-16 rounded-2xl">
      <h1 className='text-4xl font-bold text-center'>/Andrei Lucas</h1>
      <h2 className='mt-4 text-center'>
        Brasileiro, Dev-Junior, HTML, CSS, JAVASCRIPT, REACT, JAVA, MongoDB, MySQL, PostgreSQL
      </h2>
      <div className='flex justify-between mt-8'>
        <a href="https://github.com/drei08" target="_blank">
        Github
        </a>
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">
        Linkedin
        </a>
      </div>
    </div>
  )
}
