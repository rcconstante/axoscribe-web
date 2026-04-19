import { Mic, Shield, Cpu, Download, WifiOff, Star, ChevronRight } from 'lucide-react';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';

function App() {
  const path = window.location.pathname;
  if (path === '/privacy') return <PrivacyPage />;
  if (path === '/terms') return <TermsPage />;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-20 lg:pb-28">
          {/* Hero content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
            {/* Left – phone mockup */}
            <div className="relative flex-shrink-0 w-60 sm:w-64 lg:w-72">
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
            <div className="text-center lg:text-left max-w-lg">
              {/* Logo above headline */}
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
                <img src="/icon.png" alt="AxoScribe" className="w-9 h-9 rounded-xl" />
                <span className="text-lg font-bold tracking-tight">AxoScribe</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-xs font-medium mb-6">
                <WifiOff size={14} />
                100% Offline — No Internet Needed
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Voice to Text,
                <br />
                <span className="text-neutral-400">Instantly.</span>
              </h1>
              <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Transcribe speech to text on your device using OpenAI's Whisper AI.
                Your voice never leaves your phone.
              </p>

              {/* Store buttons */}
              <div id="download" className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.82 9.3 4.8C10.6 4.78 11.83 5.64 12.62 5.64C13.41 5.64 14.92 4.59 16.48 4.76C17.14 4.79 18.93 5.03 20.1 6.7C19.98 6.78 17.75 8.08 17.77 10.82C17.8 14.1 20.58 15.17 20.61 15.18C20.58 15.27 20.1 16.88 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none opacity-70">Download on the</div>
                    <div className="text-sm leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.583 1.496c.572.331.572.87 0 1.2l-2.583 1.497-2.606-2.597 2.606-2.596zM5.864 3.465L16.8 9.798l-2.302 2.302-8.634-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none opacity-70">GET IT ON</div>
                    <div className="text-sm leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── App Screenshots ─── */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything you need,
            <br className="hidden sm:block" /> nothing you don't.
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Powerful transcription that works anywhere — no cloud, no compromises.
          </p>
        </div>

        {/* Phone screenshot row */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-10">
          {[
            {
              img: '/axolotl.png',
              label: 'Record',
              title: 'Real-Time Transcription',
              desc: 'Tap the mic. Watch your words appear instantly as you speak.',
              icon: <Mic size={16} />,
              tall: false,
            },
            {
              img: '/axolotl_private.png',
              label: 'Privacy',
              title: '100% Private & Offline',
              desc: 'All AI runs on your device. Your audio never touches a server.',
              icon: <Shield size={16} />,
              tall: true,
            },
            {
              img: '/axolotl_whisper.png',
              label: 'AI Models',
              title: 'Powered by Whisper AI',
              desc: 'Download once. Tiny, Base, or Small — you choose the trade-off.',
              icon: <Cpu size={16} />,
              tall: false,
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center ${
                item.tall ? 'md:-translate-y-6' : ''
              }`}
            >
              {/* Phone frame */}
              <div
                className={`relative bg-neutral-900 border-[3px] border-neutral-700 rounded-[3rem] overflow-hidden shadow-2xl ${
                  item.tall ? 'w-52 h-[420px]' : 'w-48 h-[380px]'
                }`}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-800 rounded-full z-10" />
                {/* Screen content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 p-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Home bar */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-neutral-600 rounded-full" />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center max-w-[200px]">
                <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 bg-white/5 px-3 py-1 rounded-full mb-2">
                  {item.icon}
                  {item.label}
                </div>
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">100%</p>
            <p className="text-neutral-400 text-sm mt-1">Offline Processing</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">20+</p>
            <p className="text-neutral-400 text-sm mt-1">Languages Supported</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">3</p>
            <p className="text-neutral-400 text-sm mt-1">AI Model Sizes</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">0</p>
            <p className="text-neutral-400 text-sm mt-1">Data Sent to Cloud</p>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Three steps. That's it.
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            Get started in under a minute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center"
            >
              <div className="text-5xl font-black text-white/[0.06] absolute top-6 right-8">
                {item.step}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                <item.icon size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Testimonials / Reviews ─── */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What people are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-sm">{review.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-20 lg:pb-28">
        <div className="relative bg-white rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-center gap-8 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <img src="/axolotl.png" alt="" className="w-48 h-48" />
          </div>
          <div className="flex-1 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Ready to transcribe?
            </h2>
            <p className="text-neutral-500 max-w-md">
              Get AxoScribe — a one-time purchase, no subscription ever. No account needed, no data collection. Just you and your voice.
            </p>
          </div>
          <a
            href="#download"
            className="relative z-10 inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            Get the App <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="AxoScribe" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-sm">AxoScribe</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
          <p className="text-xs text-neutral-500">
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

