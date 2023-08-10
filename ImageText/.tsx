
  import React from 'react';

  const ImageText = ({ children }) => {

    return <div dangerouslySetInnerHTML={{ __html: <div style="">
        
      </div> }} >{ children }</div>;
  };

  export default ImageText;
  