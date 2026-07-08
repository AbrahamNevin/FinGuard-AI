"use client";

import ResultDashboard from "./ResultDashboard";

interface Props {

    result: any;

}

export default function ResultCard({

    result,

}: Props) {

    return (

        <ResultDashboard

            prediction={result.prediction}

            explanation={result.explanation}

        />

    );

}