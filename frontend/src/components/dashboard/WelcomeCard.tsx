export default function WelcomeCard() {
    return (
        <div className="rounded-xl border bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-slate-900">
                Welcome Back 👋
            </h1>

            <p className="mt-3 text-slate-600 leading-7">
                FinGuard AI is an AI-powered credit risk assessment platform
                that combines Machine Learning, Explainable AI and Large
                Language Models to assist financial decision making.
            </p>
        </div>
    );
}