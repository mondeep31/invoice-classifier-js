import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FormPage } from "./views/SimilarityChecker"
import { Result } from "./views/Result"
import UploadDoc from "./views/UploadDoc";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/upload" element={<UploadDoc />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App