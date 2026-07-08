import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function WelcomeCard() {
    return (
        <Card>

            <CardHeader>

                <CardTitle className="text-3xl">

                    Welcome Back 👋

                </CardTitle>

            </CardHeader>

            <CardContent>

                <p className="text-slate-600 leading-7">

                    FinGuard AI combines Machine Learning,
                    Explainable AI and Large Language Models
                    to assess customer credit risk and generate
                    transparent predictions.

                </p>

            </CardContent>

        </Card>
    );
}