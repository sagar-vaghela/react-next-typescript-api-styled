import { styled } from "@styles/index";

export const Container = styled.div`
  display: block;
  padding: 50px 0;
  position: relative;
`;

export const ContainerWrapper = styled.div`
  background: #fff;
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.2);
  font-size: 0;
`;

export const ContainerBanner = styled.div``;

interface IUrl {
  url: string;
}

export const ContainerCanvas = styled.canvas<IUrl>`
  background-image: url(${(props) => props.url});
  display: block;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
  border-radius: 10px 10px 0 0;
`;

export const ProfileDetails = styled.div`
  display: block;
  padding: 100px 30px 20px;
  position: relative;
`;

export const ProfileDp = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  max-width: 150px;
  margin: 0 auto;
  position: absolute;
  top: -68px;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ProfileCanvas = styled.canvas<IUrl>`
  width: 150px !important;
  height: 150px;
  background-image: url(${(props) => props.url});
  display: block;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
  border-radius: 50%;
  border: 3px solid #fff;
`;

export const ProfileName = styled.div`
  display: block;
  text-align: center;
  z-index: 5;
  position: relative;
  margin-top: 20px;
`;

export const ProfileHeader = styled.h2`
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 1;
  color: #2d303a;
  margin: 0;
`;

export const ProfileHeaderSpan = styled.span`
  display: block;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.5px;
  margin-top: 5px;
  font-weight: 400;
`;

export const ProfileFollowersWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  position: relative;
`;

export const ProfileFollow = styled.div`
  width: 50%;
  text-align: center;
  display: block;
  margin: 20px 0;
`;

export const ProfileFollowHeader = styled.h2`
  color: #000;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const ProfileFollowHeaderSpan = styled.span`
  color: #666;
  font-size: 13px;
  display: block;
  margin-top: 5px;
  font-weight: 300;
`;

export const ProfileFollowButton = styled.span`
  display: block;
  z-index: 5;
  position: relative;
  margin-bottom: 20px;
`;

export const ProfileFollowAnchore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 50px;
  background: #000;
  color: #fff;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
`;
