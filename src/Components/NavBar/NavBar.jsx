import { FaBell } from "react-icons/fa6";
import Nav from "./Nav";
import headerPhoto from "../../assets/icons/header.png"
import photo1 from "../../assets/icons/1.png"
import photo2 from "../../assets/icons/2.png"
import photo3 from "../../assets/icons/3.png"
import photo4 from "../../assets/icons/4.png"

const NavBar = () => {
    return (
        <div className="w-full">
            <div>
                <Nav></Nav>


                {/* <div className=" bg-amber-700 flex justify-between px-5">
                    <div>

                    </div>
                    <div className="flex items-center justify-center">
                        <img className="w-10 h-auto" src="/src/assets/logo1.png" alt="" />
                        <h2 className=" text-2xl text-white font-bold">Coffee Shop</h2>
                    </div>
                    <div className="text-white text-3xl flex items-center">
                        <FaBell />
                    </div>

                </div> */}
                <div
                    className="hero h-90 w-full"
                    style={{
                        backgroundImage:
                            `url(${headerPhoto})`,
                    }}
                >
                    <div className="hero-overlay justify-end"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-full ">
                            <h1 className="mb-5 text-4xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-5">
                                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                                <br /> Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center text-center p-4 bg-gray-200 gap-10">
                    <div>
                        <div className="flex justify-center">
                            <img src={photo1} alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div >
                        <div className="flex justify-center">
                            <img src={photo2} alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div >
                        <div className="flex justify-center">
                            <img src={photo3} alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div >
                        <div className="flex justify-center">
                            <img src={photo4} alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;