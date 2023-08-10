import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const Layout = () => {
  return (
    <Html>
      <Head>
        <Font />
        <Tailwind />
      </Head>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Heading>Layout Component</Heading>
                <Text>This is the Layout component.</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Button>Click me</Button>
              </Column>
            </Row>
            <Row>
              <Column>
                <Img src="https://example.com/image.jpg" alt="Example Image" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Link href="https://example.com">Visit Example Website</Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Hr />
              </Column>
            </Row>
            <Row>
              <Column>
                <Preview>Preview Text</Preview>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Layout;
