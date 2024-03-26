import { Input } from "@chakra-ui/react";

const FormInput = ({ type, placeholder }) => {
  return (
    <Input
      pr="4.5rem"
      type={type}
      backgroundColor="#0f172a"
      placeholder={placeholder}
      borderRightRadius="5% 50%"
      borderLeftRadius="5% 50%"
      border="#0f172a"
      padding="10px"
    />
  );
};
export default FormInput;
