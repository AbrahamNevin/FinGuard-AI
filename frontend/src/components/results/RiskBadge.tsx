interface Props {
    probability: number;
}

export default function RiskBadge({
    probability,
}: Props) {

    let label = "Low Risk";
    let color = "bg-green-500";

    if (probability >= 0.70) {
        label = "High Risk";
        color = "bg-red-500";
    } else if (probability >= 0.40) {
        label = "Medium Risk";
        color = "bg-yellow-500";
    }

    return (
        <div
            className={`${color} text-white rounded-lg px-6 py-3 text-center font-semibold text-lg`}
        >
            {label}
        </div>
    );
}