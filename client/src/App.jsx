import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FormPage } from "./pages/FormPage"
import { Result } from "./pages/Result"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App