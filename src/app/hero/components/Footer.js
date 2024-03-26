import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#000" p={3} padding={"30px 8%"} w="100%">
      <Box
        display={{ base: "flex", md: "flex" }} // flex for mobile and block for larger screens
        flexDirection={{ base: "column", md: "row" }} // column for mobile and row for larger screens
        gap={{ base: "10px", md: "30%" }} // 10px gap for mobile and 30% for larger screens
        width="100%"
      >
        <ul style={{ listStyle: "none", color: "#8c8c8c" }}>
          <li className="list-head" style={{ color: "#fff", padding: "5px" }}>
            Social
          </li>
          <li className="list-item" style={{ padding: "5px" }}>
            Twitter
          </li>
          <li className="list-item" style={{ padding: "5px" }}>
            Discord
          </li>
        </ul>
        <ul style={{ listStyle: "none", color: "#8c8c8c", padding: "5px" }}>
          <li className="list-head" style={{ color: "#fff", padding: "5px" }}>
            Legal
          </li>
          <li className="list-item" style={{ padding: "5px" }}>
            Terms and Conditions
          </li>
          <li className="list-item" style={{ padding: "5px" }}>
            Privacy
          </li>
          <li className="list-item" style={{ padding: "5px" }}>
            Contact Us
          </li>
        </ul>
      </Box>
      <Box>
        <Text textAlign="center" padding="10px" color="#fff">
          © 2023 SpeedPaint. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};
export default Footer;
