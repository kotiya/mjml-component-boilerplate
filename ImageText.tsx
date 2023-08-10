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
    <Section>
      <Container>
        <Row>
          <Column>
            <Img src="https://example.com/image.jpg" alt="Image" />
          </Column>
          <Column>
            <Heading>Text</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              justo nec nisl aliquam tincidunt. Nulla facilisi. Sed euismod,
              nunc id aliquet tincidunt, nunc nunc tincidunt urna, id lacinia
              nunc nunc id nunc.
            </Text>
            <Button>Read More</Button>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default ImageText;
