import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

export default function DashboardLayout({

    children

}: Props) {

    return (

        <div className="flex min-h-screen">

            <Sidebar />

            <main className="flex-1 bg-slate-100">

                <Header />

                <div className="p-8">

                    {children}

                </div>

            </main>

        </div>

    );

}