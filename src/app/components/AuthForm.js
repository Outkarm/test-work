import { Text, FormControl, Button, Link, Box } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { FcGoogle } from "react-icons/fc";

const AuthForm = ({ signup }) => {
  return (
    <Box
      w={{ base: "90%", md: "25%" }}
      h={{ base: "85%", md: "80%" }}
      bg="#1b263b"
      p="40px 20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        color="rgb(179, 187, 198)"
        textAlign="center"
        fontWeight="extrabold"
        fontSize="2.5rem"
      >
        {signup ? "Sign Up" : "Sign in"}
      </Text>
      <Text color="rgb(179, 187, 198)" textAlign="center">
        {signup
          ? "Create a new account"
          : "Sign in to your account to continue"}
      </Text>
      <Button
        bg="rgba(0, 0, 0, 0)"
        border="1px rgb(52, 58, 64) solid"
        color="#fff"
        p="10px"
        leftIcon={<FcGoogle style={{ fontSize: "30px" }} />}
        borderRightRadius="10% 50%"
        borderLeftRadius="10% 50%"
        _hover={{
          bg: "rgba(0, 0, 0, 0.3)",
          border: "5px rgb(52, 58, 64) solid",
        }}
        _active={{
          bg: "rgba(0, 0, 0, 0.3)",
          border: "5px rgb(52, 58, 64) solid",
        }}
      >
        Sign in with Google
      </Button>
      <Text color="rgb(179, 187, 198)" textAlign="center">
        Or, use your email instead.
      </Text>
      <FormControl display="flex" flexDirection="column" gap="30px">
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        {signup && <FormInput type="password" placeholder="Confirm Password" />}
      </FormControl>
      <Button
        bg="#4582ec"
        w="30%"
        borderRightRadius="20% 50%"
        borderLeftRadius="20% 50%"
        border="1px #4582ec solid"
        color="#fff"
        _hover={{ bg: "#17a2b8", border: "3px #4582ec solid" }}
      >
        {signup ? "Register" : "Sign in"}
      </Button>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text color="rgb(179, 187, 198)">
          {signup
            ? "Already have an account? Sign in"
            : "Don't have an account?"}
        </Text>
        <Link
          color="blue"
          textDecoration="underline"
          href={signup ? "/signin" : "/signup"}
        >
          {signup ? "Sign in" : "Sign Up"}
        </Link>
      </Box>
    </Box>
  );
};
export default AuthForm;
