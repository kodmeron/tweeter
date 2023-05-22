import styled from "styled-components";

export const ProfileStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: calc(100vh - var(--navbar-height));

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr;
  }
`;
