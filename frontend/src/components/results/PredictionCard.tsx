interface Props {

    prediction: number;

    probabilityDefault: number;

    probabilityNonDefault: number;

}

export default function PredictionCard({

    prediction,

    probabilityDefault,

    probabilityNonDefault,

}: Props) {

    return (

        <div className="rounded-xl border bg-white p-6 shadow">

            <h2 className="mb-6 text-xl font-bold">

                Prediction

            </h2>

            <div className="space-y-3">

                <p>

                    <span className="font-semibold">

                        Result:

                    </span>{" "}

                    {prediction === 1
                        ? "Likely to Default"
                        : "Not Likely to Default"}

                </p>

                <p>

                    <span className="font-semibold">

                        Default Probability:

                    </span>{" "}

                    {(probabilityDefault * 100).toFixed(2)}%

                </p>

                <p>

                    <span className="font-semibold">

                        Non Default Probability:

                    </span>{" "}

                    {(probabilityNonDefault * 100).toFixed(2)}%

                </p>

            </div>

        </div>

    );

}