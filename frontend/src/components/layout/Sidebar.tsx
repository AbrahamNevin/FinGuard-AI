import {
    LayoutDashboard,
    ShieldCheck,
    MessageCircle,
    History,
    Settings
} from "lucide-react";

const menu = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: ShieldCheck, label: "Prediction" },
    { icon: MessageCircle, label: "AI Assistant" },
    { icon: History, label: "History" },
    { icon: Settings, label: "Settings" }
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen border-r bg-white">
            <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-slate-800">
                    FinGuard AI
                </h1>

                <p className="text-sm text-slate-500">
                    Credit Risk Intelligence
                </p>
            </div>

            <nav className="p-4 space-y-2">

                {menu.map((item) => {

                    const Icon = item.icon;

                    return (

                        <button
                            key={item.label}
                            className="
                                        flex
                                        items-center
                                        gap-3
                                        w-full
                                        rounded-lg
                                        px-4
                                        py-3
                                        bg-slate-100
                                        hover:bg-slate-200
                                        transition  
                                        "
                        >

                            <Icon size={20} />

                            <span>{item.label}</span>

                        </button>

                    );

                })}

            </nav>
        </aside>
    );
}