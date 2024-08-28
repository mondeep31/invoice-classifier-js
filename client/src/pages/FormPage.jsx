import React from "react"
import { Header } from "../components/Header"

import { Subheader } from "../components/Subheader"
import InputForm from "../components/InputForm"

export const FormPage = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center w-full, max-w-4xl">
                <div className="rounded-lg bg-white w-full text-center p-2 h-max px-4">
                    <Header label={"Upload a pdf"} />
                    <Subheader label={"Upload a pdf to find the most similar pdf"} />
                    <InputForm />
                </div>

            </div>
        </div>
    )
}