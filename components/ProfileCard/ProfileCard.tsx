import { IUser } from "hooks/useFetch";
import { FunctionComponent } from "react";
import { intToString } from "utils/intToString";
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

type ProfileCardProps = {
  profileData: IUser;
};
const ProfileCard: FunctionComponent<ProfileCardProps> = ({ profileData }) => {
  return (
    <Container>
      <ContainerWrapper>
        <ContainerBanner>
          <ContainerCanvas url={profileData.backgroundImageUrl} />
        </ContainerBanner>
        <ProfileDetails>
          <ProfileDp>
            <ProfileCanvas url={profileData.profilePictureUrl} />
          </ProfileDp>
          <ProfileName>
            <ProfileHeader>
              {profileData.name}
              <ProfileHeaderSpan>{profileData.title}</ProfileHeaderSpan>
            </ProfileHeader>
          </ProfileName>
          <ProfileFollowersWrap>
            <ProfileFollow>
              <ProfileFollowHeader>
                {intToString(profileData.metrics.followers)}
                <ProfileFollowHeaderSpan>Followers</ProfileFollowHeaderSpan>
              </ProfileFollowHeader>
            </ProfileFollow>
            <ProfileFollow>
              <ProfileFollowHeader>
                {intToString(profileData.metrics.following)}
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
