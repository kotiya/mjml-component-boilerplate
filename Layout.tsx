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
        <Font href="https://fonts.googleapis.com/css?family=Roboto" />
      </Head>
      <Body>
        <Section>
          <Column>
            <Text color="green">I'm among stars</Text>
          </Column>
        </Section>
        <Section backgroundColor="#DD685B">
          <Row>
            <Column width="100px">
              <Img
                src="https://mjml.io/assets/img/mjml-logo.png"
                width="100px"
              />
            </Column>
            <Column>
              <Text fontSize="24px">MJML rules! hello modified</Text>
            </Column>
          </Row>
        </Section>
        <Section>
          <Column>
            <Text color="blue" fontSize="10px">
              A super nice layout component
            </Text>
          </Column>
        </Section>
      </Body>
    </Html>
  );
};

export default Layout;
