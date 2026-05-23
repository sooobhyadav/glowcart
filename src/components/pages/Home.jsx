import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Home.css";
import Btn from "../common/Button";
import { products } from "../../data/products"; // Importing products data from the products file 4 itmes
function Home() {
  return (
    <>
      <section>
        <h1>Explore trendy makeup essentials and beauty products designed for every look and occasion.</h1>
        <p> Explore trendy makeup essentials and beauty products designed for every look and occasion.</p>
        <Btn value={"Read More"} color="#111827"/>
      </section>

      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-card">
          {
          products.map((obj,index)=> <ProductsItem data={obj}/>)
          }
          
          
        </div>
      </section>
    </>
  );
}

export default Home;

function ProductsItem({data}) {

  return (
    <div className="products-item">
      <img src={data.thumbnail} alt={data.title} />
      <h3>{data.title}</h3>
      <p>
        {data.description}
      </p>
      <Btn value={"View Details"} color="blue" />
    </div>
  );
}
