

import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

function SpecialOffers() {
  return (
<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
  <div className="flex-1">
    <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
  </div>
<div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
         
          <span className="text-gray-500">Special </span>
          Offer 
         
          <br />
          <span className="text-gray-500 inline-block mt-3" > Nike</span> Shoes  
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Up your sneaker game for less! Nike offers sales on past-season styles, student and military discounts, and member-exclusive coupons.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our Members score big! Don't forget to use your Nike membership points for exclusive discounts on select footwear and apparel</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button iconUrl={arrowRight} >Shop now</Button>
        <Button classnames="bg-white border-slate-gray text-slate-gray " >Learn more</Button>
        </div>
        
      </div>
</section>
    
      
      
    
  )
}



export default SpecialOffers