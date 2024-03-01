import { Container, styled } from "@mui/material";
import PersonCard from "./PersonCard";

import { useAppContext } from "../store/AppContext";

const CustomContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
});

const RightContainer: React.FC = () => {
  const { clickedPerson } = useAppContext();
  return (
    <CustomContainer>
      {!!clickedPerson.length && <PersonCard />}
    </CustomContainer>
  );
};

export default RightContainer;
