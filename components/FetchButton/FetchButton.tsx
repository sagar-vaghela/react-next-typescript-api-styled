import { FunctionComponent } from "react";
import { ButtonContainer, ButtonText } from "./FetchButton.styles";

type FetchButtonProps = {};
const FetchButton: FunctionComponent<FetchButtonProps> = () => {
  const fetchUserProfile = () => {
    console.log("fetchUserProfile");
  };

  return (
    <ButtonContainer onClick={fetchUserProfile}>
      <ButtonText>Fetch</ButtonText>
    </ButtonContainer>
  );
};

export default FetchButton;
