import "./App.css"
import {Outlet} from "react-router"
import Navbar from "./Components/Navbar/Navbar.tsx";

function App() {

    return (
        <>
            <div className="flex justify-center">
                <Navbar/>
            </div>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </>
    )
}

export default App
