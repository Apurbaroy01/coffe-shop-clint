import { useEffect, useState } from "react";
import logo from '../../assets/icons/logo1.png'



const Nav = () => {
    const [oders, setOders] = useState([])
    useEffect(() => {
        fetch('https://cofee-store-server-neon.vercel.app/oders')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setOders(data)
            })
    }, []);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <div className="flex justify-center items-center">
                    <img className="w-10 h-auto" src={logo} alt="" />
                    <h2 className=" text-2xl font-bold">Coffee Shop</h2>
                </div>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">{oders.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-110 shadow">

                        <div className="card-body space-y-6 p-6">
                            {oders.map((oder) => (
                                <div
                                    key={oder._id}
                                    className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
                                >
                                    {/* Image */}
                                    <img
                                        src={oder.photo}
                                        alt="Coffee"
                                        className="w-28 h-28 object-cover rounded-xl border-4 border-amber-300 mr-0 md:mr-6 mb-4 md:mb-0"
                                    />

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 w-full">
                                        <h2 className="text-xl font-bold text-amber-800 mb-1">{oder.coffeeName}</h2>
                                        <p className="text-gray-600">Price: ${oder.price}</p>

                                        {/* Status Badge */}
                                        <span
                                            className={`mt-2 text-sm font-medium px-3 py-1 rounded-full w-fit ${oder.status === 'Delivered'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {oder.status || 'Pending'}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-4 md:mt-0 flex flex-col gap-2 md:items-end">
                                        <button
                                            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full transition-all duration-200 shadow-md"
                                        >
                                            Order Track
                                        </button>

                                        <button
                                            onClick={() => {
                                                if (confirm("Are you sure you want to cancel this order?")) {
                                                    console.log("Cancelled order:", oder._id);
                                                    // You can trigger delete logic here
                                                }
                                            }}
                                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition-all duration-200 shadow-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;