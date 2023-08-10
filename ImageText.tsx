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

const ImageText = () => {
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
                <Img src="https://example.com/image.jpg" alt="Image" />
              </Column>
              <Column>
                <Heading>Text</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Button>Read More</Button>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ImageText;
