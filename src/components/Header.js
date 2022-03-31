import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button> Try it for Free </Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem</h1>
            <p>
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
