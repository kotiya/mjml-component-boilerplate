import * as React from 'react';
    import { Html, Body, Section, Column, Text } from '@react-email/components';
    
    export function IndexEmail(props) {
      const { url } = props;
    
      return (
        <Html><Body><Section><Column><div style={"color":"green"}>I'm among stars</div></Column></Section><div style={"backgroundColor":"#DD685B","fontSize":"24px"} attributes={"imageSrc":"https://mjml.io/assets/img/mjml-logo.png","imageWidth":"100px","imagePosition":"left"}>MJML rules! hello modified</div><div><Text style={"color":"blue","fontSize":"10px"}>A super nice layout component</Text></div></Body></Html>
      );
    }
    
    export default IndexEmail;