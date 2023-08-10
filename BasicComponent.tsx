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
  if (!window.mjml) {
    return "";
  }

  return (
    <mjml>
      <mj-body>
        <mj-container>
          <mj-section>
            <mj-column>
              <mj-text>This is the BasicComponent.</mj-text>
            </mj-column>
          </mj-section>
        </mj-container>
      </mj-body>
    </mjml>
  );
};

export default BasicComponent;
