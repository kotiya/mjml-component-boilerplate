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
    <Body>
      <Container>
        <Head>
          <Font />
        </Head>
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
      </Container>
    </Body>
  );
};

export default Layout;
