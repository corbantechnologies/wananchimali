import * as React from 'react';

interface SaccoInquiryNotificationProps {
    name: string;
    email: string;
    phone: string;
    organization: string;
    interest: string;
}

export const SaccoInquiryNotificationTemplate = ({
    name,
    email,
    phone,
    organization,
    interest,
}: SaccoInquiryNotificationProps) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>New Inquiry from {organization}</title>
        </head>
        <body style={main}>
            <div style={container}>
                <div style={header}>
                    <h1 style={headerTitle}>
                        Wananchi Mali
                    </h1>
                    <p style={headerSubtext}>
                        New Demo Request
                    </p>
                </div>

                <div style={contentSection}>
                    <p style={introText}>
                        A new lead has requested a demo or onboarding session via the landing page.
                    </p>

                    <div style={dataContainer}>
                        <div style={dataRow}>
                            <span style={label}>Prospect Name</span>
                            <br />
                            {name}
                        </div>
                        <div style={dataRow}>
                            <span style={label}>Email Address</span>
                            <br />
                            <a href={`mailto:${email}`} style={link}>{email}</a>
                        </div>
                        <div style={dataRow}>
                            <span style={label}>Phone Number</span>
                            <br />
                            {phone}
                        </div>
                        <div style={dataRow}>
                            <span style={label}>Organization</span>
                            <br />
                            {organization}
                        </div>
                        <div style={dataRow}>
                            <span style={label}>Primary Interest</span>
                            <br />
                            {interest}
                        </div>
                    </div>
                </div>

                <hr style={divider} />
                <div style={footer}>
                    <p style={footerText}>
                        This is an automated notification from the Wananchi Mali System.
                    </p>
                </div>
            </div>
        </body>
    </html>
);

export default SaccoInquiryNotificationTemplate;

const main: React.CSSProperties = {
    backgroundColor: '#f3f4f6',
    fontFamily: 'Arial, sans-serif',
    padding: '40px 0',
};

const container: React.CSSProperties = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    margin: '0 auto',
    width: '465px',
    maxWidth: '100%',
    overflow: 'hidden',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
};

const header: React.CSSProperties = {
    backgroundColor: '#0B1120',
    padding: '30px',
    textAlign: 'center',
};

const headerTitle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
};

const headerSubtext: React.CSSProperties = {
    color: '#d4af37',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 500,
    margin: '10px 0 0',
};

const contentSection: React.CSSProperties = {
    padding: '30px',
};

const introText: React.CSSProperties = {
    color: '#374151',
    fontSize: '14px',
    lineHeight: '24px',
    marginBottom: '24px',
    marginTop: 0,
};

const dataContainer: React.CSSProperties = {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '6px',
    border: '1px solid #f3f4f6',
};

const dataRow: React.CSSProperties = {
    color: '#111827',
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0 0 12px',
};

const label: React.CSSProperties = {
    color: '#059669',
    fontWeight: 'bold',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '4px',
};

const link: React.CSSProperties = {
    color: '#2563eb',
    textDecoration: 'none',
};

const divider: React.CSSProperties = {
    border: 'none',
    borderTop: '1px solid #f3f4f6',
    margin: '0',
};

const footer: React.CSSProperties = {
    backgroundColor: '#f9fafb',
    padding: '20px',
    textAlign: 'center',
};

const footerText: React.CSSProperties = {
    color: '#6b7280',
    fontSize: '12px',
    margin: '0',
};