"use client";

import { UseFormReturn } from "react-hook-form";

import { CustomerForm } from "@/lib/validation";

import FormField from "@/components/common/FormField";

interface Props {
    form: UseFormReturn<CustomerForm>;
}

export default function PaymentAmountSection({
    form,
}: Props) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">
                Previous Payments
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                <FormField
                    label="Payment Amount 1"
                    type="number"
                    registration={form.register("PAY_AMT1", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_AMT1?.message}
                />

                <FormField
                    label="Payment Amount 2"
                    type="number"
                    registration={form.register("PAY_AMT2", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_AMT2?.message}
                />

                <FormField
                    label="Payment Amount 3"
                    type="number"
                    registration={form.register("PAY_AMT3", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_AMT3?.message}
                />

                <FormField
                    label="Payment Amount 4"
                    type="number"
                    registration={form.register("PAY_AMT4", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_AMT4?.message}
                />

                <FormField
                    label="Payment Amount 5"
                    type="number"
                    registration={form.register("PAY_AMT5", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_AMT5?.message}
                />

                <FormField
                    label="Payment Amount 6"
                    type="number"
                    registration={form.register("PAY_AMT6", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_AMT6?.message}
                />

            </div>

        </div>

    );

}