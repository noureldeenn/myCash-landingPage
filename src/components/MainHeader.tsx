"use client";
import React from "react";
import { Toolbar, Typography, Button, Box, Modal, Stack } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  locale: string;
}

const languageItems = [
  { name: "English", lang: "en" },
  { name: "Arabic", lang: "ar" },
  { name: "Español", lang: "es" },
  { name: "Français", lang: "fr" },
  { name: "Italiano", lang: "it" },
];

export default function MainHeader({
  open,
  handleOpen,
  handleClose,
  locale,
}: HeaderProps) {
  const t = useTranslations("headerSection");
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render null or a loading state while the component is being mounted
    return null;
  }

  const changeLanguage = (newLocale: string) => {
    if (router) {
      router.push(`/${newLocale}/${pathname?.slice(4)}`);
    }
  };

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="relative w-full flex justify-center h-[500px]">
      <Image
        src="/mainPageScrollOne.png"
        alt="Main Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <Box className="absolute top-[5%] shadow-lg w-[94%] bg-white rounded-full">
        <Toolbar className="flex justify-between items-center md:px-8 py-1">
          <Stack direction="row" className="md:gap-8">
            <Button
              variant="contained"
              className="bg-[#6ec531] min-w-[100px] normal-case text-white rounded-full md:px-4 py-2 text-[13px] md:text-[15px]"
            >
              {t("start")}
            </Button>
            <Button
              onClick={handleOpen}
              variant="text"
              className=" text-black font-bold normal-case text-[13px] md:text-[15px]"
            >
              {t("lang")}
            </Button>
          </Stack>

          {/* Center Links */}
          <Box className="flex flex-wrap gap-2 md:gap-8 text-gray-700 text-[13px] md:text-[15px] font-semibold">
            <Link
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-blue-500 normal-case cursor-pointer"
            >
              {t("home")}
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-blue-500 normal-case cursor-pointer"
            >
              {t("about")}
            </Link>
            <Link
              href="#solutions"
              onClick={(e) => handleScroll(e, "solutions")}
              className="hover:text-blue-500 normal-case cursor-pointer"
            >
              {t("solution")}
            </Link>
            <Link
              href="#packages"
              onClick={(e) => handleScroll(e, "packages")}
              className="hover:text-blue-500 normal-case cursor-pointer"
            >
              {t("packages")}
            </Link>
            <Link
              href="#articles"
              onClick={(e) => handleScroll(e, "articles")}
              className="hover:text-blue-500 normal-case cursor-pointer"
            >
              {t("blogs")}
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-blue-500 normal-case cursor-pointer"
            >
              {t("contact")}
            </Link>
          </Box>
          <Image src="/logo.PNG" alt="Logo" width={100} height={50} />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white shadow-md p-8">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="!font-bold !mb-4"
              >
                {t("chooseLanguage")}
              </Typography>
              <Box className="w-full">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {languageItems.map((el) => (
                    <Grid key={el.name} size={{ xs: 12, md: 6, lg: 4 }}>
                      <Button
                        variant="outlined"
                        onClick={() => changeLanguage(el.lang)}
                        className={`!text-black !shadow-none ${
                          el.name.toLowerCase().includes(locale)
                            ? "!border-gray-900"
                            : "!border-none"
                        } !font-medium !py-[8px] !px-[15px] !text-[16px] !normal-case !rounded-[0px]`}
                      >
                        {el.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Modal>
        </Toolbar>
      </Box>
      <Box className="absolute top-[40%]  flex flex-col justify-center items-center ">
        <Typography
          variant="h3"
          className="font-bold md:w-[60%] text-center text-white"
        >
          {t("title")}
        </Typography>
        <Typography
          variant="body1"
          className="md:w-[60%] text-center text-white"
        >
          {t("description")}
        </Typography>
        <Stack direction="row" spacing={2} className="pt-4">
          <Button
            variant="outlined"
            className="bg-white text-[#6ec531] border-[#6ec531] font-semibold rounded-full px-4 py-2"
          >
            {t("more")}
          </Button>
          <Button
            variant="contained"
            className="bg-[#6ec531] text-white font-semibold rounded-full px-4 py-2"
          >
            {t("getCopy")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
