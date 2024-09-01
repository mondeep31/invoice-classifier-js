import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FormPage } from "./views/SimilarityCheckerView"
import { Result } from "./views/ResultView"
import UploadDoc from "./views/UploadToDatabaseView";


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