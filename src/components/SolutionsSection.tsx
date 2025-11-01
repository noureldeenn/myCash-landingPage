import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const solutions = [
  {
    title: "حلول نقاط البيع",
    description:
      "ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ",
    image: "/solutionImage.png",
  },
  {
    title: "حلول المبيعات",
    description:
      "ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ",
    image: "/solutionImage.png",
  },
  {
    title: "حلول الذكاء الاصطناعي",
    description:
      "ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ",
    image: "/solutionImage.png",
  },
];

const visions = [
  {
    titleOne: " البيع عبر الكاميرات",
    descriptionOne:
      " نظام ذكاء اصطناعي يبيع التعرف على المنتجات وتسلسل السلع، يعمل بسهولة لتحديد الأسعار المناسبة ومتابعة حركة السوق من خلال تقنيات الكاميرا الحديثة.",
    imageOne: "/visionOne.png",
    titleTwo: " الحضور والتدريبات",
    descriptionTwo:
      " نظام تسجيل الحضور المتقدم يعمل بالذكاء الاصطناعي للتعرف على الوجه، ما يضمن أمانًا أكبر ويقدم رؤى استباقية لتحسين الأداء وتنظيم أوقات الموظفين.",
    imageTwo: "/visionTwo.png",
  },
  {
    titleOne: "قياس عدد زياره الغملاء",
    descriptionOne:
      "ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ",
    imageOne: "/visionOne.png",
    titleTwo: "تحليل الاعمار والجنس",
    descriptionTwo:
      "ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ويم إيبسوم هو ببساطة نص شكلي. ",
    imageTwo: "/visionTwo.png",
  },
];
export default function SolutionsSection() {
  return (
    <Box id="solutions" className=" pb-12">
      <Box className=" py-12 px-4 md:px-24">
        <Box className="text-center flex flex-col w-full items-center">
          <Typography
            variant="h6"
            className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            اكتشف حلولنا
          </Typography>
          <Typography variant="h3" className="font-bold text-gray-800 mt-2">
            تحكم في مدفوعات متجرك بسهولة مع حلول ماي كاش
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 md:w-[30%] tex-[15px] font-semibold mt-4"
          >
            ويم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
            وليس المحتوى.
          </Typography>
        </Box>

        <Grid container spacing={2} className="mt-10">
          {solutions.map((solution) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={solution.title}>
              <Card className="shadow-none rounded-lg p-4 overflow-hidden bg-gray-50">
                <CardMedia
                  component="img"
                  height="140"
                  image={solution.image}
                  alt={solution.title}
                  className="object-cover"
                />
                <CardContent className="flex flex-col items-center gap-2">
                  <Typography variant="h5" className="font-bold text-gray-800">
                    {solution.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600 mt-2 text-center font-medium"
                  >
                    {solution.description}
                  </Typography>
                </CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  justifyContent="center"
                  className="pt-4 w-full"
                >
                  <Button
                    variant="outlined"
                    className="bg-white text-[#6ec531] border-[#6ec531] font-medium rounded-full px-4 py-2"
                  >
                    اعرف المزيد
                  </Button>
                  <Button
                    variant="contained"
                    className="bg-[#6ec531] text-white font-medium rounded-full px-4 py-2"
                  >
                    احصل علي نسختك التجربيه
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className=" py-12 bg-gray-50">
        <Box className="text-center flex flex-col w-full items-center">
          <Typography
            variant="h6"
            className=" bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            رؤية جديدة لإدارة الأعمال
          </Typography>
          <Typography variant="h4" className="font-bold text-gray-800 mt-2">
            حلول الذكاء الاصطناعي المتقدمة
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 md:w-[30%] tex-[15px] font-semibold mt-4"
          >
            اجعل أعمالك ذكية مع حلول الذكاء الاصطناعي الرائدة، وكن مستعدًا
            لمستقبل الأعمال الرقمية!
          </Typography>
        </Box>

        <Stack className="flex flex-col gap-2 pt-8">
          {visions.map((vision, index) => (
            <Card
              key={vision.titleOne}
              className="shadow-none  px-8 overflow-hidden bg-transparent"
            >
              <Box
                className={`${
                  index === 0 ? "border-b border-gray-200" : ""
                } py-4 flex flex-col md:flex-row`}
              >
                <Stack direction="row" spacing={1} className="md:w-1/2">
                  <CardContent className="flex flex-col w-full items-end gap-2">
                    <Typography
                      variant="h5"
                      className="text-gray-800 font-semibold"
                    >
                      {vision.titleTwo}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-gray-600 mt-2 text-end text-[18px]  w-[80%]"
                    >
                      {vision.descriptionTwo}
                    </Typography>
                  </CardContent>
                  <Image
                    src={vision.imageTwo}
                    alt=""
                    width={200}
                    height={150}
                  />
                </Stack>
                <Stack direction="row" spacing={1} className="md:w-1/2">
                  <CardContent className="flex flex-col w-full items-end gap-2">
                    <Typography
                      variant="h5"
                      className="text-gray-800 font-semibold"
                    >
                      {vision.titleOne}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-gray-600 mt-2 text-end text-[18px]  w-[80%]"
                    >
                      {vision.descriptionOne}
                    </Typography>
                  </CardContent>
                  <Image
                    src={vision.imageOne}
                    alt=""
                    width={200}
                    height={150}
                  />
                </Stack>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
