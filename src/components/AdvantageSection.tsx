"use client";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Advantages = [
  {
    title: ": إدارة ذكية بالمستقبل",
    itemOne: "نظام يعمل بالذكاء الاصطناعي لإدارة الطلبات",
    itemTwo: "توفير توصيات للمنتجات والعمل بكفاءة",
    itemThree: "حلول متقدمة لمتابعة المخزون",
    image: "/advantage.png",
  },
  {
    title: " إدارة ذكية بالمستقبل:",
    itemOne: "نظام يعمل بالذكاء الاصطناعي لإدارة الطلبات",
    itemTwo: "توفير توصيات للمنتجات والعمل بكفاءة",
    itemThree: "حلول متقدمة لمتابعة المخزون",
    image: "/advantage.png",
  },
];

const AdvantagesPlus = [
  {
    title: "إمكانية الوصول للنظام من أي جهاز",
    number: 1,
    description:
      "يمكنك الوصول إلى النظام من أي جهاز بكل سهولة سواء كنت تستخدم الهاتف، الكمبيوتر اللوحي أو الكمبيوتر الشخصي، يمكنك متابعة أعمالك وإدارة مبيعاتك ومخزونك في أي وقت ومن أي مكان.",
    image: "/advantagePlus.png",
  },
  {
    title: "إمكانية الوصول للنظام من أي جهاز",
    number: 2,
    description:
      "يمكنك الوصول إلى النظام من أي جهاز بكل سهولة سواء كنت تستخدم الهاتف، الكمبيوتر اللوحي أو الكمبيوتر الشخصي، يمكنك متابعة أعمالك وإدارة مبيعاتك ومخزونك في أي وقت ومن أي مكان.",
    image: "/advantagePlus.png",
  },
  {
    title: "خيارات دفع مرنة متعددة",
    number: 3,
    description:
      "استمتع بخيارات دفع مرنة متعددة تناسب احتياجاتك. اختر من بين عدة طرق دفع مريحة وآمنة. يسهل على عملائك إتمام معاملاتهم بسهولة وسرعة.",
    image: "/advantagePlus.png",
  },
];
export default function AdvantageSection() {
  const scrollContainerRef = useRef(null);
  const [autoScrollDirection, setAutoScrollDirection] = useState("right");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause autoplay when hovered

    const interval = setInterval(() => {
      const { current } = scrollContainerRef;
      if (current) {
        const scrollAmount = window.innerWidth - 306;
        const maxScrollLeft = current.scrollWidth - current.clientWidth;

        if (autoScrollDirection === "right") {
          if (current.scrollLeft < maxScrollLeft) {
            current.scrollTo({
              left: current.scrollLeft + scrollAmount,
              behavior: "smooth",
            });
          } else {
            setAutoScrollDirection("left"); // Switch direction when reaching the end
          }
        } else if (autoScrollDirection === "left") {
          if (current.scrollLeft > 0) {
            current.scrollTo({
              left: current.scrollLeft - scrollAmount,
              behavior: "smooth",
            });
          } else {
            setAutoScrollDirection("right"); // Switch direction when reaching the start
          }
        }
      }
    }, 2000); // Change 2000 to the desired delay (2 seconds in this case)

    return () => clearInterval(interval); // Clean up on unmount
  }, [autoScrollDirection, isHovered]);

  const handleScroll = (direction: string) => {
    const { current } = scrollContainerRef;
    if (current) {
      const cardWidth = window.innerWidth - 306; // Card width
      const scrollAmount = cardWidth; // Scroll by 4 cards at a time
      console.log(current.scrollLeft + current.clientWidth);
      const newScrollLeft =
        direction === "left"
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };
  return (
    <Box id="solutions" className="md:w-[80%] m-auto  pb-12">
      <Box className="text-center flex flex-col w-full items-center pb-12">
        <Typography
          variant="h6"
          className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          مميزات حصريه
        </Typography>
        <Typography variant="h3" className="font-bold text-gray-800 mt-2">
          المميزات الحصرية لنظام ماي كاش
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600  tex-[15px] font-semibold mt-4"
        >
          الذكاء الاصطناعي وحلول المدفوعات الذكية
        </Typography>
      </Box>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full flex justify-center  p-8 bg-gray-50 rounded-[20px]"
      >
        <IconButton
          onClick={() => handleScroll("left")}
          className="hidden md:flex absolute top-1/2 left-6 transform -translate-y-1/4"
        >
          <ArrowBackIosNew className="text-gray-800 text-[30px]" />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          className="flex overflow-x-scroll no-scrollbar py-2 space-x-4 bg-white md:w-[75%] rounded-[20px]"
        >
          {Advantages.map((Advantage) => (
            <Card
              key={Advantage.title}
              className="shadow-none relative min-w-full max-w-full bg-transparent"
            >
              <Box className="flex flex-col-reverse md:flex-row gap-2">
                <CardContent className="flex flex-col w-full items-end ">
                  <Typography
                    variant="h5"
                    className="text-gray-800 font-semibold"
                  >
                    {Advantage.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600  text-end text-[18px]  md:w-[60%]"
                  >
                    <li dir="rtl">{Advantage.itemOne}</li>
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600  text-end text-[18px]  md:w-[60%]"
                  >
                    <li dir="rtl">{Advantage.itemTwo}</li>
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600  text-end text-[18px]  md:w-[60%]"
                  >
                    <li dir="rtl">{Advantage.itemThree}</li>
                  </Typography>
                  <Button
                    variant="contained"
                    className="bg-[#6ec531] text-white font-medium rounded-full mt-2 px-8 py-2"
                  >
                    احصل علي نسختك التجربيه
                  </Button>
                </CardContent>
                <Image
                  className="flex w-full"
                  src={Advantage.image}
                  alt=""
                  width={200}
                  height={150}
                />
              </Box>
            </Card>
          ))}

          <IconButton
            onClick={() => handleScroll("right")}
            className="hidden md:flex absolute top-1/2 right-6 transform -translate-y-1/4"
          >
            <ArrowForwardIos className="text-gray-800 text-[30px]" />
          </IconButton>
        </Box>
      </Box>
      <Box className="text-center flex flex-col w-full items-center py-12">
        <Typography
          variant="h6"
          className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          مميزات حصريه
        </Typography>
        <Typography variant="h3" className="font-bold text-gray-800 mt-2">
          عزز منتجاتك مع مزايا ماي كاش
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 tex-[15px] font-semibold mt-4"
        >
          عزز اداء عمللك بستخدام الميزات المتقدمه التي يوفرها تطبيق ماي كاش
        </Typography>
      </Box>
      <Box className="flex flex-col gap-8 py-2">
        {AdvantagesPlus.map((Advantage, index) => (
          <Card
            key={Advantage.title}
            className="shadow-none  min-w-full max-w-full bg-transparent"
          >
            <Box
              className={`justify-between items-center w-full gap-10 ${
                index === 1
                  ? "flex-col md:flexrow-reverse"
                  : "flex-col md:flex-row"
              }`}
            >
              <CardContent className="flex flex-col w-full items-end ">
                <Typography
                  variant="h4"
                  className="text-[#6ec531] font-semibold"
                >
                  0{Advantage.number}
                </Typography>
                <Typography
                  variant="h5"
                  className="text-gray-800 font-semibold"
                >
                  {Advantage.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600 font-bold text-end text-[16px]"
                >
                  {Advantage.description}
                </Typography>
                <Button
                  variant="contained"
                  className="bg-[#6ec531] text-white font-medium rounded-full mt-2 px-8 py-2"
                >
                  احصل علي نسختك التجربيه
                </Button>
              </CardContent>
              <Image src={Advantage.image} alt="" width={450} height={250} />
            </Box>
          </Card>
        ))}

        <IconButton
          onClick={() => handleScroll("right")}
          className="hidden md:flex absolute top-1/2 right-6 transform -translate-y-1/4"
        >
          <ArrowForwardIos className="text-gray-800 text-[30px]" />
        </IconButton>
      </Box>
    </Box>
  );
}
