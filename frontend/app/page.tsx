import DashboardLayout from "@/components/layout/DashboardLayout";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import QuickActionCard from "@/components/dashboard/QuickActionCard";
import StatCard from "@/components/dashboard/StatCard";

export default function HomePage() {

  return (

    <DashboardLayout>

      <div className="space-y-8">

        <WelcomeCard />

        <QuickActionCard />

        <div className="grid gap-6 lg:grid-cols-3">

          <StatCard
            title="Total Assessments"
            value="0"
          />

          <StatCard
            title="High Risk Cases"
            value="0"
          />

          <StatCard
            title="Model Accuracy"
            value="81%"
          />

        </div>

      </div>

    </DashboardLayout>

  );

}