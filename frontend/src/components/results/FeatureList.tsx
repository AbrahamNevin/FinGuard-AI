interface Feature {

    feature: string;

    display_name: string;

    description: string;

    impact: number;

}

interface Props {

    title: string;

    features: Feature[];

}

export default function FeatureList({

    title,

    features,

}: Props) {

    return (

        <div className="rounded-xl border bg-white p-6 shadow">

            <h2 className="mb-4 text-xl font-bold">

                {title}

            </h2>

            <div className="space-y-4">

                {features.map((feature) => (

                    <div
                        key={feature.feature}
                        className="border-b pb-3 last:border-none"
                    >

                        <p className="font-semibold">

                            {feature.display_name}

                        </p>

                        <p className="text-sm text-gray-600">

                            {feature.description}

                        </p>

                        <p className="text-sm font-medium">

                            Impact: {feature.impact.toFixed(4)}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}