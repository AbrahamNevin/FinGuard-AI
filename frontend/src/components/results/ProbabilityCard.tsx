interface Props {

    probability: number;

}

export default function ProbabilityCard({

    probability,

}: Props) {

    return (

        <div className="rounded-xl border bg-white p-6 shadow">

            <h2 className="mb-4 text-xl font-bold">

                Risk Score

            </h2>

            <div className="text-5xl font-bold">

                {(probability * 100).toFixed(2)}%

            </div>

            <p className="mt-2 text-gray-600">

                Estimated probability of default.

            </p>

        </div>

    );

}