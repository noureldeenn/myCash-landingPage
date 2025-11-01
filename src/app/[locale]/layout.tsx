"use client";
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function RootLayout({
  children,
  params: paramsPromise,
}: LocaleLayoutProps) {
  const params = React.use(paramsPromise);
  const locale = params.locale || "en";
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let messages: Record<string, string> | undefined;
  try {
    messages = require(`../../../public/locales/${locale}.json`);
  } catch (error) {
    console.error("Missing translations:", error);
    messages = {};
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "ltr" : "rtl"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider
          locale={locale}
          timeZone="Africa/Cairo"
          messages={messages}
        >
          <MainHeader
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            locale={locale}
          />

          {children}
          <MainFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
