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
} from '@react-email/components';

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
    <Html>
        <Head />
        <Preview>New Inquiry from {organization}</Preview>
        <Tailwind>
            <Body className="bg-gray-100 my-auto mx-auto font-sans">
                <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-[40px] mx-auto p-[0px] w-[465px] overflow-hidden">
                    <Section className="bg-[#0B1120] p-[30px] text-center">
                        <Heading className="text-white text-[20px] font-bold p-0 m-0 uppercase tracking-wider">
                            Wananchi Mali
                        </Heading>
                        <Text className="text-[#d4af37] text-[12px] uppercase tracking-widest font-medium m-0 mt-2">
                            New Demo Request
                        </Text>
                    </Section>

                    <Section className="p-[30px]">
                        <Text className="text-gray-700 text-[14px] leading-[24px] mb-6">
                            A new lead has requested a demo or onboarding session via the landing page.
                        </Text>

                        <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                            <Text className="text-gray-900 text-[14px] leading-[20px] m-0 mb-2">
                                <span className="text-[#059669] font-bold uppercase text-[10px] tracking-wider block mb-1">Prospect Name</span>
                                {name}
                            </Text>
                            <Text className="text-gray-900 text-[14px] leading-[20px] m-0 mb-2">
                                <span className="text-[#059669] font-bold uppercase text-[10px] tracking-wider block mb-1">Email Address</span>
                                <a href={`mailto:${email}`} className="text-blue-600 no-underline hover:underline">{email}</a>
                            </Text>
                            <Text className="text-gray-900 text-[14px] leading-[20px] m-0 mb-2">
                                <span className="text-[#059669] font-bold uppercase text-[10px] tracking-wider block mb-1">Phone Number</span>
                                {phone}
                            </Text>
                            <Text className="text-gray-900 text-[14px] leading-[20px] m-0 mb-2">
                                <span className="text-[#059669] font-bold uppercase text-[10px] tracking-wider block mb-1">Organization</span>
                                {organization}
                            </Text>
                            <Text className="text-gray-900 text-[14px] leading-[20px] m-0 mb-0">
                                <span className="text-[#059669] font-bold uppercase text-[10px] tracking-wider block mb-1">Primary Interest</span>
                                {interest}
                            </Text>
                        </div>
                    </Section>

                    <Hr className="border-gray-100 my-0 mx-0 w-full" />
                    <Section className="bg-gray-50 p-[20px] text-center">
                        <Text className="text-gray-500 text-[12px] leading-[20px] m-0">
                            This is an automated notification from the Wananchi Mali System.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default SaccoInquiryNotificationTemplate;