import * as React from 'react';

interface SaccoInquiryNotificationProps {
    name: string;
    email: string;
    phone: string;
    organization: string;
    interest: string;
    message?: string;
}

export const SaccoInquiryNotificationTemplate = ({
    name,
    email,
    phone,
    organization,
    interest,
    message,
}: SaccoInquiryNotificationProps) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Inquiry — {organization || name}</title>
        </head>
        <body style={main}>
            <div style={wrapper}>
                <div style={container}>

                    {/* ── Header ────────────────────────────────────── */}
                    <div style={header}>
                        <div style={accentBar} />
                        <div style={headerInner}>
                            <div style={logoMark}>W</div>
                            <h1 style={headerTitle}>New Platform Inquiry</h1>
                            <p style={headerTagline}>Wananchi Mali · Internal Notification</p>
                        </div>
                    </div>

                    {/* ── Alert Banner ──────────────────────────────── */}
                    <div style={alertBanner}>
                        <span style={alertDot} />
                        <span style={alertText}>
                            A new inquiry was submitted via the Wananchi Mali website.
                        </span>
                    </div>

                    {/* ── Body ──────────────────────────────────────── */}
                    <div style={body}>
                        <p style={sectionLabel}>Prospect Details</p>

                        {/* Data table */}
                        <div style={dataCard}>
                            <DataRow label="Full Name" value={name} />
                            <DataRow label="Email Address" value={email} isEmail />
                            <DataRow label="Phone Number" value={phone} />
                            <DataRow label="Organization / SACCO" value={organization || '—'} />
                            <DataRow label="Primary Interest" value={interest} isLast />
                        </div>

                        {/* Message if provided */}
                        {message && (
                            <>
                                <p style={{ ...sectionLabel, marginTop: '24px' }}>Additional Details</p>
                                <div style={messageBox}>
                                    <p style={messageText}>{message}</p>
                                </div>
                            </>
                        )}

                        {/* Quick action */}
                        <div style={actionRow}>
                            <a href={`mailto:${email}?subject=Re: Wananchi Mali Inquiry`} style={actionButton}>
                                Reply to {name.split(' ')[0]}
                            </a>
                            <a href={`tel:${phone}`} style={actionButtonOutline}>
                                Call {phone}
                            </a>
                        </div>
                    </div>

                    {/* ── Footer ────────────────────────────────────── */}
                    <div style={footer}>
                        <div style={footerDivider} />
                        <p style={footerTagline}>Pesa yako salama.</p>
                        <p style={footerText}>
                            Wananchi Mali · Powered by Corban Technologies LTD
                        </p>
                        <p style={footerDisclaimer}>
                            This is an automated internal notification. Do not reply to this message.
                        </p>
                    </div>

                </div>
            </div>
        </body>
    </html>
);

// ─── Sub-component: Data Row ────────────────────────────────────────────────

function DataRow({
    label,
    value,
    isEmail,
    isLast,
}: {
    label: string;
    value: string;
    isEmail?: boolean;
    isLast?: boolean;
}) {
    return (
        <div style={{ ...dataRow, borderBottom: isLast ? 'none' : '1px solid #f1f5f9' }}>
            <span style={dataLabel}>{label}</span>
            {isEmail ? (
                <a href={`mailto:${value}`} style={dataValueLink}>{value}</a>
            ) : (
                <span style={dataValue}>{value}</span>
            )}
        </div>
    );
}

export default SaccoInquiryNotificationTemplate;

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
};

const accentBar: React.CSSProperties = {
    height: '4px',
    background: 'linear-gradient(90deg, #059669 0%, #d4af37 100%)',
};

const headerInner: React.CSSProperties = {
    padding: '24px 32px 26px',
    textAlign: 'center' as const,
};

const logoMark: React.CSSProperties = {
    display: 'inline-block',
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    backgroundColor: '#059669',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '36px',
    textAlign: 'center' as const,
    marginBottom: '10px',
};

const headerTitle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 5px',
    letterSpacing: '0.01em',
};

const headerTagline: React.CSSProperties = {
    color: '#d4af37',
    fontSize: '10px',
    fontWeight: '500',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    margin: 0,
};

const alertBanner: React.CSSProperties = {
    backgroundColor: '#f0fdf4',
    borderBottom: '1px solid #bbf7d0',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

const alertDot: React.CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#059669',
    flexShrink: 0,
};

const alertText: React.CSSProperties = {
    color: '#065f46',
    fontSize: '13px',
    fontWeight: '500',
};

const body: React.CSSProperties = {
    padding: '28px 32px',
};

const sectionLabel: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '10px',
    fontWeight: '700',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    margin: '0 0 10px',
};

const dataCard: React.CSSProperties = {
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden',
};

const dataRow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '12px',
    padding: '10px 14px',
    backgroundColor: '#ffffff',
};

const dataLabel: React.CSSProperties = {
    color: '#059669',
    fontSize: '10px',
    fontWeight: '700',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    minWidth: '130px',
    flexShrink: 0,
};

const dataValue: React.CSSProperties = {
    color: '#0f172a',
    fontSize: '13px',
    fontWeight: '500',
};

const dataValueLink: React.CSSProperties = {
    color: '#2563eb',
    fontSize: '13px',
    fontWeight: '500',
    textDecoration: 'none',
};

const messageBox: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderLeft: '3px solid #d4af37',
    borderRadius: '4px',
    padding: '12px 16px',
};

const messageText: React.CSSProperties = {
    color: '#475569',
    fontSize: '13px',
    lineHeight: '22px',
    margin: 0,
    fontStyle: 'italic',
};

const actionRow: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    marginTop: '24px',
};

const actionButton: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#059669',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
};

const actionButtonOutline: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#ffffff',
    color: '#0B1120',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    border: '1px solid #e2e8f0',
};

const footer: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '20px 32px 24px',
    textAlign: 'center' as const,
};

const footerDivider: React.CSSProperties = {
    height: '1px',
    backgroundColor: '#e2e8f0',
    margin: '0 0 18px',
};

const footerTagline: React.CSSProperties = {
    color: '#059669',
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'italic',
    margin: '0 0 8px',
};

const footerText: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '11px',
    margin: '0 0 4px',
};

const footerDisclaimer: React.CSSProperties = {
    color: '#cbd5e1',
    fontSize: '11px',
    margin: '0',
};