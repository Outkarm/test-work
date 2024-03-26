import { Button, Center, Text } from "@chakra-ui/react";

const PaymentCard = ({ duration, price }) => {
  return (
    <div
      style={{
        width: "45%",
        border: "1px solid rgb(69, 130, 236)",
        borderRadius: "3px",
      }}
    >
      <Center backgroundColor="rgb(69, 130, 236)">
        <Text fontSize="1.65rem" fontWeight="400" padding="10px">
          {duration}
        </Text>
      </Center>
      <Center>
        <Text fontSize="2.75rem" fontWeight="700" padding="10px">
          ${price}
        </Text>
      </Center>
      <Center padding="10px">
        <Button
          width="100%"
          backgroundColor="#4582ec"
          borderRightRadius="15% 50%"
          borderLeftRadius="15% 50%"
          border="1px #4582ec solid"
          color="#fff"
          _hover={{ bg: "#17a2b8", border: "3px #4582ec solid" }}
        >
          Subscribe
        </Button>
      </Center>
    </div>
  );
};
export default PaymentCard;
