import { ChevronLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-10"
        >
          <ChevronLeft size={16} />
          Back to AxoScribe
        </a>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <img src="/icon.png" alt="AxoScribe" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-bold">AxoScribe</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-neutral-400 text-sm">Last updated: April 19, 2026</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-12" />

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-neutral-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>
              AxoScribe is designed from the ground up with privacy as a core principle.
              We do not collect, store, transmit, or share any personal data, audio, or transcriptions.
              Everything you create stays entirely on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Data We Do Not Collect</h2>
            <p>AxoScribe does <strong className="text-white">not</strong> collect any of the following:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Audio recordings or voice data</li>
              <li>Transcription text or history</li>
              <li>Personal identifiers (name, email, phone number)</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or behavioral data</li>
              <li>Crash reports sent to third-party services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. On-Device Processing</h2>
            <p>
              All speech-to-text transcription is performed locally on your device using the Whisper AI models
              you download. No audio is ever sent to our servers or any third-party server.
              The AI models themselves are downloaded directly from trusted open-source repositories
              and stored on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Microphone Access</h2>
            <p>
              AxoScribe requests microphone access solely to record audio for transcription.
              Microphone access is only active when you explicitly start a recording session.
              Audio is processed in real time on your device and is never stored as a raw audio file
              unless you explicitly save it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. File Uploads</h2>
            <p>
              When you upload an audio or video file for transcription, that file is read locally
              on your device. No file content is transmitted to any external server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Network Usage</h2>
            <p>
              The app requires an internet connection only to download AI model files during the initial
              setup. Once a model is downloaded, AxoScribe operates entirely offline.
              No other network requests are made during normal use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Services</h2>
            <p>
              AxoScribe does not integrate any third-party analytics, advertising, or tracking SDKs.
              We do not use services such as Firebase, Google Analytics, Mixpanel, Amplitude, or similar platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Children's Privacy</h2>
            <p>
              AxoScribe does not knowingly collect any data from children under 13 years of age.
              Since we collect no data from anyone, the app is safe for all age groups.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. Any changes will be posted on this page
              with an updated date. Continued use of the app after changes constitutes acceptance
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <div className="mt-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
              <p className="font-semibold text-white">Richmond Constante</p>
              <p className="text-sm text-neutral-400 mt-1">
                Portfolio:{' '}
                <a href="https://rcconstante.dev" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                  rcconstante.dev
                </a>
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                GitHub:{' '}
                <a href="https://github.com/rcconstante" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                  github.com/rcconstante
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mt-16 mb-8" />

        {/* Footer mini */}
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>© 2026 AxoScribe</span>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
