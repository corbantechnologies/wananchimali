import * as React from 'react';

interface SaccoInquiryReceivedProps {
    name: string;
}

export const SaccoInquiryReceivedTemplate = ({ name }: SaccoInquiryReceivedProps) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>We received your inquiry — Wananchi Mali</title>
        </head>
        <body style={main}>
            <div style={wrapper}>
                <div style={container}>

                    {/* ── Header ────────────────────────────────────── */}
                    <div style={header}>
                        {/* Top accent stripe */}
                        <div style={accentBar} />
                        <div style={headerInner}>
                            <div style={logoMark}>W</div>
                            <h1 style={headerTitle}>Wananchi Mali</h1>
                            <p style={headerTagline}>The SACCO People</p>
                        </div>
                    </div>

                    {/* ── Body ──────────────────────────────────────── */}
                    <div style={body}>
                        <p style={greeting}>Hello {name},</p>

                        <p style={lead}>
                            Thank you for reaching out. We have received your inquiry and our team will be in touch shortly.
                        </p>

                        <p style={paragraph}>
                            At Wananchi Mali, we understand that every SACCO has unique needs. We will take time to review the details you shared and get back to you with the right information — whether that's a walkthrough of the platform, pricing, or a full setup consultation.
                        </p>

                        {/* What to expect box */}
                        <div style={infoBox}>
                            <p style={infoBoxTitle}>What happens next?</p>
                            <div style={stepRow}>
                                <div style={stepDot} />
                                <span style={stepText}>Our team reviews your inquiry within 1 business day.</span>
                            </div>
                            <div style={stepRow}>
                                <div style={stepDot} />
                                <span style={stepText}>We reach out via phone or email to discuss your SACCO's needs.</span>
                            </div>
                            <div style={stepRow}>
                                <div style={stepDotLast} />
                                <span style={stepText}>We walk you through the platform and plan your setup.</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div style={ctaContainer}>
                            <a href="https://www.wananchimali.com/platform" style={ctaButton}>
                                Explore Platform Features
                            </a>
                        </div>

                        <p style={closing}>
                            In the meantime, feel free to browse our platform page to see everything Wananchi Mali has to offer.
                        </p>
                        <p style={signoff}>
                            Warm regards,<br />
                            <strong style={{ color: '#0B1120' }}>The Wananchi Mali Team</strong><br />
                            <span style={signoffSub}>Corban Technologies LTD · Mombasa, Kenya</span>
                        </p>
                    </div>

                    {/* ── Footer ────────────────────────────────────── */}
                    <div style={footer}>
                        <div style={footerDivider} />
                        <p style={footerTagline}>Pesa yako salama.</p>
                        <p style={footerLinks}>
                            <a href="https://www.wananchimali.com" style={footerLink}>Website</a>
                            <span style={footerSep}>·</span>
                            <a href="https://www.wananchimali.com/platform" style={footerLink}>Platform</a>
                            <span style={footerSep}>·</span>
                            <a href="https://www.wananchimali.com/#contact" style={footerLink}>Contact</a>
                        </p>
                        <p style={copyright}>
                            © {new Date().getFullYear()} Corban Technologies LTD. All rights reserved.
                        </p>
                        <p style={disclaimer}>
                            This is an automated message. Please do not reply directly to this email.
                        </p>
                    </div>

                </div>
            </div>
        </body>
    </html>
);

export default SaccoInquiryReceivedTemplate;

// ─── Styles ────────────────────────────────────────────────────────────────

const main: React.CSSProperties = {
    backgroundColor: '#f1f5f9',
    fontFamily: "'Google Sans', 'Segoe UI', Arial, sans-serif",
    padding: '40px 0',
    margin: 0,
};

const wrapper: React.CSSProperties = {
    maxWidth: '560px',
    margin: '0 auto',
    padding: '0 16px',
};

const container: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
    border: '1px solid #e2e8f0',
};

const header: React.CSSProperties = {
    backgroundColor: '#0B1120',
    position: 'relative' as const,
};

const accentBar: React.CSSProperties = {
    height: '4px',
    background: 'linear-gradient(90deg, #059669 0%, #d4af37 100%)',
};

const headerInner: React.CSSProperties = {
    padding: '28px 32px 30px',
    textAlign: 'center' as const,
};

const logoMark: React.CSSProperties = {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#059669',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '40px',
    textAlign: 'center' as const,
    marginBottom: '12px',
};

const headerTitle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 6px',
    letterSpacing: '0.02em',
};

const headerTagline: React.CSSProperties = {
    color: '#d4af37',
    fontSize: '11px',
    fontWeight: '500',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    margin: 0,
};

const body: React.CSSProperties = {
    padding: '36px 32px',
};

const greeting: React.CSSProperties = {
    color: '#0B1120',
    fontSize: '17px',
    fontWeight: '600',
    margin: '0 0 16px',
};

const lead: React.CSSProperties = {
    color: '#1e293b',
    fontSize: '15px',
    lineHeight: '26px',
    margin: '0 0 16px',
    fontWeight: '500',
};

const paragraph: React.CSSProperties = {
    color: '#475569',
    fontSize: '14px',
    lineHeight: '24px',
    margin: '0 0 24px',
};

const infoBox: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderLeft: '3px solid #059669',
    borderRadius: '4px',
    padding: '16px 20px',
    marginBottom: '28px',
};

const infoBoxTitle: React.CSSProperties = {
    color: '#0B1120',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    margin: '0 0 12px',
};

const stepRow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '8px',
};

const stepDot: React.CSSProperties = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#059669',
    flexShrink: 0,
    marginTop: '5px',
};

const stepDotLast: React.CSSProperties = {
    ...stepDot,
    marginBottom: 0,
};

const stepText: React.CSSProperties = {
    color: '#475569',
    fontSize: '13px',
    lineHeight: '20px',
};

const ctaContainer: React.CSSProperties = {
    textAlign: 'center' as const,
    marginBottom: '24px',
};

const ctaButton: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#059669',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '12px 28px',
    borderRadius: '4px',
    letterSpacing: '0.02em',
};

const closing: React.CSSProperties = {
    color: '#475569',
    fontSize: '14px',
    lineHeight: '24px',
    margin: '0 0 24px',
};

const signoff: React.CSSProperties = {
    color: '#475569',
    fontSize: '14px',
    lineHeight: '22px',
    margin: '0',
};

const signoffSub: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '12px',
};

const footer: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '20px 32px 24px',
    textAlign: 'center' as const,
};

const footerDivider: React.CSSProperties = {
    height: '1px',
    backgroundColor: '#e2e8f0',
    margin: '0 0 20px',
};

const footerTagline: React.CSSProperties = {
    color: '#059669',
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'italic',
    margin: '0 0 12px',
};

const footerLinks: React.CSSProperties = {
    margin: '0 0 10px',
};

const footerLink: React.CSSProperties = {
    color: '#64748b',
    fontSize: '12px',
    textDecoration: 'none',
};

const footerSep: React.CSSProperties = {
    color: '#cbd5e1',
    margin: '0 6px',
    fontSize: '12px',
};

const copyright: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '0 0 4px',
};

const disclaimer: React.CSSProperties = {
    color: '#cbd5e1',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '0',
};