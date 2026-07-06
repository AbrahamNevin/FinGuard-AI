"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    customerSchema,
    CustomerForm,
} from "@/lib/validation";

import CustomerSection from "./CustomerSection";
import ResultCard from "@/components/results/ResultCard";
import { predictRisk } from "@/services/api/api";

export default function PredictionForm() {

    const form = useForm<CustomerForm>({
        resolver: zodResolver(customerSchema),

        defaultValues: {
            AGE: 25,
            SEX: 1,
            LIMIT_BAL: 100000,
            EDUCATION: 2,
            MARRIAGE: 1,
        },
    });

    const [result, setResult] = useState("");

    async function onSubmit(data: CustomerForm) {

        try {

            const response = await predictRisk(data);

            console.log("Backend Response:");
            console.log(response);

            // Adjust this depending on your backend response
            setResult(response.response);

        } catch (error) {

            console.error("Prediction Error:", error);

        }

    }

    return (

        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
        >

            <CustomerSection form={form} />

            <button
                type="submit"
                className="
                    rounded-lg
                    bg-slate-900
                    px-6
                    py-3
                    text-white
                    hover:bg-slate-800
                    transition
                "
            >
                Predict Risk
            </button>

            {result && (
                <ResultCard response={result} />
            )}

        </form>

    );
}