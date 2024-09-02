import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Result } from "./views/ResultView"

import UploadToDatabaseView from "./views/UploadToDatabaseView";
import SimilarityCheckerView from "./views/SimilarityCheckerView"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/uploadtodatabase" element={<UploadToDatabaseView />} />
        <Route path="/" element={<SimilarityCheckerView />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App