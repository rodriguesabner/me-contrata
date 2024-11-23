import {Route, Routes} from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import About from "../pages/About";

const RouteComponent = () => {
    return (
        <Routes>
            <Route element={<Root/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
    );
};

export default RouteComponent;
