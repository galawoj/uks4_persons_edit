import { styled, Container } from "@mui/material";
import PersonThumb from "./PersonThumb";

const CustomContainer = styled(Container)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  alignContent: "flex-start",
  width: "30%",
});

const LeftContainer: React.FC = () => {
  return (
    <CustomContainer>
      <PersonThumb />
    </CustomContainer>
  );
};

export default LeftContainer;
