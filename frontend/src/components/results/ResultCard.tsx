"use client";

interface Props {

    result: any;

}

export default function ResultCard({

    result,

}: Props) {

    const prediction = result.prediction;
    const explanation = result.explanation;

    return (

        <div className="mt-10 rounded-xl border bg-white p-8 shadow space-y-8">

            <h2 className="text-3xl font-bold">

                Credit Risk Assessment

            </h2>

            {/* Prediction */}

            <div>

                <h3 className="text-xl font-semibold mb-2">

                    Prediction

                </h3>

                <p>

                    Prediction:
                    {" "}
                    <strong>

                        {
                            prediction.prediction === 1
                                ? "Default"
                                : "Non Default"
                        }

                    </strong>

                </p>

                <p>

                    Probability of Default:
                    {" "}
                    <strong>

                        {(
                            prediction.probability_default * 100
                        ).toFixed(2)}%

                    </strong>

                </p>

            </div>

            {/* SHAP */}

            <div>

                <h3 className="text-xl font-semibold mb-2">

                    SHAP Explanation

                </h3>

                <pre className="whitespace-pre-wrap rounded bg-slate-100 p-4 text-sm">

                    {JSON.stringify(
                        explanation,
                        null,
                        2
                    )}

                </pre>

            </div>

        </div>

    );

}