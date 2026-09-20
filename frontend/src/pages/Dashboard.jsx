import {useState, useEffect} from "react";
import {getProducts} from "/src/services/api.js";

function Dashboard(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    getProducts()
    .then((res) => setProducts(res.data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
  }, []);

  if(loading) return <p>Loading</p>

  return(
    <div>
      <h1>Dashboard</h1>
      <ul>
        {products.map((product) =>(
          <li key={products.id}>{products.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard;