import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { ShieldCheck } from "lucide-react";

export default function QuickActionCard() {

    return (

        <Card>

            <CardHeader>

                <CardTitle className="flex items-center gap-3">

                    <ShieldCheck />

                    New Credit Assessment

                </CardTitle>

            </CardHeader>

            <CardContent>

                <p className="text-slate-600">

                    Analyse a customer's probability
                    of loan default.

                </p>

                <Button className="mt-6">

                    Start Assessment

                </Button>

            </CardContent>

        </Card>

    );

}