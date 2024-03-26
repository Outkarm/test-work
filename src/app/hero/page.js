"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import Footer from "./components/Footer";
import { Center, Text, Button, Box, Progress } from "@chakra-ui/react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image from "next/image";
import YouTubeExamples from "./components/YouTubeExamples";
import FAQs from "./components/FAQs";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const dragAreaRef = useRef(null);
  const router = useRouter();

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    setLoading(true);

    const startTime = Date.now(); // Record the start time

    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedImage(e.target.result);
      localStorage.setItem("uploadedImage", e.target.result);
      setLoading(false);
      setImageUploaded(true);
    };

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime / 2000) * 100; // 2000 milliseconds timeout
      setUploadProgress(progress);

      if (progress < 100) {
        requestAnimationFrame(updateProgress); // Smooth progression
      } else {
        reader.readAsDataURL(file);
        setLoading(false);
        setImageUploaded(true);
        router.push("/convert");
      }
    };

    updateProgress(); // Start updating progress
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    dragAreaRef.current.style.border = "2px dashed #2ecc71"; // Change border color on drag enter
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    dragAreaRef.current.style.border = "2px dashed #7676f1"; // Restore border color on drag leave
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const dragArea = dragAreaRef.current;

    // Event listeners for drag and drop
    dragArea.addEventListener("dragover", handleDragOver);
    dragArea.addEventListener("dragenter", handleDragEnter);
    dragArea.addEventListener("dragleave", handleDragLeave);
    dragArea.addEventListener("drop", handleDrop);

    // Cleanup
    return () => {
      dragArea.removeEventListener("dragover", handleDragOver);
      dragArea.removeEventListener("dragenter", handleDragEnter);
      dragArea.removeEventListener("dragleave", handleDragLeave);
      dragArea.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Box
        padding={{ base: "90px 5% 20px 5%", md: "90px 7.2% 20px 7.2%" }} // Adjust padding for different screen sizes
        display="flex"
        flexDirection="column"
        gap="40px"
        backgroundColor="#0f172a"
      >
        <Center>
          <Text
            bgGradient="linear(to-r, #ff5f6d, #ffc371)"
            bgClip="text"
            fontSize={{ base: "1.5rem", md: "2.8rem" }}
            fontWeight="bold"
            display="inline-block"
            textAlign="center"
          >
            Convert Any Image to a Hand Drawing Video or Whiteboard Animated
            Video Style
          </Text>
        </Center>
        <Center>
          <Text
            color="#fff"
            w={{ base: "100%", md: "48%" }}
            display="inline-block"
            textAlign="center"
          >
            Turn your image into a Hand-Drawn Video! Just upload your image then
            pick your options.
          </Text>
        </Center>

        {/* implement a upload imagen and a drag and drop */}
        <Center>
          <Box
            ref={dragAreaRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            cursor="pointer"
            padding="50px"
            width={{ base: "100%", md: "35%" }} // Adjust width for different screen sizes
            minHeight="15vw"
            backgroundColor="#1b263b"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
            borderRadius="20px"
            border="2px dashed #7676f1"
            className="drop-area"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
              id="fileInput"
            />

            {loading ? (
              <Box position="relative" width="100%">
                <Progress
                  value={uploadProgress}
                  colorScheme="blue"
                  height="20px"
                  borderRadius="10px"
                  marginBottom="10px"
                />
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Uploaded Image"
                    width={300}
                    height={300}
                  />
                )}
              </Box>
            ) : imageUploaded ? (
              <>
                {selectedImage && (
                  <Box position="relative" width="100%">
                    <Image
                      src={selectedImage}
                      alt="Uploaded Image"
                      width={300}
                      height={300}
                    />
                    <IoCheckmarkCircleOutline
                      size="3rem"
                      color="#2ecc71"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                    />
                  </Box>
                )}
              </>
            ) : (
              <>
                <Button
                  colorScheme="blue"
                  backgroundColor="#4582ec"
                  border="#4582ec"
                  borderRadius="19.404px"
                  height="60px"
                  width="220px"
                  onClick={handleButtonClick}
                >
                  <Text color="">Upload Image</Text>
                </Button>
                <Text textAlign="center" color="">
                  Drag and Drop your image here. Higher image quality results in
                  better video quality.
                </Text>
              </>
            )}
          </Box>
        </Center>
        <Center>
          <Text
            color="#fff"
            textAlign="center"
            fontWeight="bold"
            fontSize={{ base: "1.5rem", md: "2.8rem" }}
          >
            Examples of Hand Drawing Animation Videos made using SpeedPaint :
          </Text>
        </Center>
        <Center>
          <YouTubeExamples />
        </Center>
        <Center>
          <FAQs />
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default Hero;
