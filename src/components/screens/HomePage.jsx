import React from "react";
import styled from "styled-components";
function HomePage({ color }) {
  return (
    <Container>
      <Heading color={color}>HomePage</Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi deleniti
        eos animi enim temporibus saepe! Vel, quis atque! Iure minus voluptatum
        ullam libero tempora ipsum vero itaque maxime nisi beatae?
      </p>
    </Container>
  );
}

const Container = styled.div``;
const Heading = styled.h1`
color: ${(props) => (props.color ? props.color : "blue")};
  border: 1px solid;
`;

export default HomePage;
