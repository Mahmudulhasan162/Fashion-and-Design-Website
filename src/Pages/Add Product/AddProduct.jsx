import { useState } from "react";
import swal from "sweetalert";



const AddProduct = () => {

        const [product, setProduct] = useState({
            name: '',
            brand: '',
            type: '',
            price: '',
            description: '',
            rating: '',
            image: null,
          });
          const [brandOptions] = useState(['Nike', 'Adidas', 'Gucci', 'Zara', 'H&M', "Levi's"]);
          const [typeOptions, setTypeOptions] = useState([]);

          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setProduct({ ...product, [name]: value });

            if (name === 'brand') {
                setProduct({ ...product, [name]: value });
                switch (value) {
                  case 'Nike':
                    setTypeOptions(['Shoes', 'Loafers', 'Sneakers', 'Sandals']);
                    break;
                  case 'Adidas':
                    setTypeOptions(['Running Shoes', 'Basketball Shoes', 'Athletic Apparel']);
                    break;
                  case 'Gucci' :
                    setTypeOptions(['Wallet', 'Watch', 'Belt', 'Bag']);
                    break;
                  case 'Zara' : 
                  setTypeOptions(['Jumpsuits','Shirts','Shoes','Bags']);
                  break;
                  case 'H&M' : 
                  setTypeOptions(['Suits','Shirts','T-shirts','Pants']);
                  break;
                  case "Levi's" : 
                  setTypeOptions(['Jeans','Shirts','T-shirts','Jackets']);
                  break;
                  default:
                    setTypeOptions([]);
                    break;
                }
              } else {
                setProduct({ ...product, [name]: value });
              }
          };
        
        
          const handleSubmit = async (e) => {
            e.preventDefault();
             
            const form= e.target;
            const name= form.name.value;
            const brand= form.brand.value;
            const type= form.type.value;
            const price= form.price.value;
            const description= form.description.value;
            const rating= form.rating.value;
            const photo= form.photo.value;

            const newProduct= {name, brand, type, photo, price, description, rating}
            console.log(newProduct);

            fetch('http://localhost:5000/products',{
              method: "POST",
              headers : {
                "content-type": 'application/json'
              },
              body: JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data);
              if(data.insertedId){
                swal("Product Added", "You have successfully added a new product", "success");
              }
            })

          };
        
        
          return (
        <form onSubmit={handleSubmit} className="w-1/3 space-y-5  mx-auto border-2 border-black p-6">
              
        <input  placeholder="Name" className="border border-black px-3 py-1 w-full" type="text" name="name" onChange={handleInputChange} required /><br />

        <select className="border border-black px-3 py-1 w-full" placeholder="Brand" name="brand" onChange={handleInputChange} required>
          <option value="" disabled>Select a brand</option>
          {brandOptions.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select><br />
        
        <select className="border border-black px-3 py-1 w-full" placeholder="Type" name="type" onChange={handleInputChange} required>
          <option value="" disabled>Select a type</option>
          {typeOptions.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select><br />

        <input  placeholder="Photo URL" className="border border-black px-3 py-1 w-full" type="text" name="photo" onChange={handleInputChange} required /><br />
      
        <input  placeholder="Price" className="border border-black px-3 py-1 w-full" type="number" name="price"  onChange={handleInputChange} required /><br />
    
        <textarea placeholder="Description" className="border border-black px-3 py-1 w-full" name="description" onChange={handleInputChange} required /><br />
        
        <input placeholder="Rating" className="border border-black px-3 py-1 w-full" type="number" name="rating" onChange={handleInputChange} required /><br />
        
              
        <button className="px-3 py-2 text-white bg-black rounded" type="submit">Add Product</button>
            </form>
          );
};

export default AddProduct;