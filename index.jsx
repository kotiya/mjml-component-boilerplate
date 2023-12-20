import React from 'react';
import { Button, Column, Container, Head, Heading, Text } from '@react-email/components';

const EmailTemplate = () => {
  return (
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <Head>
        <title>My Email Template</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body style={{wordSpacing: 'normal'}}>
        <Container maxWidth={600} textAlign='center'>
          <Column width={600}>
            <Text fontSize={0} lineHeight='0px' msoLineHeightRule='exactly'>
              <Container maxWidth={600} role='presentation' style={{width: '100%'}}>
                <Section>
                  <Text style={{padding: '20px 0'}}>
                    <Container role='presentation' maxWidth={600}>
                      <Column style={{verticalAlign: 'top', width: '600px'}}>
                        <Container role='presentation' style={{verticalAlign: 'top', width: '100%'}}>
                        </Container>
                      </Column>
                    </Container>
                  </Text>
                </Section>
              </Container>
            </Text>
          </Column>
        </Container>
      </body>
    </html>
  );
};

export default EmailTemplate;