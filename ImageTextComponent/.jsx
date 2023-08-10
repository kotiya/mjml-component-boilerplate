
  import React from 'react';

  const ImageTextComponent = ({ children }) => {

    return <div dangerouslySetInnerHTML={{ __html: <div style="">
        
      </div> }} >{ children }</div>;
  };

  export default ImageTextComponent;
  