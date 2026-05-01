import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DeltaEcho Care Ltd privacy policy — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy`,
  },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How DeltaEcho Care Ltd collects, uses, and protects your personal information."
        breadcrumbs={[{ name: 'Privacy Policy', href: '/privacy-policy' }]}
        showCTA={false}
      />

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <article className="mx-auto max-w-3xl prose prose-lg prose-navy" aria-label="Privacy Policy">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-12 space-y-8 text-gray-700 leading-relaxed">

              <div>
                <p className="text-sm text-gray-500">Last updated: April 2025</p>
                <p className="mt-4">
                  DeltaEcho Care Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting and
                  respecting your privacy. This policy sets out how we collect, use, and protect any
                  personal information you provide when using our website or services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">1. Who We Are</h2>
                <p>
                  DeltaEcho Care Ltd is a registered home care provider based at{' '}
                  {SITE_CONFIG.address.full}. You can contact our Data Controller at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-600 hover:text-teal-700 underline">
                    {SITE_CONFIG.email}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">2. Information We Collect</h2>
                <p>We may collect the following personal information:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Your name, email address, and telephone number (via contact forms or direct contact)</li>
                  <li>Information about the care needs of yourself or a family member</li>
                  <li>Location information such as your town or postcode</li>
                  <li>Technical information such as your IP address, browser type, and pages visited (via cookies)</li>
                </ul>
                <p className="mt-4">
                  We only collect information that is necessary to provide our services or respond to
                  your enquiries.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Respond to care enquiries and requests for assessments</li>
                  <li>Arrange and deliver care services</li>
                  <li>Comply with legal and regulatory obligations (including CQC registration)</li>
                  <li>Improve our website and services</li>
                  <li>Send relevant information about our services, where you have given consent</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">4. Legal Basis for Processing</h2>
                <p>We process your personal data under the following legal bases:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li><strong>Consent</strong> — where you have given us clear consent (e.g., completing a contact form)</li>
                  <li><strong>Legitimate interests</strong> — for example, to respond to enquiries about our services</li>
                  <li><strong>Legal obligation</strong> — where we are required to process data to comply with the law</li>
                  <li><strong>Performance of a contract</strong> — where processing is necessary to deliver care services</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">5. Sharing Your Information</h2>
                <p>
                  We will never sell your personal information to third parties. We may share your data
                  with:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Healthcare professionals and other providers involved in your care (with your consent)</li>
                  <li>Regulatory bodies such as the Care Quality Commission (CQC) where required by law</li>
                  <li>Our trusted IT service providers who assist in operating our website (under strict data processing agreements)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">6. How Long We Keep Your Data</h2>
                <p>
                  We retain personal information for as long as is necessary for the purposes for which
                  it was collected, or as required by law. Enquiry data is typically retained for 12
                  months. Care records are retained in line with CQC guidance and relevant legislation.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">7. Cookies</h2>
                <p>
                  Our website may use cookies — small text files placed on your device — to improve
                  your experience. Essential cookies are required for the website to function. You may
                  disable cookies through your browser settings, though this may affect site
                  functionality.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">8. Your Rights</h2>
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (where no legal obligation requires us to retain it)</li>
                  <li>Object to or restrict how we process your data</li>
                  <li>Withdraw consent at any time (without affecting prior processing)</li>
                  <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-600 hover:text-teal-700 underline">
                    {SITE_CONFIG.email}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">9. Data Security</h2>
                <p>
                  We take the security of your personal information seriously and have implemented
                  appropriate technical and organisational measures to protect it against unauthorised
                  access, loss, or disclosure. Our website uses HTTPS encryption.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on
                  this page with an updated date. We encourage you to review this page periodically.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">11. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or how we handle your data,
                  please contact us:
                </p>
                <address className="mt-3 not-italic space-y-1">
                  <p className="font-semibold text-navy-700">{SITE_CONFIG.name}</p>
                  <p>{SITE_CONFIG.address.full}</p>
                  <p>
                    Email:{' '}
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-600 hover:text-teal-700 underline">
                      {SITE_CONFIG.email}
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`} className="text-teal-600 hover:text-teal-700 underline">
                      {SITE_CONFIG.phone1}
                    </a>
                  </p>
                </address>
              </div>

            </div>
          </article>
        </div>
      </section>
    </>
  )
}
