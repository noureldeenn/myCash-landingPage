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

export default function PackagesSection() {
  return (
    <Box id="packages" className=" py-12 px-24">
      <Box className="text-center flex flex-col w-full items-center">
        <Typography variant="h6" className="text-indigo-500">
          اكتشف حلولنا
        </Typography>
        <Typography variant="h4" className="font-bold text-gray-800 mt-2">
          تحكم في مدفوعات متجرك بسهولة مع حلول ماي كاش
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 w-[30%] tex-[15px] font-semibold mt-4"
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
  );
}
