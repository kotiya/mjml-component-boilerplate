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
        <Font href="https://fonts.googleapis.com/css?family=Roboto" />
      </Head>
      <Body>
        <Section>
          <Column>
            <Container>
              <Text color="green">I'm among stars</Text>
            </Container>
          </Column>
        </Section>
        <Section backgroundColor="#DD685B">
          <Column>
            <Container>
              <Row>
                <Column>
                  <Img
                    src="https://mjml.io/assets/img/mjml-logo.png"
                    width="100px"
                  />
                </Column>
                <Column>
                  <Text fontSize="24px">MJML rules! hello modified</Text>
                </Column>
              </Row>
            </Container>
          </Column>
        </Section>
        <Section>
          <Column>
            <Container>
              <Text color="blue" fontSize="10px">
                A super nice layout component
              </Text>
            </Container>
          </Column>
        </Section>
      </Body>
    </Html>
  );
};

export default BasicComponent;
