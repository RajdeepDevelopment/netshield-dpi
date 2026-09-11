"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { supabase } from "@/lib/supabase/client";
import { Shield, LogOut, Activity, Eye, AlertTriangle } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<import("@supabase/supabase-js").User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/auth/sign-in");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    });
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark">
        <div className="w-8 h-8 border-2 border-electric border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                Welcome back, {user.user_metadata?.full_name || user.email}
              </h1>
              <p className="text-muted-foreground">Here&apos;s your security overview.</p>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Packets Inspected Today", value: "1.2B", icon: Eye, color: "text-electric" },
              { label: "Threats Blocked", value: "14,320", icon: AlertTriangle, color: "text-danger" },
              { label: "Active Flows", value: "8,942", icon: Activity, color: "text-cyan" },
              { label: "Network Health", value: "99.98%", icon: Shield, color: "text-success" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-surface-dark/50 border border-white/5">
                <stat.icon className={`w-6 h-6 mb-4 ${stat.color}`} />
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Demo request placeholder — actually connect to Supabase */}
          <div className="p-8 rounded-2xl bg-surface-dark/50 border border-white/5">
            <h2 className="text-xl font-bold mb-4">Traffic Overview</h2>
            <p className="text-muted-foreground text-sm">
              Your full analytics dashboard is being configured. Live traffic data will appear here once your inspection appliance is connected.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}