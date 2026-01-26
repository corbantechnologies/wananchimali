import * as React from 'react';

interface SaccoInquiryReceivedProps {
    name: string;
}

export const SaccoInquiryReceivedTemplate = ({
    name,
}: SaccoInquiryReceivedProps) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>We received your inquiry - Wananchi Mali</title>
        </head>
        <body style={main}>
            <div style={container}>
                <div style={header}>
                    <h1 style={headerTitle}>
                        Wananchi Mali
                    </h1>
                    <p style={headerSubtext}>
                        The SACCO People
                    </p>
                </div>

                <div style={contentSection}>
                    <p style={greeting}>
                        Hello {name},
                    </p>
                    <p style={paragraph}>
                        Thank you for your interest in Wananchi Mali. We have successfully received your request for a demo/onboarding session.
                    </p>
                    <p style={paragraph}>
                        Our team is currently reviewing your organization's details and will contact you shortly to schedule a personalized walkthrough associated with your specific needs.
                    </p>

                    <div style={buttonContainer}>
                        <a
                            style={button}
                            href="https://www.wananchimali.com"
                        >
                            Visit Our Website
                        </a>
                    </div>
                </div>

                <hr style={divider} />
                <div style={footer}>
                    <p style={tagline}>
                        Pesa yako salama.
                    </p>
                    <p style={copyright}>
                        &copy; {new Date().getFullYear()} Corban Technologies LTD. All rights reserved.
                    </p>
                    <p style={disclaimer}>
                        This is an automated message. Please do not reply to this email.
                    </p>
                </div>
            </div>
        </body>
    </html>
);

export default SaccoInquiryReceivedTemplate;

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
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
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

const greeting: React.CSSProperties = {
    color: '#1f2937',
    fontSize: '16px',
    marginBottom: '16px',
    marginTop: 0,
};

const paragraph: React.CSSProperties = {
    color: '#4b5563',
    fontSize: '14px',
    lineHeight: '24px',
    marginBottom: '16px',
    marginTop: 0,
};

const buttonContainer: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '12px',
    marginBottom: '24px',
};

const button: React.CSSProperties = {
    backgroundColor: '#059669',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    textAlign: 'center',
    padding: '12px 24px',
    display: 'inline-block',
};

const divider: React.CSSProperties = {
    border: 'none',
    borderTop: '1px solid #f9fafb',
    margin: '0',
};

const footer: React.CSSProperties = {
    backgroundColor: '#f9fafb',
    padding: '20px',
    textAlign: 'center',
};

const tagline: React.CSSProperties = {
    color: '#059669',
    fontSize: '14px',
    fontWeight: 600,
    fontStyle: 'italic',
    marginBottom: '16px',
    marginTop: 0,
};

const copyright: React.CSSProperties = {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '0',
};

const disclaimer: React.CSSProperties = {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '18px',
    margin: '8px 0 0',
};