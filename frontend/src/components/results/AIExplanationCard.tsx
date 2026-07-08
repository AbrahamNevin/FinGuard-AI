interface Props {
    explanation: string;
}

export default function AIExplanationCard({
    explanation,
}: Props) {

    return (

        <div className="rounded-xl border p-6 shadow">

            <h3 className="text-xl font-semibold mb-4">

                AI Explanation

            </h3>

            <p className="leading-8 whitespace-pre-wrap">

                {explanation}

            </p>

        </div>

    );

}