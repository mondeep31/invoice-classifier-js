import DocumentViewer from "../components/DocumentViewer"
import { ScoreDisplayer } from "../components/ScoreDisplayer"

export const Result = () => {
    return <>
        <div className="bg-slate-300 h-screen flex justify-center p-20">
            {/* <div className="flex flex-col justify-center w-full, max-w-4xl"> */}
            <div className="rounded-lg bg-white w-full text-center p-2 h-80vh px-4">
                <div className="text-center mb-4">
                    <ScoreDisplayer />
                </div>
                <div className="h-[70vh]"> {/* Adjust the height as needed */}
                    <DocumentViewer />
                </div>
                {/* </div> */}

            </div>
        </div>
    </>
} 