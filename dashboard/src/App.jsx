import React from 'react'
import kraven from './assets/kraven.jpg'

const App = () => {
  return (
    <div className=" Times New Roman ">
      <nav> 
      <div class = "flex items-center justify-between bg-black">
        <img src={kraven} className="h-25 w-30 rounded-full mx-15" />
        <p className='text-white text-5xl'>"Your Best Exam Partner"</p>  
        <a href="#" target="_blank" rel="noreferrer">
          <button className="rounded-full bg-white p-4 text-black text-2xl mb-15 mt-15 mx-15">Contact Us</button>
        </a>
        </div>
        </nav>

        <div className='flex flex-col items-center justify-center text-4xl mt-25 mb-25 outline outline-2 outline-offset-2 rounded-full'>
          <h2 className='text-5xl text-bold'>Our Mission</h2>
          <p >Our Mission is to provide you the best learning experience <br/> and crack the Exams at the comfort of your home, and <br/> We provide all the courses in one stop.</p>
        </div>    
       
        <div className="flex bg-black rounded-xl justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className='text-4xl text-white'>Colleges we collaborate with</h2>
            <div className="flex justify-center">
              <img src={kraven} className="w-xl h-50 rounded-xl mt-15 mb-25 mx-15"/>
              <img src={kraven} className="w-xl h-50 rounded-xl mt-15 mb-25 mx-15"/>
              <img src={kraven} className="w-xl h-50 rounded-xl mt-15 mb-25 mx-15"/>              
            </div>
          </div>               
        </div>

        <div className='flex flex-col items-center justify-center text-4xl mt-25 mb-25 outline outline-2 outline-offset-2 rounded-full'>
          <h2 className='text-5xl text-bold'>About us</h2>
          <p >We are a team of students and professionals working <br/> together to provide the best courses at the comfort of your home. <br/> If you have any queries, feel free to contact us.</p>
        </div>    

        <footer>
          <div class = "bg-black flex flex-col items-center justify-center rounded-xl mt-15"> 
               <div className="flex justify-between items-center">
                <a href="" target="_blank" rel="noreferrer">
                  <p className=" text-white underline text-2xl mx-25">About us</p>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <p className="block text-white underline mx-25 text-2xl">connect with us</p>
                </a>            
                <p className="text-white mx-35 text-2xl underline">email : mocktest@gmail.com</p>
                <p className="text-white mx-35 text-2xl underline">Phone : 123456789</p>
            
            </div>
            <p className="text-white mt-12 text-3xl"> Copyright@2025 || All rights reserved</p>
            </div>
        </footer>
      </div>
  )
}

export default App