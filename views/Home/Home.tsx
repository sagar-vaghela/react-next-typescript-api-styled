import { FunctionComponent } from "react";
import { FetchButton } from "@components/FetchButton";
import { LoadingPlaceholder } from "@components/LoadingPlaceholder";
import { ProfileCard } from "@components/ProfileCard";
import { HomeContainer } from "./Home.styles";

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <FetchButton />
      {/* <LoadingPlaceholder /> */}
      {/* <ProfileCard /> */}
    </HomeContainer>
  );
};

export default Home;
