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

const BasicComponent = () => {
  return (
    <Html>
      <Head>
        <Font />
      </Head>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Heading>Basic Component</Heading>
                <Text>
                  This is a basic component using @react-email/components.
                </Text>
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
                <Link href="https://example.com">Visit example.com</Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Hr />
              </Column>
            </Row>
            <Row>
              <Column>
                <Text>Some more text</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default BasicComponent;
