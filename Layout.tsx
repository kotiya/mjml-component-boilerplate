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
  if (!mj - layout) {
    return "";
  }

  return (
    <Container>
      <Head>
        <Font href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Body>
        <Section>
          <Row>
            <Column>
              <Heading>My Email Layout</Heading>
              <Text>This is the content of my email layout.</Text>
              <Button>Click me</Button>
              <Img src="https://example.com/image.jpg" alt="Example Image" />
              <Link href="https://example.com">Visit our website</Link>
              <Hr />
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default Layout;
