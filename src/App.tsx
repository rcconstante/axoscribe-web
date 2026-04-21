import { useState } from 'react';
import { Mic, Shield, Cpu, Download, WifiOff, Star, ChevronRight, CheckCircle, Tag, X } from 'lucide-react';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';

function ComingSoonModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-900 border border-neutral-700 rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="white">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.82 9.3 4.8C10.6 4.78 11.83 5.64 12.62 5.64C13.41 5.64 14.92 4.59 16.48 4.76C17.14 4.79 18.93 5.03 20.1 6.7C19.98 6.78 17.75 8.08 17.77 10.82C17.8 14.1 20.58 15.17 20.61 15.18C20.58 15.27 20.1 16.88 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">iOS Coming Soon</h2>
        <p className="text-neutral-400 text-base leading-relaxed">
          AxoScribe for iPhone and iPad is currently in development.
          <br /><br />
          In the meantime, try it on Android — fully offline, zero cloud.
        </p>
        <a
          href="https://play.google.com/apps/testing/com.axoscribe.app/join?hl=en-US"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-neutral-200 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.583 1.496c.572.331.572.87 0 1.2l-2.583 1.497-2.606-2.597 2.606-2.596zM5.864 3.465L16.8 9.798l-2.302 2.302-8.634-8.635z"/>
          </svg>
          Get it on Google Play
        </a>
        <button
          onClick={onClose}
          className="mt-3 w-full text-neutral-500 text-sm py-2 hover:text-neutral-300 transition-colors"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showIOSModal, setShowIOSModal] = useState(false);
  const path = window.location.pathname;
  if (path === '/privacy') return <PrivacyPage />;
  if (path === '/terms') return <TermsPage />;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {showIOSModal && <ComingSoonModal onClose={() => setShowIOSModal(false)} />}
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-28 lg:pb-40">
          {/* Hero content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-16">
            {/* Left – phone mockup (below text on mobile, left on desktop) */}
            <div className="relative flex-shrink-0 w-72 sm:w-80 lg:w-[26rem] order-2 lg:order-1">
              <div className="relative z-10">
                <img
                  src="/Add_a_subheading-removebg-preview.png"
                  alt="Hand holding phone with AxoScribe"
                  className="w-full drop-shadow-2xl"
                />
              </div>
              {/* glow ring behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-white/[0.03] blur-3xl -z-0" />
            </div>

            {/* Right – copy */}
            <div className="text-center lg:text-left max-w-xl w-full px-2 sm:px-0 order-1 lg:order-2">
              {/* Logo above headline */}
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-7">
                <img src="/icon.png" alt="AxoScribe" className="w-12 h-12 rounded-2xl" />
                <span className="text-2xl font-bold tracking-tight">AxoScribe</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-medium mb-8">
                <WifiOff size={18} />
                100% Offline — No Internet Needed
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[5.25rem] font-extrabold tracking-tight leading-[1.05] mb-8">
                Voice to Text,
                <br />
                <span className="text-neutral-400">Instantly.</span>
              </h1>
              <p className="text-neutral-400 text-xl sm:text-2xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Transcribe speech to text on your device using OpenAI's Whisper AI.
                Your voice never leaves your phone.
              </p>

              {/* Store buttons */}
              <div id="download" className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowIOSModal(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-base hover:bg-neutral-200 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.82 9.3 4.8C10.6 4.78 11.83 5.64 12.62 5.64C13.41 5.64 14.92 4.59 16.48 4.76C17.14 4.79 18.93 5.03 20.1 6.7C19.98 6.78 17.75 8.08 17.77 10.82C17.8 14.1 20.58 15.17 20.61 15.18C20.58 15.27 20.1 16.88 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs leading-none opacity-70">Download on the</div>
                    <div className="text-base leading-tight font-bold">App Store</div>
                  </div>
                </button>
                <a
                  href="https://play.google.com/apps/testing/com.axoscribe.app/join?hl=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.583 1.496c.572.331.572.87 0 1.2l-2.583 1.497-2.606-2.597 2.606-2.596zM5.864 3.465L16.8 9.798l-2.302 2.302-8.634-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs leading-none opacity-70">GET IT ON</div>
                    <div className="text-base leading-tight font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── App Screenshots ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-28 lg:py-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Everything you need,
            <br className="hidden sm:block" /> nothing you don't.
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-lg mx-auto">
            Powerful transcription that works anywhere — no cloud, no compromises.
          </p>
        </div>

        {/* Phone screenshot row */}
        <div className="flex flex-col sm:flex-row items-end justify-center gap-8 lg:gap-14">
          {[
            {
              img: '/axolotl.png',
              label: 'Record',
              title: 'Real-Time Transcription',
              desc: 'Tap the mic. Watch your words appear instantly as you speak.',
              icon: <Mic size={18} />,
              tall: false,
            },
            {
              img: '/axolotl_private.png',
              label: 'Privacy',
              title: '100% Private & Offline',
              desc: 'All AI runs on your device. Your audio never touches a server.',
              icon: <Shield size={18} />,
              tall: true,
            },
            {
              img: '/axolotl_whisper.png',
              label: 'AI Models',
              title: 'Powered by Whisper AI',
              desc: 'Download once. Tiny, Base, or Small — you choose the trade-off.',
              icon: <Cpu size={18} />,
              tall: false,
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center w-full sm:w-auto ${
                item.tall ? 'sm:-translate-y-10' : ''
              }`}
            >
              {/* Phone frame */}
              <div
                className={`relative bg-neutral-900 border-[3px] border-neutral-700 rounded-[3.5rem] overflow-hidden shadow-2xl mx-auto ${
                  item.tall
                    ? 'w-64 sm:w-72 lg:w-80 h-[520px] sm:h-[580px] lg:h-[640px]'
                    : 'w-60 sm:w-64 lg:w-72 h-[480px] sm:h-[520px] lg:h-[576px]'
                }`}
              >
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-800 rounded-full z-10" />
                {/* Screen content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 p-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Home bar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-neutral-600 rounded-full" />
              </div>

              {/* Caption */}
              <div className="mt-8 text-center max-w-[270px] px-2">
                <div className="inline-flex items-center gap-2 text-sm text-neutral-400 bg-white/5 px-4 py-1.5 rounded-full mb-3">
                  {item.icon}
                  {item.label}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-24 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <p className="text-5xl sm:text-6xl font-extrabold">100%</p>
            <p className="text-neutral-400 text-base mt-2">Offline Processing</p>
          </div>
          <div>
            <p className="text-5xl sm:text-6xl font-extrabold">20+</p>
            <p className="text-neutral-400 text-base mt-2">Languages Supported</p>
          </div>
          <div>
            <p className="text-5xl sm:text-6xl font-extrabold">3</p>
            <p className="text-neutral-400 text-base mt-2">AI Model Sizes</p>
          </div>
          <div>
            <p className="text-5xl sm:text-6xl font-extrabold">0</p>
            <p className="text-neutral-400 text-base mt-2">Data Sent to Cloud</p>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-28 lg:py-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Three steps. That's it.
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-lg mx-auto">
            Get started in under a minute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              step: '01',
              title: 'Download a Model',
              desc: 'Choose from Tiny, Base, or Small. One-time download, works forever.',
              icon: Download,
            },
            {
              step: '02',
              title: 'Hit Record',
              desc: 'Tap the mic and start speaking. Watch your words appear in real time.',
              icon: Mic,
            },
            {
              step: '03',
              title: 'Copy & Share',
              desc: 'Copy your transcript, share it, or save it for later. It\'s all yours.',
              icon: ChevronRight,
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-10 text-center"
            >
              <div className="text-7xl font-black text-white/[0.06] absolute top-6 right-8">
                {item.step}
              </div>
              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-7">
                <item.icon size={34} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Testimonials / Reviews ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-28 lg:py-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            What people are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Alex R.',
              text: "Finally an app that doesn't need internet. I use it on flights all the time — works perfectly.",
              rating: 5,
            },
            {
              name: 'Maria S.',
              text: 'The accuracy is impressive for an offline app. And I love that nothing leaves my phone.',
              rating: 5,
            },
            {
              name: 'James K.',
              text: 'Simple, clean, does exactly what it says. Downloaded the small model and the quality is great.',
              rating: 5,
            },
            {
              name: 'Priya M.',
              text: 'I needed something private for meeting notes. AxoScribe is the only app I trust.',
              rating: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-base">{review.name}</span>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-300 text-base leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-28 lg:py-40">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Tag size={16} />
            Simple, honest pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            One price. Forever yours.
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-lg mx-auto">
            No subscription. No ads. No cloud fees. Pay once and own it.
          </p>
        </div>

        {/* Price card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative bg-white text-black rounded-3xl p-10 sm:p-12 text-center overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-black/[0.04] rounded-full" />
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-black/[0.03] rounded-full" />
            <div className="relative z-10">
              <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4">One-Time Purchase</p>
              <div className="flex items-start justify-center gap-1 mb-2">
                <span className="text-2xl font-bold mt-3 text-neutral-600">₱</span>
                <span className="text-8xl sm:text-9xl font-black tracking-tight leading-none">69</span>
              </div>
              <p className="text-neutral-500 text-base mb-8">Philippine Peso · one-time</p>
              <div className="space-y-3 text-left mb-8">
                {[
                  'Unlimited transcriptions, forever',
                  'All 3 Whisper AI model sizes',
                  '20+ languages supported',
                  '100% offline — no internet needed',
                  'All future updates included',
                  'No ads, no tracking, no subscription',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-black flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-700">{feat}</span>
                  </div>
                ))}
              </div>
              <a
                href="#download"
                className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-neutral-800 transition-colors"
              >
                Get AxoScribe <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Currency equivalents */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-neutral-500 text-sm mb-8">
            Approximate price in your currency <span className="text-neutral-600">(Google Play auto-converts at checkout)</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { flag: '🇵🇭', currency: 'PHP', symbol: '₱', amount: '69', name: 'Philippine Peso' },
              { flag: '🇺🇸', currency: 'USD', symbol: '$', amount: '1.22', name: 'US Dollar' },
              { flag: '🇪🇺', currency: 'EUR', symbol: '€', amount: '1.13', name: 'Euro' },
              { flag: '🇬🇧', currency: 'GBP', symbol: '£', amount: '0.96', name: 'British Pound' },
              { flag: '🇯🇵', currency: 'JPY', symbol: '¥', amount: '182', name: 'Japanese Yen' },
              { flag: '🇦🇺', currency: 'AUD', symbol: 'A$', amount: '1.88', name: 'Australian Dollar' },
              { flag: '🇨🇦', currency: 'CAD', symbol: 'C$', amount: '1.67', name: 'Canadian Dollar' },
              { flag: '🇸🇬', currency: 'SGD', symbol: 'S$', amount: '1.64', name: 'Singapore Dollar' },
              { flag: '🇮🇳', currency: 'INR', symbol: '₹', amount: '101', name: 'Indian Rupee' },
              { flag: '🇰🇷', currency: 'KRW', symbol: '₩', amount: '1,670', name: 'South Korean Won' },
              { flag: '🇲🇾', currency: 'MYR', symbol: 'RM', amount: '5.40', name: 'Malaysian Ringgit' },
              { flag: '🇭🇰', currency: 'HKD', symbol: 'HK$', amount: '9.42', name: 'Hong Kong Dollar' },
              { flag: '🇹🇼', currency: 'TWD', symbol: 'NT$', amount: '39', name: 'New Taiwan Dollar' },
              { flag: '🇹🇭', currency: 'THB', symbol: '฿', amount: '42', name: 'Thai Baht' },
              { flag: '🇮🇩', currency: 'IDR', symbol: 'Rp', amount: '19,900', name: 'Indonesian Rupiah' },
              { flag: '🇻🇳', currency: 'VND', symbol: '₫', amount: '30,800', name: 'Vietnamese Dong' },
              { flag: '🇧🇷', currency: 'BRL', symbol: 'R$', amount: '6.90', name: 'Brazilian Real' },
              { flag: '🇲🇽', currency: 'MXN', symbol: 'MX$', amount: '21', name: 'Mexican Peso' },
              { flag: '🇦🇪', currency: 'AED', symbol: 'د.إ', amount: '4.44', name: 'UAE Dirham' },
              { flag: '🇸🇦', currency: 'SAR', symbol: 'SR', amount: '4.56', name: 'Saudi Riyal' },
            ].map((c) => (
              <div
                key={c.currency}
                className={`bg-neutral-900 border rounded-2xl px-4 py-3 flex items-center gap-3 ${c.currency === 'PHP' ? 'border-white/30 bg-white/5' : 'border-neutral-800'}`}
              >
                <span className="text-2xl leading-none">{c.flag}</span>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-500 font-medium">{c.currency}</p>
                  <p className="text-sm font-bold text-white truncate">
                    {c.symbol}{c.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-600 text-xs mt-6">
            * Rates are approximate. Google Play sets the final local price. Updated April 2026.
          </p>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-28 lg:pb-40">
        <div className="relative bg-white rounded-3xl p-10 sm:p-16 lg:p-20 flex flex-col sm:flex-row items-center gap-10 overflow-hidden">
          <div className="absolute -right-16 -bottom-16 opacity-10">
            <img src="/axolotl.png" alt="" className="w-64 h-64" />
          </div>
          <div className="flex-1 relative z-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Ready to transcribe?
            </h2>
            <p className="text-neutral-500 text-lg max-w-lg">
              Get AxoScribe for just <strong>₱69</strong> — a one-time purchase, no subscription ever. No account needed, no data collection. Just you and your voice.
            </p>
          </div>
          <a
            href="#download"
            className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            Get the App <ChevronRight size={22} />
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="AxoScribe" className="w-11 h-11 rounded-xl" />
            <span className="font-semibold text-base">AxoScribe</span>
          </div>
          <div className="flex items-center gap-8 text-base text-neutral-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
          <p className="text-sm text-neutral-500">
            Made by{' '}
            <a
              href="https://rcconstante.dev"
              className="text-neutral-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richmond Constante
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

