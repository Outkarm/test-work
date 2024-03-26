import { useState } from "react";
import { Text } from "@chakra-ui/react";
import Image from "next/image";

const Hands = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Text color="#b3bbc6" fontWeight="bold" fontSize="large">
        Hand
      </Text>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            style={{
              border: selectedImage === index ? "2px solid blue" : "none",
              borderRadius: "5px",
              cursor: "pointer",
              height: "50px",
              overflow: "hidden",
            }}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={`/hand${index}.png`}
              alt={`Hand ${index}`}
              width={48}
              height={48}
              layout="fixed"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hands;
