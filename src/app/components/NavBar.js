import { useRouter } from "next/navigation";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  const router = useRouter();
  return (
    <Box
      bg="#0a101e"
      p={3}
      w="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={999}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "6%",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/phoenix.png" alt="Phoenix" width={60} height={60} />
        <Text
          bgGradient="linear(to-r, #5fcfff, #fd71ff)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
          display="inline-block"
        >
          SpeedPaint
        </Text>
      </div>
    </Box>
  );
};
export default NavBar;
