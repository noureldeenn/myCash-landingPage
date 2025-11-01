import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Box className="flex flex-col md:flex-row w-full bg-gray-50 mb-8 items-center">
        <Box className="flex flex-col w-full items-center md:items-end px-2 md:px-16">
          <Typography
            variant="h4"
            className="text-indigo-800 text-center font-semibold"
          >
            احصل على تجربة ترفيهية مثالية مع تطبيقنا
          </Typography>
          <Typography
            variant="h5"
            className="text-indigo-500 text-center md:text-end font-medium md:w-[80%]"
          >
            اكتشف تجربة ترفيهية سلسة ومخصصة مع كل الأدوات التي تحتاجها في متناول
            يدك. سواء كنت في المنزل أو في الخارج، فإن تطبيقنا يبقيك على اتصال
            ويبقيك تحت السيطرة في أي وقت وفي أي مكان.
          </Typography>

          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12 my-4"
            width={200}
            height={70}
          />
        </Box>
        <Image src="/contact.png" alt="" width={650} height={250} />
      </Box>
      <Box className="w-full flex flex-col items-center justify-center py-8">
        <Typography
          variant="h4"
          className="font-bold text-center text-gray-800 mt-2"
        >
          تواصل معنا الآن وابدأ في نمو عملك
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600  tex-[15px] font-semibold my-4"
        >
          لا تتردد في التواصل معنا، نحن هنا لخدمتك وجعل تجربتك أفضل
        </Typography>
        <Button
          variant="contained"
          className="bg-[#6ec531] text-white w-[120px] font-semibold rounded-full px-4 py-2"
        >
          تواصل معنا
        </Button>
      </Box>
    </>
  );
};

export default Contact;
