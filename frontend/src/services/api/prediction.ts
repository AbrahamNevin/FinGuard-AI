import { api } from "./client";
import { CustomerData } from "@/types/customer";

export async function predictRisk(
    customer: CustomerData
) {
    const response = await api.post(
        "/predict",
        customer
    );

    return response.data;
}