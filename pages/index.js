import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import ProductItem from "@/components/ProductItem";
import ShoppingBasket from "@/components/ShoppingBasket";
import Product from "@/models/Product";
import db from "@/utils/db";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default function Home({products}) {
  return (
    <>
      <div>
        <ToastContainer position="top-center" limit={1}/>
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <NavigationBar />
          </div>
        </div>

        <main className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />

            {/* products card items */}
            <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-5xl bg-gradient-to-bl from-Takealotblue to-ElectricPurple text-transparent bg-clip-text mb-12">
              Featured Products
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductItem product={product} key={product.slug} />
              ))}
            </div>

            <ShoppingBasket/>
         
          </div>
        </main>
      </div>
    </>
  );
}


export async function getServerSideProps(){
  await db.connect();
  const products = await Product.find().lean();
  return {
    props:{
      products: products.map(db.convertDocToObj)
    }
  }


}
