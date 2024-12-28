import React, { useState, useCallback } from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const ToolBar = ({ editor }) => {
  const [highlightColor, setHighlightColor] = useState('#FFFF00'); // default highlight color (yellow)
  const [color, setColor] = useState('#000000');

  const toolbarButtonStyle = (isActive) =>
    `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-secondary'} mx-1`;

  const addImage = useCallback(() => {
    const url = window.prompt('Enter Image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');
    const width = 640;
    const height = 480;
    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width,
        height,
      });
    }
  };

  return (
    <div className="d-flex flex-wrap align-items-center mb-4 p-2" style={{ background: '#f8f9fa', borderRadius: '8px' }}>
      
      {/* Bold */}
      <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().toggleBold()} className={toolbarButtonStyle(editor.isActive('bold'))} >
        <FormatBoldIcon />
      </button>

      {/* Italic */}
      <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().toggleItalic()} className={toolbarButtonStyle(editor.isActive('italic'))} >
        <FormatItalicIcon />
      </button>

      {/* Underline */}
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={toolbarButtonStyle(editor.isActive('underline'))} >
        <FormatUnderlinedIcon />
      </button>

      {/* Strike-through */}
      <button onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editor.can().toggleStrike()} className={toolbarButtonStyle(editor.isActive('strike'))}>
        <FormatStrikethroughIcon />
      </button>

      {/* Heading Buttons */}
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`btn btn-sm mx-1 ${editor.isActive('heading', { level: 1 }) ? 'btn-primary' : 'btn-outline-secondary'}`}>
        H1
      </button>

      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`btn btn-sm mx-1 ${editor.isActive('heading', { level: 2 }) ? 'btn-primary' : 'btn-outline-secondary'}`} >
        H2
      </button>

      {/* Horizontal Rule */}
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="btn btn-sm btn-outline-secondary mx-1" >
        <HorizontalRuleIcon />
      </button>

      {/* Lists */}
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`btn btn-sm ${editor.isActive('bulletList') ? 'btn-success' : 'btn-outline-success'} me-2`}>
        ul
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`btn btn-sm ${editor.isActive('orderedList') ? 'btn-info' : 'btn-outline-info'}`}
      >
        ol
      </button>

      {/* Image */}
      <button onClick={addImage} className="btn btn-sm btn-outline-secondary mx-1">
        <ImageIcon />
      </button>

      {/* Highlight color picker */}
      <div className="d-flex align-items-center mx-1">
        <input
          type="color"
          value={highlightColor}
          onChange={(e) => {
            setHighlightColor(e.target.value);
            editor.chain().focus().setHighlight({ color: e.target.value }).run();
          }}
          style={{ border: 'none', height: '30px', width: '40px' }}
        />
        <button
          onClick={() => {
            setHighlightColor('#FFFF00'); // reset to default yellow
            editor.chain().focus().unsetHighlight().run();
          }}
          className="btn btn-sm btn-outline-secondary mx-2"
        >
          Reset Highlight
        </button>
      </div>

      {/* Color Picker */}
      <div className="d-flex align-items-center mx-1">
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            editor.chain().focus().setColor(e.target.value).run();
          }}
          style={{ border: 'none', height: '30px', width: '40px' }}
        />
        <button
          onClick={() => {
            setColor('#000000');
            editor.chain().focus().unsetColor().run();
          }}
          className="btn btn-sm btn-outline-secondary mx-2"
        >
          Reset
        </button>
      </div>

      {/* YouTube Embed */}
      <button onClick={addYoutubeVideo} className="btn btn-sm btn-outline-secondary mx-1">
        <YouTubeIcon />
      </button>

      {/* Undo / Redo */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="btn btn-sm btn-primary me-2"
      >
        <UndoIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="btn btn-sm btn-secondary"
      >
        <RedoIcon />
      </button>
    </div>
  );
};

export default ToolBar;
