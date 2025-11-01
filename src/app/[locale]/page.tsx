import AdvantageSection from "@/components/AdvantageSection";
import AiComponent from "@/components/AiComponent";
import ClientsSection from "@/components/ClientsSection";
import Contact from "@/components/Contact";
import SolutionsSection from "@/components/SolutionsSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box className="min-h-[80vh] flex flex-col justify-between">
      <ClientsSection />
      <SolutionsSection />
      <AdvantageSection />
      <AiComponent />
      <Contact />
    </Box>
  );
}
