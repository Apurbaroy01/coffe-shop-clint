import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
    const [coffee, setCoffee] = useState([]);
    useEffect(() => {
        fetch('https://cofee-store-server-neon.vercel.app/coffee')
            .then(res => res.json())
            .then(data => {
                setCoffee(data)
                // console.log(data)
            })
    }, []);
    return (
        <div>
            <div className="text-center bg-gray-200 font-bold p-4 pt-10">
                <h2 className="text-3xl ">Our Popular Products</h2>
            </div>
            <div className="bg-gray-200 grid md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
                {
                    coffee.map(coffee =>
                        <div key={coffee._id} className="card bg-base-100 w-70 shadow-2xl">
                            <figure>
                                <img
                                    src={coffee.photo}
                                    alt="Coffee" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{coffee.coffeeName}</h2>
                                <p className="font-semibold">Price: {coffee.price}</p>
                                <Link to={`/buyCoffee/${coffee._id}`}>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default HomePage;