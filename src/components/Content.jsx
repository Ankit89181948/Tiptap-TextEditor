import React, { useState } from 'react';
import Tiptap from '../Tiptap';
import ShowContent from './ShowContent';

const Content = () => {

  const [htmlContent, setHtmlContent] = useState('');
  
  const handleContentSave = (html) => {
    setHtmlContent(html);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          {/* Tiptap Editor */}
          <Tiptap onContentSave={handleContentSave} />
        </div>
      </div>

      <hr className="my-4" />

      {/* Show Content */}
      <div className="row">
        <div className="col">
          <ShowContent Content={htmlContent} />
        </div>
      </div>
    </div>
  );
}

export default Content;
