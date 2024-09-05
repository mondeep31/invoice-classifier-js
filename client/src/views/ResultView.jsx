import DocumentViewer from "../components/DocumentViewer"
import { ScoreDisplayer } from "../components/ScoreDisplayer"
import { useLocation } from "react-router-dom"

export const Result = () => {

    const location = useLocation();
    const { similarityScore } = location.state || { similarityScore: null }
    return <>
        <div className="bg-slate-300 h-screen flex justify-center p-20">

            <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                <div className="text-center mb-4">
                    <ScoreDisplayer />
                </div>
                <div className="h-[80vh]">
                    <DocumentViewer />
                </div>


            </div>
        </div>
    </>
} 