export interface PredictionResponse {

    success: boolean;

    prediction: number;

    probability_default: number;

    probability_non_default: number;

}

export interface FeatureImpact {

    feature: string;

    impact: number;

}

export interface ExplanationResponse {

    positive_features: FeatureImpact[];

    negative_features: FeatureImpact[];

}