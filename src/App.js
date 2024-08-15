import {Route, Routes} from "react-router-dom";
import {Home} from "./component/Home";
import {List} from "./component/List";
import {Create} from "./component/Create";
import {Update} from "./component/Update";

function App() {
    return (
        <>
            <Routes>
                <Route path={'products'} element={<Home/>}>
                    <Route path={'list'} element={<List/>}/>
                    <Route path={'create'} element={<Create/>}/>
                    <Route path={'update/:id'} element={<Update/>}/>

                </Route>
            </Routes>
        </>
    );
}

export default App;
