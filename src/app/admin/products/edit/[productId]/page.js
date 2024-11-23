import Product from "@/models/Product";
import AddProductsPage from "@/template/AddProductsPage";
import connectDB from "@/utils/connectDB";

async function Edit({params : {productId}}) {

  // await connectDB();
  // const product  = await Product.findOne({_id : productId});

  // if(!product) return <h3>مشکلی پیش  آمده است. لطفا دوباره امتحان کنید.</h3>

  return <AddProductsPage 
  data={productId} 
  // data={JSON.parse(JSON.stringify(product))} 
  />
}

export default Edit;
