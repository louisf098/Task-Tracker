import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <div className="outside-container">
            <Navbar />
            <div className="container">
                <Header />
            </div>
        </div>
    );
}

export default App;
