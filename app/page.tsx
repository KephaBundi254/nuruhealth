export default function NuruHealthLandingPage() {
  const features = [
    {
      title: "Pay for family care",
      text: "Support your loved ones by paying hospital bills, clinic visits, and medication costs directly from anywhere in the world.",
    },
    {
      title: "Trusted provider network",
      text: "Access vetted hospitals, clinics, and pharmacies in Kenya with transparent pricing and reliable service.",
    },
    {
      title: "Family health dashboard",
      text: "Track treatments, payments, and coverage in one place with full visibility and peace of mind.",
    },
    {
      title: "Care coordination",
      text: "Manage appointments, receive updates, and ensure your family gets the right care at the right time.",
    },
  ];

  const steps = [
    "Create your account and add your family member.",
    "Select a care plan or upload a hospital bill.",
    "Pay securely from abroad.",
    "Your loved one receives care while you track everything in real time.",
  ];

  const plans = [
    {
      name: "Essential",
      price: "$19/mo",
      items: ["Clinic visits", "Basic care support", "Family dashboard access"],
    },
    {
      name: "Family Plus",
      price: "$49/mo",
      items: ["Outpatient coverage", "Medication support", "Priority assistance"],
    },
    {
      name: "Chronic Care",
      price: "$99/mo",
      items: ["Chronic disease support", "Continuous monitoring", "Dedicated care assistance"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-700 shadow-sm">
              NuruHealth
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Healthcare for your family, wherever you are.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              NuruHealth helps you support your loved ones in Kenya by paying for care, managing health coverage, and ensuring they receive the treatment they need — all from anywhere in the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Join the waitlist
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5"
              >
                Explore features
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">Global</div>
                <div>Access from anywhere</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">Secure</div>
                <div>Trusted payments</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">Reliable</div>
                <div>Verified providers</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-600 to-indigo-700 p-6 text-white">
              <p className="text-sm font-medium text-sky-100">How it works</p>
              <ol className="mt-4 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-sky-700">
                      {index + 1}
                    </div>
                    <span className="text-sm leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Core features</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to support your family’s healthcare from abroad — in one simple platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Simple pricing to start</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Start with affordable care packages and expand into full insurance coverage as the platform grows.
              </p>
            </div>
            <div className="text-sm text-slate-300">
              Built for diaspora families who want reliable, transparent healthcare support back home.
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-[1.5rem] bg-white p-6 text-slate-900 shadow-lg">
                <div className="text-sm font-medium text-sky-700">{plan.name}</div>
                <div className="mt-2 text-3xl font-bold">{plan.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold tracking-tight">Get early access</h2>
          <p className="mt-2 text-slate-600">
            Be among the first to access NuruHealth and transform how you support your family’s healthcare.
          </p>
          <div className="mt-6">
        </div>
  <a
    href="https://forms.gle/mXjQaT1enzHn5wtc8"
    target="_blank"
    className="block w-full rounded-2xl bg-sky-600 px-5 py-4 text-center text-sm font-semibold text-white shadow-lg"
  >
    Join the waitlist
  </a>
  </div>
           </section> 
          
      <footer className="mt-16 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
  © 2026 NuruHealth • Founded by Kepha Bundi • Contact: 
  <a href="mailto:kephabundi2@gmail.com" className="underline ml-1">
    kephabundi2@gmail.com
  </a>
</footer>
    </div>   
);
}
