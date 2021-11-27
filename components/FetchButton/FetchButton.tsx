import { FunctionComponent } from "react";
import { ButtonContainer, ButtonText } from "./FetchButton.styles";

type FetchButtonProps = {
  fetchUserProfile(): void;
};
const FetchButton: FunctionComponent<FetchButtonProps> = ({
  fetchUserProfile,
}) => {
  return (
    <ButtonContainer onClick={fetchUserProfile}>
      <ButtonText>Fetch</ButtonText>
    </ButtonContainer>
  );
};

export default FetchButton;
