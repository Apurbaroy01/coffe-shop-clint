

const NavBar = () => {
    return (
        <div className="w-full">
            <div>
                <div className="flex items-center justify-center bg-amber-700">
                    <img className="w-10 h-auto" src="/src/assets/logo1.png" alt="" />
                    <h2 className=" text-2xl text-white font-bold">Coffee Shop</h2>
                </div>
                <div
                    className="hero h-90 w-full"
                    style={{
                        backgroundImage:
                            "url(src/assets/header.png)",
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
                            <img src="/src/assets/icons/1.png" alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div >
                        <div className="flex justify-center">
                            <img src="/src/assets/icons/2.png" alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div >
                        <div className="flex justify-center">
                            <img src="/src/assets/icons/3.png" alt="" />
                        </div>
                        <h2>Awesome Aroma</h2>
                        <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div >
                        <div className="flex justify-center">
                            <img src="/src/assets/icons/4.png" alt="" />
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