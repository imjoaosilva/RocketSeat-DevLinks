import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content:center;

  transition: background-image 0.5s;

  background-image: url(${props => props.theme.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
`

export const Content = styled.div`
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ProfileAvatar = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;

  transition: border 0.5s;

  border: ${props => props.theme.colors.profileborder};
`

export const ProfileName = styled.h1`
  color: ${props => props.theme.colors.title};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;

  margin-bottom: 24px;
`

export const Button = styled.button`

  width: 540px;
  height: 56px;

  outline: none;
  border: none;

  background: ${props => props.theme.colors.buttoncolor};
  border: ${props => props.theme.colors.buttonborder};
  backdrop-filter: blur(4px);

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.buttontext};

  border-radius: 8px;

  transition: opacity 0.5s;

  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
    transform: scale(0.99);
  }

  @media (max-width: 642px) {
    width: 90vw;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
  
  transition: opacity 0.5s;

  a {
    margin: 0 8px;

    &:hover {
      cursor: pointer;
      transform: scale(0.90);
    }
  }
  
`

export const WaterMark = styled.p`
  margin-top: 15px;
  color: ${props => props.theme.colors.title};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`
