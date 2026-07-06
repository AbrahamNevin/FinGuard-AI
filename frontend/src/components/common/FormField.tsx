import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
    label: string;
    placeholder?: string;
    type?: string;
}

export default function FormField({
    label,
    placeholder,
    type = "text",
}: Props) {
    return (
        <div className="space-y-2">
            <Label>{label}</Label>

            <Input
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}