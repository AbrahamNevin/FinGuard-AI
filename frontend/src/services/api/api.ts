const BASE_URL = "http://127.0.0.1:8000";

export async function predictRisk(data: any) {

    const response = await fetch(`${BASE_URL}/chat`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({

            message: "Predict credit risk",

            customer: data,

        }),

    });

    if (!response.ok) {

        throw new Error("Prediction failed");

    }

    return response.json();

}