interface Props {
    response: string;
}

export default function ResultCard({ response }: Props) {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">
                AI Credit Risk Report
            </h2>

            <pre className="whitespace-pre-wrap text-sm leading-7">
                {response}
            </pre>
        </div>
    );
}