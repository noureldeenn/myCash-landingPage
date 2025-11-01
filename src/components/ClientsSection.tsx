import { Stack } from "@mui/material";
import Image from "next/image";

const items = [
  "/clientOne.png",
  "/clientTwo.png",
  "/clientThree.png",
  "/clientFour.png",
  "/clientFive.png",
  "/clientFour.png",
];

export default function ClientsSection() {
  return (
    <Stack
      direction="row-reverse"
      justifyContent="space-between"
      className="px-24 py-4 w-full bg-[#f9fbfa]"
    >
      {items.map((item, index) => (
        <Image key={index} src={item} alt="" width={50} height={100} />
      ))}
    </Stack>
  );
}
