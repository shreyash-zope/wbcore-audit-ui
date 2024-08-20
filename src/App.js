import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Logs from "./components/Logs";
import Charts from "./components/Charts";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/logs" element={<Logs />}></Route>
            <Route path="/charts" element={<Charts />}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
