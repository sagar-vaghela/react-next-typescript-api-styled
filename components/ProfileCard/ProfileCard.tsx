import { FunctionComponent } from "react";
import {
  ProfileFollowAnchore,
  ProfileFollowButton,
  ProfileFollowHeaderSpan,
  ProfileFollow,
  ProfileFollowHeader,
  ProfileHeader,
  ProfileHeaderSpan,
  Container,
  ContainerWrapper,
  ContainerBanner,
  ContainerCanvas,
  ProfileDetails,
  ProfileDp,
  ProfileCanvas,
  ProfileName,
  ProfileFollowersWrap,
} from "./ProfileCard.styles";

type ProfileCardProps = {};
const ProfileCard: FunctionComponent<ProfileCardProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ContainerBanner>
          <ContainerCanvas />
        </ContainerBanner>
        <ProfileDetails>
          <ProfileDp>
            <ProfileCanvas />
          </ProfileDp>
          <ProfileName>
            <ProfileHeader>
              John Doe
              <ProfileHeaderSpan>FrontEnd Developer</ProfileHeaderSpan>
            </ProfileHeader>
          </ProfileName>
          <ProfileFollowersWrap>
            <ProfileFollow>
              <ProfileFollowHeader>
                23k
                <ProfileFollowHeaderSpan>Followers</ProfileFollowHeaderSpan>
              </ProfileFollowHeader>
            </ProfileFollow>
            <ProfileFollow>
              <ProfileFollowHeader>
                23k
                <ProfileFollowHeaderSpan>Following</ProfileFollowHeaderSpan>
              </ProfileFollowHeader>
            </ProfileFollow>
          </ProfileFollowersWrap>
          <ProfileFollowButton>
            <ProfileFollowAnchore>Follow</ProfileFollowAnchore>
          </ProfileFollowButton>
        </ProfileDetails>
      </ContainerWrapper>
    </Container>
  );
};

export default ProfileCard;
