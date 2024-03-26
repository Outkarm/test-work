import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const Question = ({ question, answer }) => {
  return (
    <Accordion
      border="1px solid #1b263b"
      //   defaultIndex={[0]}
      allowMultiple={true}
    >
      <AccordionItem>
        <h2>
          <AccordionButton
            _expanded={{
              bg: "#475d84",
              color: "white",
              border: "#475d84 5px solid",
            }}
            _hover={{ bg: "#193c7f" }}
            backgroundColor="#080f1c"
            h={{ base: "64px", md: "56px" }}
          >
            <Box
              as="span"
              flex="1"
              fontSize={{ base: "0.8rem", md: "1.2rem" }}
              fontWeight="bold"
              color="#fff"
              textAlign="left"
            >
              {question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          color="#b3bbc6"
          fontSize={{ base: "0.8rem", md: "1.2rem" }}
          fontWeight="bold"
        >
          {answer}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Question;
