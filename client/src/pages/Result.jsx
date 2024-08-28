import DocumentViewer from "../components/DocumentViewer"
import { ScoreDisplayer } from "../components/ScoreDisplayer"



export const Result = () => {
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center w-full, max-w-4xl">
                <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                    <ScoreDisplayer />
                    <DocumentViewer />
                </div>

            </div>
        </div>
    </>
} 