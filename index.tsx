import * as React from 'react';
    import { HTML,Body,Section,Column,Text } from '@react-email/components';
    
    export function Index.mjml(props) {
      const { url } = props;
    
      return (
        <HTML><Body><Section><Column><div styles={"color":"green"}>I'm among stars</div></Column></Section><div styles={"backgroundColor":"#DD685B","fontSize":"24px"} attributes={"imageSrc":"https://mjml.io/assets/img/mjml-logo.png","imageWidth":"100px","imagePosition":"left"}>MJML rules! hello modified</div><div><Text styles={"color":"blue","fontSize":"10px"}>A super nice layout component</Text></div></Body></HTML>
      );
    }
    
    export default Index.mjml;