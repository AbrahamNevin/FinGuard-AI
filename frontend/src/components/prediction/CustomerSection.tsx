import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CustomerSection() {
    return (
        <Card>

            <CardHeader>

                <CardTitle>

                    Customer Information

                </CardTitle>

            </CardHeader>

            <CardContent className="grid gap-6 md:grid-cols-2">

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Age

                    </label>

                    <Input placeholder="Enter customer age" />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-medium">

                        Gender

                    </label>

                    <Input placeholder="Male / Female" />

                </div>

            </CardContent>

        </Card>
    );
}