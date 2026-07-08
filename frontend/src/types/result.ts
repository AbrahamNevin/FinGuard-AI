export interface FeatureImpact {
    feature: string;
    value: number;
}

export interface PredictionResult {
    prediction: number;
    probability_default: number;
    probability_non_default: number;
}

export interface AIResult {
    prediction: PredictionResult;
    explanation: string;
    top_positive_features: FeatureImpact[];
    top_negative_features: FeatureImpact[];
}