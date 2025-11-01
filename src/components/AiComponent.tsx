"use client";
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AiComponent() {
  const t = useTranslations("loginPage");

  return (
    <Box className="relative overflow-hidden w-full flex justify-center h-[500px] mb-20">
      <Image
        src="/mainPageScrollOne.png"
        alt="Main Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <Box className="absolute -top-16 -right-40 shadow-lg w-[700px] h-[700px] bg-white rounded-full" />
      <Box className="absolute top-0 right-0 px-4 md:px-0 md:right-12 w-[400px] flex flex-col items-end ">
        <Typography
          variant="h3"
          className="font-bold text-start text-gray-800 mt-20"
        >
          ماي كاش AI
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600  tex-[18px] text-end font-semibold mt-2"
        >
          يقوم نظام ماي كاش AI باستخدام أجهزة الذكاء الاصطناعي وشبكات الكاميرات
          المتطورة على دمج أنظمة المتاجر لتحويل البيانات المجموعة إلى رؤى قابلة
          للتنفيذ، مما يعزز الكفاءة ويحسن تجربة العملاء.
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600  text-end text-[18px] mt-6"
        >
          <li dir="rtl">
            يتميز نظام ماي كاش AI بالعديد من المميزات المصممة خصيصاً لتسهيل
            إدارة عمليات المتاجر وتعزيز كفائتها:
          </li>
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600  text-end text-[18px] my-6"
        >
          <li dir="rtl">
            التعرف على المنتجات تلقائياً والتكامل مع قاعدة البيانات
          </li>
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600  text-end text-[18px]"
        >
          <li dir="rtl">التحليل الديموغرافي للعملاء وتوقعات</li>
        </Typography>
        <Stack direction="row" spacing={2} className="pt-4">
          <Button
            variant="outlined"
            className="bg-white text-[#6ec531] border-[#6ec531] font-semibold rounded-full px-4 py-2"
          >
            اعرف المزيد
          </Button>
          <Button
            variant="contained"
            className="bg-[#6ec531] text-white font-semibold rounded-full px-4 py-2"
          >
            احصل علي نسختك التجربيه
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
