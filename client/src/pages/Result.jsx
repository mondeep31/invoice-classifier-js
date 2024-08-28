import DocumentViewer from "../components/DocumentViewer"
import { ScoreDisplayer } from "../components/ScoreDisplayer"

export const Result = () => {
    return <>
        <div className="bg-slate-300 h-screen flex justify-center p-20">

            <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                <div className="text-center mb-4">
                    <ScoreDisplayer />
                </div>
                <div className="h-[80vh]"> {/* Adjust the height as needed */}
                    <DocumentViewer />
                </div>


            </div>
        </div>
    </>
} 