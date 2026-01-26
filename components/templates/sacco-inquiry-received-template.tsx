import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Button,
} from '@react-email/components';

interface SaccoInquiryReceivedProps {
    name: string;
}

export const SaccoInquiryReceivedTemplate = ({
    name,
}: SaccoInquiryReceivedProps) => (
    <Html>
        <Head />
        <Preview>We received your inquiry - Wananchi Mali</Preview>
        <Tailwind>
            <Body className="bg-gray-100 my-auto mx-auto font-sans">
                <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-[40px] mx-auto p-[0px] w-[465px] overflow-hidden">
                    <Section className="bg-[#0B1120] p-[30px] text-center">
                        <Heading className="text-white text-[24px] font-bold p-0 m-0">
                            Wananchi Mali
                        </Heading>
                        <Text className="text-[#d4af37] text-[12px] uppercase tracking-widest font-medium m-0 mt-2">
                            The SACCO People
                        </Text>
                    </Section>

                    <Section className="p-[30px]">
                        <Text className="text-gray-800 text-[16px] leading-[24px] mb-4">
                            Hello {name},
                        </Text>
                        <Text className="text-gray-600 text-[14px] leading-[24px] mb-4">
                            Thank you for your interest in Wananchi Mali. We have successfully received your request for a demo/onboarding session.
                        </Text>
                        <Text className="text-gray-600 text-[14px] leading-[24px] mb-6">
                            Our team is currently reviewing your organization's details and will contact you shortly to schedule a personalized walkthrough associated with your specific needs.
                        </Text>

                        <Section className="text-center mt-[12px] mb-[24px]">
                            <Button
                                className="bg-[#059669] rounded-md text-white text-[14px] font-semibold no-underline text-center px-6 py-3"
                                href="https://www.wananchimali.com"
                            >
                                Visit Our Website
                            </Button>
                        </Section>
                    </Section>

                    <Hr className="border-gray-100 my-0 mx-0 w-full" />
                    <Section className="bg-gray-50 p-[20px] text-center">
                        <Text className="text-[#059669] text-[14px] font-semibold italic mb-4">
                            Pesa yako salama.
                        </Text>
                        <Text className="text-gray-400 text-[11px] leading-[18px] m-0">
                            &copy; {new Date().getFullYear()} Corban Technologies LTD. All rights reserved.
                        </Text>
                        <Text className="text-gray-400 text-[11px] leading-[18px] m-0 mt-2">
                            This is an automated message. Please do not reply to this email.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default SaccoInquiryReceivedTemplate;