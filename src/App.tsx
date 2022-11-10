import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InsertScreen from "./screens/insert/InsertScreen";
import Layout from "./layout/Layout";
import ViewScreen from "./screens/view/ViewScreen";
import { AppContext, IRegisterData } from "./context/registered";

function App() {
  // let test: IRegisterData[] | null = [
  //   {
  //     name: "string",
  //     age: 12,
  //     profession: "string",
  //     email: "string",
  //     phone: "string",
  //     createdAt: "string",
  //   },
  // ];

  return (
    <AppContext.Provider value={[]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InsertScreen />} />
            <Route path="/insert" element={<InsertScreen />} />
            <Route path="/view" element={<ViewScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
