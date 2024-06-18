import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    service: process.env.NEXT_PUBLIC_SEND_SITE,
    auth: {
      user: process.env.NEXT_PUBLIC_SEND_ADDRESS,
      pass: process.env.NEXT_PUBLIC_SEND_PASSWORD,
    },
  });

  try {
    const { email, phoneNumber, content, siteEmail } = await req.json();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SEND_ADDRESS,
      to: siteEmail,
      subject: `${process.env.NEXT_PUBLIC_SERVICE_NAME} 문의 메일`,
      html: `<p><div>문의자 이메일 : ${email}</div><div>문의 내용 : ${content}</div><div>연락처 : ${phoneNumber}</div></p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: "200" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "500", error: "Internal server error" }, { status: 500 });
  }
}
