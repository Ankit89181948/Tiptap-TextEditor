import { useEditor, EditorContent } from '@tiptap/react';
import React, { useCallback } from 'react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Youtube from '@tiptap/extension-youtube';
import Highlight from '@tiptap/extension-highlight';

import ToolBar from './components/ToolBar/ToolBar';

const extensions = [StarterKit, Underline, Image, Color, TextStyle, Youtube, Highlight];

const content = '';

const Tiptap = ({ onContentSave }) => {
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) {
    return null;
  }

  const handleContent = () => {
    const html = editor.getHTML();
    onContentSave(html);
  };

  const toolbarButtonStyle = (isActive) =>
    `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-secondary'} mx-1`;

  return (
    <div className="container mt-3 border rounded p-3 bg-body-secondary">
      {/* Toolbar */}
      <ToolBar editor={editor} toolbarButtonStyle={toolbarButtonStyle} />

      {/* Editor Content */}
      <div
        className="border rounded p-4 bg-white shadow-sm"
        style={{ minHeight: '200px', fontSize: '16px', height: '300px', overflowY: 'auto' }}
      >
        <EditorContent editor={editor} />
      </div>

      {/* Save Button */}
      <div className="mt-4 text-center">
        <button onClick={handleContent} className="btn btn-success btn-lg">
          Save Content
        </button>
      </div>
    </div>
  );
};

export default Tiptap;
