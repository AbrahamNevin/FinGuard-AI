import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import {

    UseFormRegisterReturn,

} from "react-hook-form";

interface Props {

    label: string;

    placeholder?: string;

    type?: string;

    registration: UseFormRegisterReturn;

    error?: string;

}

export default function FormField({

    label,

    placeholder,

    type = "text",

    registration,

    error,

}: Props) {

    return (

        <div className="space-y-2">

            <Label>

                {label}

            </Label>

            <Input

                type={type}

                placeholder={placeholder}

                {...registration}

            />

            {error && (

                <p className="text-sm text-red-500">

                    {error}

                </p>

            )}

        </div>

    );

}