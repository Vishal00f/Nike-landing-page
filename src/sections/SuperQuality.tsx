
import { shoe8 } from "../assets/images"
import Button from "../components/Button"


function SuperQuality() {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          We Provide You 
          <span className="text-gray-500">  Super </span>
          <span className="text-gray-500">Quality </span>
          Shoes
          <br />
          <span className="text-gray-500 inline-block mt-3" > Nike</span> Shoes  
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Nike doesn't just offer iconic style, they elevate it with premium comfort and lasting quality. From plush cushioning for all-day wear to innovative technologies that enhance performance, Nike shoes are crafted with the athlete in mind.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
        <Button >View Details</Button>
        </div>
        
      </div>
      <div className="flex-1 flex-justify-center items-center">
        <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality