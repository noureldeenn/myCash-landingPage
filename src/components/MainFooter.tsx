"use client";
import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
// import { useTranslations } from "next-intl";

export default function MainFooter() {
  // const t = useTranslations("loginPage");

  return (
    <Box
      id="contact"
      component="footer"
      className="bg-[#232773] text-white p-8"
      sx={{
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Box>
        <Typography variant="subtitle1" className="font-medium text-center">
          My قم بتنزيل تطبيق
        </Typography>
        <Typography variant="subtitle1" className="font-medium text-center">
          للاندرويد Cash
        </Typography>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="h-12 mt-2 mx-auto"
          width={200}
          height={70}
        />
      </Box>

      <Stack alignItems="flex-end">
        <Typography variant="subtitle1" className="font-bold text-green-400">
          الحلول
        </Typography>
        <Typography>حلول نقاط الدفع</Typography>
        <Typography>حلول المدفوعات</Typography>
        <Typography>ماي كاش AI</Typography>
      </Stack>

      <Stack alignItems="flex-end">
        <Typography variant="subtitle1" className="font-bold text-green-400">
          My Cash
        </Typography>
        <Link href="#">
          <Typography>من نحن</Typography>
        </Link>
        <Link href="#about">
          <Typography>رؤيتنا ومهمتنا</Typography>
        </Link>
        <Link href="#contact">
          <Typography>شركاؤنا</Typography>
        </Link>
        <Link href="#articles">
          <Typography>الباقات</Typography>
        </Link>
        <Link href="#contact">
          <Typography>تواصل معنا</Typography>
        </Link>
      </Stack>

      <Stack alignItems="flex-end">
        <Image src="/logo2.PNG" alt="Logo" width={100} height={50} />
        <Typography variant="body2" className="mt-2 text-center">
          نظام ماي كاش مصمم لتحسين إدارة المدفوعات
          <br />
          وتسهيل عملياتها وفقًا لمعايير احترافية وخبرة عميقة.
        </Typography>
        <Box className="flex justify-center gap-4 mt-4">
          <Box className="p-1 border border-white rounded-md">
            <Facebook className="text-white " />
          </Box>
          <Box className="p-1 border border-white rounded-md">
            <Instagram className="text-white " />
          </Box>
          <Box className="p-1 border border-white rounded-md">
            <LinkedIn className="text-white " />
          </Box>
          <Box className="p-1 border border-white rounded-md">
            <Twitter className="text-white " />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
