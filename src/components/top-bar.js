import * as React from 'react';
import styled from 'styled-components';
import { Input as InputAntd } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import bareksaLogo from '../assets/icons/bareksa.svg';
import bellLogo from '../assets/icons/bell.svg';
import settingsLogo from '../assets/icons/settings.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Input = styled(InputAntd)`
  margin-right: 1.5rem;
`;

const LogoWrapper = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #91919110;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;

  & span {
    font-weight: 700;
  }
`;

const HeaderIconWrapper = styled.div`
  padding: .3rem;
  cursor: pointer;
  margin-right: 2rem;
`;

const BellLogoWrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: .3rem;
  cursor: pointer;
`;

const NotificationAlert = styled.div`
  position: absolute;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #C25B3A;
  top: 0;
  right: 0;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & p {
    margin: 0;
  }

  & div {

  }
`;

const UserFullName = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const UserLocation = styled.p`
  color: #9C9C9C;
`;

const LeftHeaderComponents = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RightHeaderComponents = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: .3rem;

  & div {
    margin: 0 .3rem;
  }
`;

const SuffixComponent = styled(SearchOutlined)`
  font-size: 1.25rem;
`;

const Suffix = (onClick) => <SuffixComponent onClick={onClick} />;

function Header() {
  return (
    <Container>
      <LeftHeaderComponents>
        <HeaderIconWrapper>
          <img src={bareksaLogo} alt="Bareksa" />
        </HeaderIconWrapper>
        <UserInfoWrapper>
          <UserLogo />
          <div>
            <UserFullName>
              Reinhart. H
            </UserFullName>
            <UserLocation>
              Kemang, Jakarta
            </UserLocation>
          </div>
        </UserInfoWrapper>
      </LeftHeaderComponents>
      <RightHeaderComponents>
        <Input
          // onChange={handleChange}
          // value={key}
          placeholder="Search text"
          suffix={Suffix()}
        />
        <BellLogoWrapper>
          <img src={bellLogo} alt="" />
          <NotificationAlert />
        </BellLogoWrapper>
        <HeaderIconWrapper>
          <img src={settingsLogo} alt="" />
        </HeaderIconWrapper>
      </RightHeaderComponents>
    </Container>
  )
}

function UserLogo() {
  return (
    <LogoWrapper>
      <span>RH</span>
    </LogoWrapper>
  );
}

export default Header;