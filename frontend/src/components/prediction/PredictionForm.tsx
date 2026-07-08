"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    customerSchema,
    CustomerForm,
} from "@/lib/validation";

import CustomerSection from "./CustomerSection";
import PaymentHistorySection from "./PaymentHistorySection";
import BillAmountSection from "./BillAmountSection";
import PaymentAmountSection from "./PaymentAmountSection";

import {
    predictRisk,
    explainPrediction,
} from "@/services/api/api";

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

            PAY_AMT1: 1000,
            PAY_AMT2: 1000,
            PAY_AMT3: 1000,
            PAY_AMT4: 1000,
            PAY_AMT5: 1000,
            PAY_AMT6: 1000,
        },
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    async function onSubmit(data: CustomerForm) {

        setLoading(true);

        try {

            const prediction = await predictRisk(data);

            const explain = await explainPrediction(data);

            setResult({

                prediction,

                explanation: explain.explanation,

            });

        } catch (error) {

            console.error(error);

            alert("Prediction failed.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
        >

            <CustomerSection form={form} />

            <PaymentHistorySection form={form} />

            <BillAmountSection form={form} />

            <PaymentAmountSection form={form} />

            <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 disabled:opacity-50"
            >

                {loading ? "Predicting..." : "Predict Credit Risk"}

            </button>

            {result && (

                <ResultCard result={result} />

            )}

        </form>

    );

}