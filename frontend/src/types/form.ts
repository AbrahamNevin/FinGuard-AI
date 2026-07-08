export type FieldType =
    | "text"
    | "number"
    | "select";

export interface FormField {

    name: string;

    label: string;

    type: FieldType;

    placeholder?: string;

    options?: {

        label: string;

        value: number;

    }[];

}