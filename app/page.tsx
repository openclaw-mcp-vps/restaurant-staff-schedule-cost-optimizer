export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Cut Labor Costs by{" "}
          <span className="text-[#58a6ff]">12–18%</span>{" "}
          With Smarter Scheduling
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ShiftSmart analyzes your POS data, local weather, and upcoming events to generate
          optimal weekly schedules — so you never overstaff a slow Tuesday again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Saving — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["12–18%", "Labor cost reduction"],
            ["5 min", "Weekly schedule setup"],
            ["3+ POS", "Integrations supported"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">per month, per location</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "AI-powered weekly schedule generation",
              "POS data sync (Square, Toast, Clover)",
              "Weather & local event forecasting",
              "Labor cost dashboard & reports",
              "Unlimited staff profiles",
              "Email & SMS schedule delivery",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Which POS systems does ShiftSmart support?",
              "ShiftSmart currently integrates with Square, Toast, and Clover. More integrations are added regularly based on customer demand.",
            ],
            [
              "How does the AI predict staffing needs?",
              "It combines your historical sales data with real-time weather forecasts and local event calendars to predict customer volume hour-by-hour, then maps that to your minimum staffing requirements.",
            ],
            [
              "Can I override the suggested schedule?",
              "Absolutely. The AI-generated schedule is a starting point. You can drag, drop, and edit shifts before publishing to your team.",
            ],
          ].map(([q, a]) => (
            <details key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} ShiftSmart. All rights reserved.
      </footer>
    </main>
  );
}
