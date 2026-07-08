"use client";

import { UseFormReturn } from "react-hook-form";

import { CustomerForm } from "@/lib/validation";

import FormField from "@/components/common/FormField";

interface Props {
    form: UseFormReturn<CustomerForm>;
}

export default function PaymentHistorySection({
    form,
}: Props) {

    return (

        <div className="space-y-6">

            <h2 className="text-xl font-semibold">
                Payment History
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

                <FormField
                    label="PAY_0"
                    type="number"
                    registration={form.register("PAY_0", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_0?.message}
                />

                <FormField
                    label="PAY_2"
                    type="number"
                    registration={form.register("PAY_2", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_2?.message}
                />

                <FormField
                    label="PAY_3"
                    type="number"
                    registration={form.register("PAY_3", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_3?.message}
                />

                <FormField
                    label="PAY_4"
                    type="number"
                    registration={form.register("PAY_4", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_4?.message}
                />

                <FormField
                    label="PAY_5"
                    type="number"
                    registration={form.register("PAY_5", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_5?.message}
                />

                <FormField
                    label="PAY_6"
                    type="number"
                    registration={form.register("PAY_6", {
                        valueAsNumber: true,
                    })}
                    error={form.formState.errors.PAY_6?.message}
                />

            </div>

        </div>

    );

}