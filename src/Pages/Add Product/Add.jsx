

const Add = () => {
    const handleInput=(e)=>{
        e.preventDefault();

        const form = e.target;
        const name= form.name.value;
        const brand= form.brand.value;
        const type= form.type.value;
        const price = form.price.value;

        const productData = {
            name,
            brand,
            type,
            price,
        }
        console.log(productData);

    }
    return (
        <div className="w-1/5 mx-auto border-2 border-black p-10">
            <form className="space-y-5" action="" onSubmit={handleInput}>
                <input className="border border-black px-3 py-1" type="text" name="name" placeholder="name"/> <br />
                <input className="border border-black px-3 py-1" type="text" name="brand" placeholder="brand"/> <br />
                <input className="border border-black px-3 py-1"type="text" name="type" placeholder="type"/> <br />
                <input className="border border-black px-3 py-1" type="number" name="price" placeholder="price"/> <br />

                <button type="submit" className="px-3 py-2 text-white bg-black rounded">Add Product</button>
            </form>
        </div>
    );
};

export default Add;