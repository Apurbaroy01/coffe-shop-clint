import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BuyCoffee = () => {
    const coffeeLoder = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const coffe = { coffeeName, photo, price, name, address, phone, email }

        console.log("✅ Order Submitted:", coffe);

        fetch('http://localhost:5000/oders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                Swal.fire({
                    title: 'Done',
                    text: 'Coffee oder Successfull',
                    icon: 'success',
                    confirmButtonText: 'Back'
                })

            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-amber-100 to-yellow-50 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* Left: Coffee Image */}
                <div className="bg-amber-50 flex items-center justify-center p-8">
                    <img
                        src={coffeeLoder.photo}
                        alt={coffeeLoder.coffeeName}
                        className="rounded-xl shadow-lg w-72 hover:scale-150 transition-transform duration-300"
                    />
                </div>

                {/* Right: Info & Form */}
                <div className="p-8 space-y-4">
                    <h1 className="text-4xl font-extrabold text-amber-800 mb-2">
                        {coffeeLoder.coffeeName}
                    </h1>
                    <p className="text-lg text-gray-700 font-semibold">Price: <span className="text-green-600">${coffeeLoder.price}</span></p>
                    <p className="text-gray-600"><span className="font-medium">Supplier:</span> {coffeeLoder.supplierName}</p>
                    <p className="text-gray-600"><span className="font-medium">Details:</span> {coffeeLoder.details}</p>


                    <hr className="my-4 border-amber-200" />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Hidden fields */}
                        <input type="hidden" name="coffeeName" value={coffeeLoder.coffeeName} />
                        <input type="hidden" name="photo" value={coffeeLoder.photo} />
                        <input type="hidden" name="price" value={coffeeLoder.price} />

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" className="input input-bordered w-full mt-1" placeholder="Enter your full name" required />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input type="text" name="address" className="input input-bordered w-full mt-1" placeholder="Shipping address" required />
                        </div>

                        {/* phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text" name="phone" className="input input-bordered w-full mt-1" placeholder="Enter your phone number" required />
                        </div>
                        {/* email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="text" name="email" className="input input-bordered w-full mt-1" placeholder="Enter your email" required />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold"
                            >
                                ☕ Confirm Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyCoffee;
