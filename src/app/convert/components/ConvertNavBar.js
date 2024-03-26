import { useRouter } from "next/navigation";
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";

const ConvertNavBar = ({ isAuthenticated, onOpen }) => {
  const router = useRouter();
  const credit = 0;
  return (
    <Box
      bg="#0a101e"
      borderRadius="5px"
      p={3}
      h={{ base: "auto", md: "60px" }}
      w="99%"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <div
        style={{
          display: "flex",
          marginLeft: "2%",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/phoenix.png" alt="Phoenix" width={50} height={50} />
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
      {isAuthenticated ? (
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "left", md: "center" }}
          width={{ base: "auto", md: "20%" }}
          marginRight="1%"
        >
          <Text
            padding={{ base: "10px", md: "0" }}
            color="rgb(179, 187, 198)"
            _hover={{ color: "#fff" }}
            _active={{ color: "#fff" }}
          >
            Credit: {credit}
          </Text>
          <Text
            padding={{ base: "10px", md: "0" }}
            color="rgb(179, 187, 198)"
            _hover={{ color: "#fff" }}
            _active={{ color: "#fff" }}
            onClick={onOpen}
          >
            Buy Credits
          </Text>
          <Text
            padding={{ base: "10px", md: "0" }}
            color="rgb(179, 187, 198)"
            _hover={{ color: "#fff" }}
            _active={{ color: "#fff" }}
          >
            Logout
          </Text>
        </Box>
      ) : (
        <Box display="flex" gap="5px" marginRight="1%">
          <Button
            backgroundColor="#0a101e"
            borderRightRadius="25% 50%"
            borderLeftRadius="25% 50%"
            border="1px #4582ec solid"
            color="#4582ec"
            _hover={{ bg: "#4582ec", color: "#fff" }}
            onClick={() => {
              router.push("/signin");
            }}
          >
            Log in
          </Button>
          <Button
            backgroundColor="#4582ec"
            borderRightRadius="25% 50%"
            borderLeftRadius="25% 50%"
            border="1px #4582ec solid"
            color="#fff"
            _hover={{ bg: "#17a2b8", border: "3px #4582ec solid" }}
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default ConvertNavBar;
