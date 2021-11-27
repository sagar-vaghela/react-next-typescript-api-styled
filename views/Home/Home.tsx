import { FunctionComponent } from "react";
import { FetchButton } from "@components/FetchButton";
import { LoadingPlaceholder } from "@components/LoadingPlaceholder";
import { ProfileCard } from "@components/ProfileCard";
import useFetch, { FetchProps } from "hooks/useFetch";
import { HomeContainer } from "./Home.styles";

const Home: FunctionComponent = () => {
  const { isLoading, responses, fetchData }: FetchProps = useFetch("user");

  const fetchUserProfile = async () => {
    fetchData();
  };

  return (
    <HomeContainer>
      {!isLoading && !responses && (
        <FetchButton fetchUserProfile={fetchUserProfile} />
      )}
      {isLoading && <LoadingPlaceholder />}
      {responses && !isLoading && <ProfileCard profileData={responses} />}
    </HomeContainer>
  );
};

export default Home;
