import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"


function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-gray-500">
          Popular</span >  Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Nike shoes offer a range of quality, with high-end models featuring premium materials and advanced technologies for top performance and durability</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>
          <PopularProductCard key={product.name} {...product}/>
          )}
      </div>
    </section>
  )
}

export default PopularProducts