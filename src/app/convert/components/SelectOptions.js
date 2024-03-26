import { Select, Text } from "@chakra-ui/react";

const SelectOptions = ({ title, options }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Text color="#b3bbc6" fontWeight="bold" fontSize="large">
        {title}
      </Text>
      <Select
        // placeholder={options[0]}
        backgroundColor="#0a101e"
        color="#b3bbc6"
        borderRadius="12px"
        border="none"
        fontSize="large"
        _expanded={{ border: "5px rgba(0, 0, 0, 0.1) solid" }}
      >
        {options.map((option, index) => (
          <option
            key={index}
            style={{
              backgroundColor: "#0a101e",
              color: "#b3bbc6",
              fontSize: "large",
              padding: "10px",
            }}
            value={option}
          >
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
};
export default SelectOptions;
