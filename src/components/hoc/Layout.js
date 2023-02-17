import NavBar from "../nav.Bar/NavBar";
import {Outlet} from "react-router-dom";


export default function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <h2>footer</h2>
        </>

    )
}