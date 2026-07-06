"use client";

interface Props {
    response: string;
}

export default function ResultCard({
    response,
}: Props) {

    return (

        <div className="mt-10 rounded-xl border bg-white p-6 shadow">

            <h2 className="mb-4 text-2xl font-bold">
                Prediction Result
            </h2>

            <div className="whitespace-pre-wrap text-gray-700 leading-7">

                {response}

            </div>

        </div>

    );

}