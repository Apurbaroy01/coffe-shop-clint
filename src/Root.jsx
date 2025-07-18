import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";



const Root = () => {
    return (
        <div>
            
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <HomePage></HomePage>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;