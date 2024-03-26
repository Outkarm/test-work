import { Text } from "@chakra-ui/react";
import Question from "./Question";
const FAQs = () => {
  const QAs = [
    {
      question: "What is Speedpaint?",
      answer:
        "Speedpaint is an innovative AI-based application that transforms any image into a captivating hand-drawn video, reminiscent of whiteboard animation videos.",
    },
    {
      question: "Wasn't Speedpaint previously available in Canva?",
      answer:
        "Yes, that's correct. Speedpaint was initially integrated into Canva as 'SpeedPaint Canva App' before being improved and offered as a standalone application.",
    },
    {
      question: "What are the pricing details for Speedpaint?",
      answer:
        "Speedpaint operates on a subscription model, priced at $9 per month. Users enjoy unlimited access to the application's features and content, with the flexibility to cancel their subscription at any time.",
    },
    {
      question: "Can users try Speedpaint before committing to a subscription?",
      answer:
        "Currently, Speedpaint offers a paid subscription model. However, we may consider introducing trial periods or promotional offers in the future to allow users to experience the app's capabilities before subscribing.",
    },
    {
      question:
        "Can users easily transition from the Canva Speedpaint app to the standalone Speedpaint application?",
      answer:
        "Yes, users familiar with the Canva Speedpaint app will find an easy transition to the standalone Speedpaint application. The core functionality and familiar interface remain consistent, ensuring a good user experience.",
    },
    {
      question: "Will Speedpaint be reintegrated into the Canva app again?",
      answer:
        "Currently, Speedpaint exists as a standalone version, but there is a possibility that it will be integrated into Canva again in the future. We are continually evaluating opportunities for integration and improvements to enhance user experience. Rest assured, we will keep you updated on any developments regarding Speedpaint's integration with the Canva app. Stay tuned for the latest announcements and updates.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "#1b263b",
        width: "100%",
      }}
    >
      <Text
        color="#fff"
        textAlign="center"
        fontWeight="extrabold"
        fontSize="1.6rem"
      >
        Frequently Asked Questions (FAQs)
      </Text>
      <div>
        {" "}
        {QAs.map((QA, index) => (
          <Question key={index} question={QA.question} answer={QA.answer} />
        ))}
      </div>
    </div>
  );
};
export default FAQs;
