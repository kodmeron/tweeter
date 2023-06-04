import styled from 'styled-components';

export const ProfileLeftSideStyles = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #B799FF;
  padding: 2rem;
  @media(min-width: 768px) {
    min-width: 450px;
  }
`;
export const ProfileInformationContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
margin: 10px 0;
@media (min-width: 768px) {
  flex-direction: row;
}
`
export const ProfilePic = styled.div`
& > img {

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #222;
  object-fit:cover;
}
`;

export const ProfileName = styled.h1`
  font-size: 2.8rem;
  color: #E6FFFD;
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
