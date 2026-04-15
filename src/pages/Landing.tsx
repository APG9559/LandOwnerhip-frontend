import React from 'react';
import { Link } from 'react-router-dom';

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: '🏛️',
    title: 'Centralised Registry',
    description:
      'A single source of truth for all land records, deeds, and ownership history across the jurisdiction.',
  },
  {
    icon: '🔒',
    title: 'Tamper-Proof Records',
    description:
      'Every transaction is logged with a full audit trail, ensuring the integrity of land ownership data.',
  },
  {
    icon: '⚡',
    title: 'Instant Verification',
    description:
      'Verify property ownership, encumbrances, and deed history in seconds — no manual lookup delays.',
  },
  {
    icon: '📄',
    title: 'Document Management',
    description:
      'Upload, store, and retrieve legal documents tied to properties with role-based access control.',
  },
];

const stats = [
  { value: '1,248+', label: 'Properties Registered' },
  { value: '2,563+', label: 'Verified Parties' },
  { value: '987+',   label: 'Deeds Processed' },
  { value: '99.9%',  label: 'System Uptime' },
];

const steps = [
  { step: '01', title: 'Create Account',   desc: 'Register as an authorised registry officer or applicant.' },
  { step: '02', title: 'Submit Documents', desc: 'Upload property deeds, ownership papers, and identity proof.' },
  { step: '03', title: 'Verification',     desc: 'Submitted records are reviewed and validated by registry officials.' },
  { step: '04', title: 'Record Published', desc: 'Approved records are permanently added to the public registry.' },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏛️</span>
          <span className="font-bold text-lg tracking-wide text-blue-900">
            Land <span className="text-blue-500">Registry</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="#features"      className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works"  className="hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#stats"         className="hover:text-blue-600 transition-colors">Overview</a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Decorative circles */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Official Government Portal — V2.4.0
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-blue-900">
            Land Ownership
            <br />
            <span className="text-blue-500">Information System</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            The authoritative digital registry for land records, property deeds,
            and ownership verification. Secure, transparent, and accessible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
            >
              Access Portal →
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 border-2 border-blue-200 hover:border-blue-400 text-blue-700 hover:text-blue-900 font-semibold rounded-xl text-base transition-all hover:-translate-y-0.5"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-white mb-2">{s.value}</p>
              <p className="text-sm text-blue-200">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Why choose LOIS
          </p>
          <h2 className="text-4xl font-bold text-blue-900">
            Built for modern land governance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-blue-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 bg-blue-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Process
            </p>
            <h2 className="text-4xl font-bold text-blue-900">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-extrabold mb-5 z-10 shadow-md shadow-blue-200">
                  {s.step}
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Ready to access the registry?
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Join authorised officers and applicants already using the
            Land Ownership Information System.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5"
            >
              Sign In to Dashboard
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 border-2 border-blue-200 hover:border-blue-400 text-blue-700 hover:text-blue-900 font-semibold rounded-xl text-base transition-all hover:-translate-y-0.5"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-blue-100 bg-blue-50 text-center text-slate-500 text-sm">
        <p className="mb-2">
          <span className="text-blue-600 font-semibold">Land Ownership Information System</span>
          {' '}— Official Registry Portal
        </p>
        <p className="mb-4">© 2026 Government of Land Registry. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-xs text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Help Desk</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Security Policy</a>
        </div>
        <p className="mt-4 text-xs text-slate-300">V2.4.0-STABLE</p>
      </footer>

    </div>
  );
};

export default Landing;
