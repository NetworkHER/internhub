

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';
import { EmailTemplate } from '@/app/components/email-template';


interface FormData {
  fullname: string;
  email: string;
  phone: string;
  role: string;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
     const { fullname, email, phone, role } = (await req.json()) as FormData;

    if (!fullname || !email || !role) {
      return NextResponse.json({ message: 'Missing required form data.' }, { status: 400 });
    }
    console.log("got here")
      const reactElement = React.createElement(EmailTemplate, { fullname, phone, email, role });
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['oladipomunirat@gmail.com'],
      subject: 'Hello world',
      react: reactElement,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

      return NextResponse.json(data);
    

  } catch (error) {
     console.log(error, "error")
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
// "use server"

// import { EmailTemplate } from '@/app/components/email-template';
// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// interface FormData {
//   fullname: string;
//   email: string;
//   phone: string;
//   role: string;
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { fullname, email, phone, role } = body as FormData;


//     if (!fullname || !email || !role) {
//       return NextResponse.json(
//         { message: 'Missing required form data.' },
//         { status: 400 }
//       );
//     }

   
//     const data = await resend.emails.send({
//       from: 'NetworkHer <onboarding@resend.dev>',
//       to: ['oladipomunirat@gmail.com'], 
//       subject: `New Application from ${fullname}`,
//       react: (
//         <EmailTemplate 
//           fullname={fullname} 
//           phone={phone} 
//           email={email} 
//           role={role} 
//         />
//       ),
//     });

//     if (data.error) {
//       return NextResponse.json({ error: data.error }, { status: 400 });
//     }

//     return NextResponse.json(data);

//   } catch (error) {
//     console.error('Email Error:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error', details: String(error) },
//       { status: 500 }
//     );
//   }
// }