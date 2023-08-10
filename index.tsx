import * as React from 'react';
    import { HTML,Body,Section,Column,Text } from '@react-email/components';
    
    export function Index.mjml(props) {
      const { url } = props;
    
      return (
        <HTML><Body><Section><Column><div styles="[object Object]">I'm among stars</div></Column></Section><div styles="[object Object]" attributes="[object Object]">MJML rules! hello modified</div><div><Text styles="[object Object]">A super nice layout component</Text></div></Body></HTML>
      );
    }
    
    export default Index.mjml;