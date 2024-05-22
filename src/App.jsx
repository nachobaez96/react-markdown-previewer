import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

export default function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div id="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div id="preview">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}

// Add custom CSS
// Make webpage responsive