import { ChevronLeft } from 'lucide-react';

export default function TermsPage() {
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
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Terms of Service</h1>
          <p className="text-neutral-400 text-sm">Last updated: April 19, 2026</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-12" />

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-neutral-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using AxoScribe ("the App"), you agree to be bound by
              these Terms of Service. If you do not agree with any part of these terms, you must not
              use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. License</h2>
            <p>
              AxoScribe grants you a personal, non-exclusive, non-transferable, limited license to
              install and use the App on devices you own or control. This license is for personal,
              non-commercial use only. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Copy, modify, or distribute the App or any portion of it</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Rent, lease, or lend the App to third parties</li>
              <li>Use the App for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Purchase &amp; Payment</h2>
            <p>
              AxoScribe is a paid application. Payment is processed by Apple App Store or
              Google Play Store at the time of purchase. All prices are displayed in your
              local currency and are subject to applicable taxes.
            </p>
            <p className="mt-3">
              By completing your purchase, you agree to the payment terms of the applicable
              platform (Apple or Google). AxoScribe does not directly handle any payment
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Refund Policy</h2>
            <p>
              All sales are final. Refunds are handled exclusively by the platform through which
              you purchased the App (Apple App Store or Google Play). Please refer to Apple's or
              Google's refund policies for eligibility and instructions.
            </p>
            <p className="mt-3">
              AxoScribe does not issue refunds directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. AI Models</h2>
            <p>
              The App allows you to download third-party AI model files (Whisper models by OpenAI)
              for on-device speech recognition. These models are provided under their respective
              open-source licenses. AxoScribe does not own or warrant these models.
            </p>
            <p className="mt-3">
              Model downloads require an internet connection and adequate device storage.
              AxoScribe is not responsible for download failures due to network conditions
              or insufficient storage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Transcription Accuracy</h2>
            <p>
              AxoScribe relies on AI-based speech recognition which may not be 100% accurate.
              Transcription quality depends on factors including audio quality, background noise,
              speaker accent, and the AI model selected. We make no warranty regarding the
              accuracy or completeness of any transcription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Acceptable Use</h2>
            <p>You agree not to use AxoScribe to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Record or transcribe individuals without their consent</li>
              <li>Produce content that is illegal, harmful, or defamatory</li>
              <li>Violate any applicable local, national, or international laws</li>
              <li>Infringe upon the intellectual property rights of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Disclaimer of Warranties</h2>
            <p>
              The App is provided "as is" without warranty of any kind, express or implied,
              including but not limited to warranties of merchantability, fitness for a particular
              purpose, or non-infringement. AxoScribe does not guarantee uninterrupted or error-free
              operation of the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, AxoScribe and its developer shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, including
              loss of data or profits, arising from your use of or inability to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Updates &amp; Changes</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Updated terms
              will be posted on this page with a revised date. Continued use of the App after
              changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law.
              Any disputes shall be resolved through the appropriate legal channels in the
              jurisdiction of the developer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact</h2>
            <p>For questions about these Terms, contact:</p>
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
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
