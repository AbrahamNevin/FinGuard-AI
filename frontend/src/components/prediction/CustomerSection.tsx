"use client";

import { UseFormReturn } from "react-hook-form";

import {

    CustomerForm,

} from "@/lib/validation";

import FormField from "@/components/common/FormField";

interface Props {

    form: UseFormReturn<CustomerForm>;

}

export default function CustomerSection({

    form,

}: Props) {

    return (

        <div className="grid gap-6 md:grid-cols-2">

            <FormField

                label="Age"

                placeholder="Enter age"

                type="number"

                registration={form.register("AGE", {

                    valueAsNumber: true,

                })}

                error={form.formState.errors.AGE?.message}

            />

            <FormField

                label="Credit Limit"

                placeholder="Enter credit limit"

                type="number"

                registration={form.register("LIMIT_BAL", {

                    valueAsNumber: true,

                })}

                error={form.formState.errors.LIMIT_BAL?.message}

            />

        </div>

    );

}