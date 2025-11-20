import { 
  Html, 
  Head, 
  Body, 
  Container, 
  Section, 
  Text, 
  Heading, 
  Tailwind,
  Button,
  Hr
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  fullname: string;
  email: string;
  phone: string;
  role: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ fullname, email, phone, role }) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] p-[20px] rounded my-[40px] mx-auto w-[465px]">
          
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            New Waitlist Registration
          </Heading>

          <Text className="text-black text-[14px] leading-[24px]">
            Hello Team,
          </Text>
          
          <Text className="text-black text-[14px] leading-[24px]">
            <strong>{fullname}</strong> has just submitted a request to join the waitlist. Please find their registration details below:
          </Text>

          <Section className="my-[20px] p-[20px] bg-gray-50 rounded border border-gray-100">
            <Text className="text-black text-[14px] leading-[20px] m-0 mb-[10px]">
              <strong className="text-gray-500 uppercase text-xs tracking-wider">Role:</strong><br/>
              {role.replace(/-/g, ' ').toUpperCase()}
            </Text>
            <Text className="text-black text-[14px] leading-[20px] m-0 mb-[10px]">
              <strong className="text-gray-500 uppercase text-xs tracking-wider">Email:</strong><br/>
              <a href={`mailto:${email}`} className="text-blue-600 no-underline">{email}</a>
            </Text>
            <Text className="text-black text-[14px] leading-[20px] m-0">
              <strong className="text-gray-500 uppercase text-xs tracking-wider">Phone:</strong><br/>
              <a href={`tel:${phone}`} className="text-blue-600 no-underline">{phone}</a>
            </Text>
          </Section>

          <Section className="text-center mt-[32px] mb-[32px]">
            <Button
              className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
              href={`mailto:${email}`}
            >
              Reply  {fullname.split(' ')[0]} email
            </Button>
          </Section>

          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

          <Text className="text-[#666666] text-[12px] leading-[24px]">
            This is an automated notification from your application system.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;