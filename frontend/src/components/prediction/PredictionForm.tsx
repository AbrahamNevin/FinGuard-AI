"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BillAmountSection from "./BillAmountSection";

import {
    customerSchema,
    CustomerForm,
} from "@/lib/validation";

import CustomerSection from "./CustomerSection";
import PaymentHistorySection from "./PaymentHistorySection";

import { predictRisk } from "@/services/api/api";

import ResultCard from "@/components/results/ResultCard";

export default function PredictionForm() {

    const form = useForm<CustomerForm>({
        resolver: zodResolver(customerSchema),

        defaultValues: {
            AGE: 25,
            SEX: 1,
            LIMIT_BAL: 100000,
            EDUCATION: 2,
            MARRIAGE: 1,

            PAY_0: 0,
            PAY_2: 0,
            PAY_3: 0,
            PAY_4: 0,
            PAY_5: 0,
            PAY_6: 0,

            BILL_AMT1: 5000,
            BILL_AMT2: 5000,
            BILL_AMT3: 5000,
            BILL_AMT4: 5000,
            BILL_AMT5: 5000,
            BILL_AMT6: 5000,
        },
    });

    const [result, setResult] = useState("");

    async function onSubmit(data: CustomerForm) {

        try {

            const response = await predictRisk(data);

            console.log("Backend Response:");
            console.log(response);

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

            <CustomerSection
                form={form}
            />

            <PaymentHistorySection
                form={form}
            />

            <BillAmountSection
                form={form}
            />

            <button
                type="submit"
                className="
                    rounded-lg
                    bg-slate-900
                    px-6
                    py-3
                    text-white
                    hover:bg-slate-800
                "
            >
                Predict Risk
            </button>

            {result && (
                <ResultCard
                    response={result}
                />
            )}

        </form>

    );

}