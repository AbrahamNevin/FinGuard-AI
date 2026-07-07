const BASE_URL = "http://127.0.0.1:8000";

export async function predictRisk(data: any) {
    const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            customer: data,
        }),
    });

    if (!response.ok) {
        throw new Error("Prediction failed");
    }

    return response.json();
}

export async function explainPrediction(data: any) {
    const response = await fetch(`${BASE_URL}/explain`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            customer: data,
        }),
    });

    if (!response.ok) {
        throw new Error("Explanation failed");
    }

    return response.json();
}