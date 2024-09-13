import { BrowserRouter, Route, Routes } from "react-router-dom";


import ResultViewer from "./views/ResultView"

import UploadToDatabaseView from "./views/UploadToDatabaseView";
import SimilarityCheckerView from "./views/SimilarityCheckerView"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/uploadtodatabase" element={<UploadToDatabaseView />} />
        <Route path="/" element={<SimilarityCheckerView />} />
        <Route path="/result" element={<ResultViewer />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App