import { ShieldCheck } from "lucide-react";

export default function QuickActionCard() {
    return (
        <div className="rounded-xl border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
                <ShieldCheck className="text-slate-700" />

                <h2 className="text-xl font-semibold">
                    New Credit Assessment
                </h2>
            </div>

            <p className="mt-3 text-slate-600">
                Start analysing a customer's probability of default.
            </p>

            <button className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
                Start Assessment
            </button>
        </div>
    );
}