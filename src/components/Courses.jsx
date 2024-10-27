import React from 'react'
import CourseCard from './CourseCard'
import web from "../assets/image/web-dev.svg"
import appdev from "../assets/image/App-dev.svg"
import digital from "../assets/image/digital.svg"
import graphic from "../assets/image/graphic.svg"

function Courses() {
  return (
    <div className='md:px-13 md:py-13 pt-20 text-center'  id='courses'>
  <h1 className='text-2xl md:text-4xl font-bold h1 mb-5'>Our <span className='text-brightGreen'>Courses</span></h1>
  <div className='courses flex justify-center'>
    <CourseCard url={web} heading="Web Development"/>
    <CourseCard url={appdev} heading="App Development" />
    <CourseCard url={graphic} heading="Graphic Designer" />
    <CourseCard url={digital} heading="Digital Marketing" />
  </div>
</div>

  )
}

export default Courses
