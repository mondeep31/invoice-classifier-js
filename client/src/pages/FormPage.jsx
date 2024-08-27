import { Header } from "../components/Header"
import { InputForm } from "../components/InputForm"
import { Subheader } from "../components/Subheader"

export const FormPage = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Header label={"Upload a pdf"} />
                    <Subheader label={"Upload a pdf to find the most similar pdf"} />
                    <InputForm />
                </div>

            </div>
        </div>
    )
}