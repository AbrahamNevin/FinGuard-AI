import {

    Card,

    CardContent

} from "@/components/ui/card";

interface Props {

    title: string;

    value: string;

}

export default function StatCard({

    title,

    value

}: Props) {

    return (

        <Card>

            <CardContent className="p-6">

                <p className="text-sm text-slate-500">

                    {title}

                </p>

                <h2 className="mt-2 text-4xl font-bold">

                    {value}

                </h2>

            </CardContent>

        </Card>

    );

}