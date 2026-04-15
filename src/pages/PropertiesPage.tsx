import React, { useEffect, useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Colour palette for owner avatars (cycles through list)
const AVATAR_COLORS = [
  'bg-blue-500', 'bg-pink-500', 'bg-purple-500',
  'bg-green-500', 'bg-orange-500', 'bg-teal-500',
];

// ─── Component ────────────────────────────────────────────────────────────────
const PropertiesPage: React.FC = () => {
  const propertyId = 'SY/MH/AUR/042/2019';

  const [property,     setProperty]     = useState<any>(null);
  const [owners,       setOwners]       = useState<any[]>([]);
  const [deeds,        setDeeds]        = useState<any[]>([]);
  const [encumbrances, setEncumbrances] = useState<any[]>([]);
  const [documents,    setDocuments]    = useState<any[]>([]);
  const [search,       setSearch]       = useState('');
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
    const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

    const get = (url: string) =>
      fetch(`${BASE}${url}`, { headers }).then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      });

    setLoading(true);
    Promise.all([
      get(`/properties/${propertyId}`),
      get(`/ownership/by-property/${propertyId}`),
      get(`/deeds/by-property/${propertyId}`),
      get(`/encumbrances/by-property/${propertyId}`),
      get(`/documents/by-property/${propertyId}`),
    ])
      .then(([prop, own, deed, enc, doc]) => {
        setProperty(prop);
        setOwners(own);
        setDeeds(deed);
        setEncumbrances(enc);
        setDocuments(doc);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [propertyId]);

  // ── Loading / error guards ──────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-gray-500">
            <svg className="animate-spin w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <p className="text-sm">Loading property details…</p>
          </div>
        </main>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 font-semibold mb-2">Failed to load property</p>
            <p className="text-sm text-gray-500">{error || 'Property not found.'}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        {/* ── Search Bar ── */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4">
          <div className="relative max-w-xl">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z" />
            </svg>
            <input
              type="text"
              id="property-search"
              placeholder="Search by survey number, property ID, owner name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="p-8">

          {/* ── Page Header ── */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Property Details: {property.id}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Village: {property.village}&nbsp;&nbsp;|&nbsp;&nbsp;
                Taluka: {property.taluka}&nbsp;&nbsp;|&nbsp;&nbsp;
                District: <span className="font-semibold text-gray-700">{property.district}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-blue-400 hover:text-blue-600 rounded-lg text-sm font-medium transition-colors shadow-sm">
                <span>+</span> Add Deed
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-blue-400 hover:text-blue-600 rounded-lg text-sm font-medium transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M20 20v-5h-.581M5.635 19A9 9 0 104.582 9H4" />
                </svg>
                Transfer Ownership
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-blue-400 hover:text-blue-600 rounded-lg text-sm font-medium transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4" />
                </svg>
                Upload Document
              </button>
            </div>
          </div>

          {/* ── Status Badges ── */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-700 font-medium">Status:</span>
            <span className="px-3 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 border border-green-200">
              {property.status}
            </span>
            <span className="text-sm text-gray-700 font-medium">Title:</span>
            <span className="px-3 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 border border-green-200">
              {property.title}
            </span>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* Property Overview */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 text-base mb-4">Property Overview</h2>
              <div className="space-y-2 text-sm text-gray-600 border-b border-gray-100 pb-4 mb-4">
                <p>• Survey No: <span className="font-semibold text-gray-900">{property.surveyNo}</span></p>
                <p>• Subdivision: <span className="font-semibold text-gray-900">{property.subdivision}</span></p>
                <p>• Plot No: <span className="font-semibold text-gray-900">{property.plotNo}</span></p>
                <p>• Land Type: <span className="font-semibold text-gray-900">{property.landType}</span></p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Area: <span className="font-semibold text-gray-900">{property.areaSqm} sq.m</span> | <span className="font-semibold text-gray-900">{property.areaAcres} acres</span></p>
                <p>• Guideline Value: <span className="font-semibold text-gray-900">{property.guidelineValue}</span></p>
                <p>• Market Value: <span className="font-semibold text-gray-900">{property.marketValue}</span></p>
              </div>
            </div>

            {/* Current Owners */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 text-base mb-4">Current Owners</h2>
              <div className="space-y-3 mb-4">
                {owners.map((o: any, i: number) => {
                  const initials = (o.party?.first_name?.[0] ?? '') + (o.party?.last_name?.[0] ?? '');
                  const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
                  const name = o.party
                    ? `${o.party.first_name} ${o.party.last_name}`
                    : o.name ?? 'Unknown';
                  const share = o.ownership_percentage ? `${o.ownership_percentage}%` : o.share ?? '';
                  return (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                      <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {initials || '?'}
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {name} <span className="text-gray-500">({share})</span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500">
                Ownership From: <span className="font-semibold text-gray-800">
                  {property.ownership_from ?? property.ownershipFrom ?? '—'}
                </span>
              </p>
            </div>
          </div>

          {/* ── Bottom Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Deed History */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 text-base mb-4">Deed History</h2>
              <div className="space-y-4">
                {deeds.map((d: any, i: number) => (
                  <div key={i} className="border border-orange-100 rounded-lg overflow-hidden">
                    <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 flex items-center gap-2">
                      <span>📜</span> {d.deed_type ?? d.type} ({d.deed_year ?? d.year})
                    </div>
                    <div className="px-4 py-3 space-y-1 text-sm text-gray-600">
                      <p>Buyer: <span className="font-semibold text-blue-600">{d.buyer_name ?? d.buyer}</span></p>
                      {(d.seller_name ?? d.seller) && (
                        <p>Seller: <span className="font-semibold text-blue-600">{d.seller_name ?? d.seller}</span></p>
                      )}
                      <p className="text-gray-400">Amount: <span className="font-semibold text-gray-800">{d.deed_amount ?? d.amount}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Encumbrances + Documents stacked */}
            <div className="space-y-6">

              {/* Encumbrances */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="font-semibold text-gray-800 text-base mb-4">Encumbrances</h2>
                {encumbrances.map((enc: any, i: number) => {
                  const status = enc.encumbrance_status ?? enc.status ?? 'UNKNOWN';
                  return (
                    <div key={i} className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">🏦</span>
                        <span className="font-semibold text-gray-800">{enc.encumbrance_type ?? enc.label}</span>
                        <span className={`px-2 py-0.5 text-xs font-bold rounded ${
                          status === 'ACTIVE'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {status}
                        </span>
                      </div>
                      <p>Amount: <span className="font-semibold text-gray-900">{enc.encumbrance_amount ?? enc.amount}</span></p>
                      <p>Creditor: <span className="font-semibold text-gray-900">{enc.creditor_name ?? enc.creditor}</span></p>
                      <p>Start Date: <span className="font-semibold text-gray-900">{enc.start_date ?? enc.startDate}</span></p>
                    </div>
                  );
                })}
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="font-semibold text-gray-800 text-base mb-4">Documents</h2>
                <div className="space-y-3">
                  {documents.map((doc: any, i: number) => (
                    <div key={i} className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span>📄</span>
                        <span>{doc.document_name ?? doc.name}</span>
                      </div>
                      <a
                        href={doc.document_url ?? doc.url ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        View
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PropertiesPage;
