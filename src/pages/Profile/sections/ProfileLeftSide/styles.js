import styled from 'styled-components';

export const ProfileLeftSideStyles = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #B799FF;
  padding: 2rem;
`;
export const ProfileInformationContainer = styled.section`
display: flex;
align-items: center;
gap: 1rem;
margin: 10px 0;
`
export const ProfilePic = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #222;
  /* Add any additional styles for the profile picture */
`;

export const ProfileName = styled.h1`
  font-size: 2.8rem;
  color: #E6FFFD;
  /* Add any additional styles for the profile name */
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarButton = styled.button`
  display:flex;
  justify-content: space-between;
  text-align: left;
  cursor:pointer;
  border: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-weight:bold;
  background-color: #AEE2FF;
  &.active {
    background-color: #E6FFFD;
  }
  .icon {
    font-size: 2rem;
    color: black;
  }
`;
