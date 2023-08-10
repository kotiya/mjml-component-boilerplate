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
    <Section backgroundColor="#DD685B">
      <Row>
        <Column>
          <Img src="https://mjml.io/assets/img/mjml-logo.png" width="100px" />
        </Column>
        <Column>
          <Text fontSize="24px" fontFamily="Arial, sans-serif" color="#FFFFFF">
            MJML rules! hello modified
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default ImageText;
