"use client";

import RiskBadge from "./RiskBadge";
import PredictionCard from "./PredictionCard";
import ProbabilityCard from "./ProbabilityCard";
import AIExplanationCard from "./AIExplanationCard";
import FeatureList from "./FeatureList";

interface Props {

    prediction: any;

    explanation: any;

}

export default function ResultDashboard({

    prediction,

    explanation,

}: Props) {

    const probability = prediction.probability_default;

    return (

        <div className="space-y-8 mt-10">

            <RiskBadge
                probability={probability}
            />

            <PredictionCard
                prediction={prediction.prediction}
                probabilityDefault={prediction.probability_default}
                probabilityNonDefault={prediction.probability_non_default}
            />

            <ProbabilityCard
                probability={probability}
            />

            <div className="grid md:grid-cols-2 gap-6">

                <FeatureList
                    title="Top Positive Factors"
                    features={explanation?.top_positive ?? []}
                />

                <FeatureList
                    title="Top Negative Factors"
                    features={explanation?.top_negative ?? []}
                />

            </div>

            <AIExplanationCard
                explanation="LLM explanation coming in Day 10."
            />

        </div>

    );

}