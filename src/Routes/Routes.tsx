import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx"
import Home from "../Pages/Home/Home.tsx";
import FindLobbyScreen from "../Pages/Lobby/FindLobbyScreen.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/findlobby", element: <FindLobbyScreen/>}
        ]
    }
])
