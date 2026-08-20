import { useState } from 'react';

const LOOKING_FOR = [
  'Brand Strategy & Positioning',
  'Campus Film / Institutional Film',
  'Social Content & Reels',
  'Annual Function / Event Production',
  'Sports Content',
  'Admission Campaign',
  'Website Design',
  'Full Creative Partnership',
  'Other',
];

/* ─── SVG icon components (replace emoji) ─── */
const MailIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <rect x="2" y="4" width="14" height="11" rx="1" />
    <polyline points="2,4 9,10 16,4" />
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <circle cx="9" cy="7.5" r="2.5" />
    <path d="M9 1C5.96 1 3.5 3.46 3.5 6.5c0 4.5 5.5 10.5 5.5 10.5s5.5-6 5.5-10.5C14.5 3.46 12.04 1 9 1z" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <circle cx="9" cy="9" r="7.5" />
    <polyline points="9,4.5 9,9 12,11.5" />
  </svg>
);

const CONTACT_ITEMS = [
  { Icon: MailIcon,  label: 'Email',         value: 'the3dotcreatives@gmail.com' },
  { Icon: WaIcon,    label: 'WhatsApp',      value: '+91 72969 02012' },
  { Icon: PinIcon,   label: 'Based In',      value: 'India' },
  { Icon: ClockIcon, label: 'Response Time', value: 'Within 24 hours' },
];

export default function ContactPage() {
  const [selected,   setSelected]   = useState([]);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    data.append('services', selected.join(', ') || 'None selected');

    try {
      const res = await fetch('https://formspree.io/f/mgobzzoe', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please WhatsApp us directly at +91 72969 02012.');
      }
    } catch {
      alert('Network error. Please WhatsApp us directly at +91 72969 02012.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-shell">

      {/* ─── Hero — Dark ─── */}
      <div className="contact-top">
        <p className="t-eyebrow light" style={{ marginBottom: 20 }}>START A PROJECT</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 7vw, 88px)',
          fontWeight: 800,
          color: 'var(--white)',
          lineHeight: 1.04,
          letterSpacing: '-.025em',
          marginBottom: 24,
          maxWidth: 760,
        }}>
          Let's build something<br />
          <em style={{ fontStyle: 'italic', color: 'var(--olive-warm)' }}>worth remembering.</em>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.4)', maxWidth: 520, lineHeight: 1.75 }}>
          We work with institutions and brands that believe their story deserves to be told properly.
          If that's you — tell us about it.
        </p>
      </div>

      {/* ─── Success state ─── */}
      {submitted ? (
        <div style={{
          padding: 'var(--pad-v) var(--pad-h)',
          textAlign: 'center',
          minHeight: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          background: 'var(--canvas)',
        }}>
          <div style={{
            width: 56, height: 56,
            borderRadius: 999,
            background: 'var(--olive)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, color: 'white',
          }}>✓</div>
          <h2 style={{ fontFamily: 'var(--font-ui)', fontSize: 28, fontWeight: 800, color: 'var(--text)' }}>
            Message sent.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 380, lineHeight: 1.7 }}>
            We'll review your brief and get back within 24 hours.
            In the meantime, explore our work.
          </p>
          <a
            href="https://wa.me/917296902012?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%203dotcreatives."
            target="_blank" rel="noopener noreferrer"
            className="btn btn-olive"
            style={{ marginTop: 8 }}
          >
            CONTINUE ON WHATSAPP →
          </a>
        </div>
      ) : (
        <div className="contact-layout">

          {/* ─── Left — Contact info + service selector ─── */}
          <div>
            <p className="t-eyebrow" style={{ marginBottom: 24 }}>CONTACT DETAILS</p>

            <div className="contact-info-block">
              {CONTACT_ITEMS.map(({ Icon, label, value }) => (
                <div key={label} className="contact-info-item">
                  <div className="contact-icon-wrap" aria-hidden="true">
                    <Icon />
                  </div>
                  <div>
                    <div className="contact-label-sm">{label}</div>
                    <div className="contact-value-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick-action — SVG, no emoji */}
            <a
              href="https://wa.me/917296902012?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%203dotcreatives."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-olive btn-full"
              style={{ marginBottom: 36 }}
              aria-label="Chat on WhatsApp"
            >
              <WaIcon /> MESSAGE US ON WHATSAPP
            </a>

            <fieldset style={{ border: 'none', padding: 0 }}>
              <legend>
                <p className="t-eyebrow" style={{ marginBottom: 18 }}>WHAT ARE YOU LOOKING FOR?</p>
              </legend>
              <div className="service-checks">
                {LOOKING_FOR.map((item) => (
                  <label key={item} className="service-check">
                    <input
                      type="checkbox"
                      checked={selected.includes(item)}
                      onChange={() => toggle(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <div style={{
              marginTop: 32,
              padding: '18px 20px',
              background: 'var(--olive-pale)',
              border: '1px solid var(--olive-border)',
              borderRadius: 4,
            }}>
              <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.75 }}>
                <strong>We're selective.</strong><br />
                We don't take every brief. We take the ones we're confident we can do exceptionally well.
                If we're not the right fit, we'll say so — honestly.
              </p>
            </div>
          </div>

          {/* ─── Right — Form ─── */}
          <div>
            <div className="contact-form-wrap">
              <h2 className="form-title">Tell us about your project</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-name">Your Name</label>
                    <input type="text" id="f-name" name="name" placeholder="Name & designation" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-org">Brand / Institution</label>
                    <input type="text" id="f-org" name="organisation" placeholder="Your brand or institution name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-email">Email</label>
                    <input type="email" id="f-email" name="email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-phone">WhatsApp / Phone</label>
                    <input type="tel" id="f-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-city">City</label>
                    <input type="text" id="f-city" name="city" placeholder="Your city" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-budget">Approximate Budget</label>
                    <select id="f-budget" name="budget">
                      <option value="">Select budget range...</option>
                      <option>Under ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹3,00,000</option>
                      <option>₹3,00,000 – ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="f-situation">Current situation</label>
                    <select id="f-situation" name="situation">
                      <option value="">What best describes your situation?</option>
                      <option>We have no digital presence — starting from scratch</option>
                      <option>We have presence but it's not working for us</option>
                      <option>We need a specific project (film / event / campaign)</option>
                      <option>We want a complete creative partner</option>
                      <option>We have an event and need production</option>
                      <option>We want to revamp our content strategy</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="f-message">Tell us more</label>
                    <textarea
                      id="f-message"
                      name="message"
                      rows={5}
                      placeholder="What are you working on? What does success look like? What's the timeline?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-olive btn-full"
                  style={{ marginTop: 8 }}
                  disabled={submitting}
                >
                  {submitting ? 'SENDING…' : "SEND — WE'LL RESPOND WITHIN 24 HOURS →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
