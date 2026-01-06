import React from 'react'
import Testimonials_Slider from '../components/Testimonials_Slider'


const Testimonials = () => {
  return (
    <section className="mx-auto my-40 w-[80%] text-center">
          <div>
            <h3 className="text-primary font-bold">Practice Advice</h3>
    
            <h1 className="my-6 text-3xl sm:text-4xl font-bold">
              Packages that are aprodable
            </h1>
    
            <p className="mb-20 text-sm sm:text-base">
              Problems trying to resolve the conflict between <br className='hidden xl:block'/>
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
    
          <div className="mx-auto  sm:max-w-[82%]">
            <Testimonials_Slider/>
          </div>
        </section>
  )
}

export default Testimonials