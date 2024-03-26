"use client";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@chakra-ui/react";
import ConvertNavBar from "./components/ConvertNavBar";
import Hands from "./components/Hands";
import SelectOptions from "./components/SelectOptions";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import PaymentCard from "./components/PaymentCard";
const Convert = () => {
  const [imageURL, setImageURL] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // // Function to convert Blob to Data URL
  // const blobToDataURL = (blob, callback) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   reader.onloadend = () => {
  //     callback(reader.result);
  //   };
  // };

  const isAuthenticated = false;

  useEffect(() => {
    const savedImageBlobUrl = localStorage.getItem("uploadedImage");
    if (savedImageBlobUrl) {
      setImageURL(savedImageBlobUrl);
    }
  }, []);

  const allSelectOptions = [
    { title: "FPS :", options: ["30 fps", "60 fps", "120 fps"] },
    {
      title: "Sketching Duration:",
      options: ["1s", "3s", "5s", "10s", "20s", "30s"],
    },
    {
      title: "Color fill Duration:",
      options: ["0s", "3s", "5s", "10s", "20s"],
    },
    { title: "Sequence Order", options: ["Auto", "Vertical top-to-bottom"] },
    { title: "Quality", options: ["SD", "HD"] },
  ];

  const formatOpt = [".mp4"];
  return (
    <>
      <Box
        display={{ base: "flex", md: "flex" }} // flex for mobile and block for larger screens
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          width={{ base: "100%", md: "75%" }}
          padding={{ base: "10px", md: "0px" }}
        >
          <Center marginTop="5px">
            <ConvertNavBar isAuthenticated={isAuthenticated} onOpen={onOpen} />
          </Center>
          <Center height="90vh">
            {/* image goes here */}
            {imageURL && (
              <Image src={imageURL} alt="Uploaded" width={600} height={300} />
            )}
          </Center>
        </Box>
        <Box
          bg="rgb(27, 38, 59)"
          height="100%"
          padding="40px 50px 40px 50px"
          width={{ base: "100%", md: "25%" }}
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Hands />
            {allSelectOptions.map((selectOpt, index) => (
              <SelectOptions
                key={index}
                title={selectOpt.title}
                options={selectOpt.options}
              />
            ))}
            <Checkbox iconColor="white" color="#b3bbc6">
              Add Fade out effect
            </Checkbox>
            <SelectOptions title="Format" options={formatOpt} />
          </div>
          <Center>
            <Button
              backgroundColor="#4582ec"
              border="#4582ec"
              color="#fff"
              fontSize="12px"
              borderRadius="15.92px"
              width="65%"
              _hover={{ bg: "blue" }}
              _active={{ border: "#4582ec 5px solid" }}
            >
              {isAuthenticated
                ? "Animate (Costs 1 credit)"
                : "Sign in to use this feature"}
            </Button>
          </Center>
        </Box>
      </Box>
      {/* pop up */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#1b263b" color="#b3bbc6" margin="auto">
          <ModalHeader>Subscription</ModalHeader>
          <ModalCloseButton />
          <hr />
          <ModalBody>
            <Text style={{ marginBottom: "40px" }}>
              Choose your subscription plan to access SpeedPaint with unlimited
              credits :
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "60px",
              }}
            >
              <PaymentCard duration="Monthly" price="9.0" />
              <PaymentCard duration="Yearly" price="6.0" />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Convert;
