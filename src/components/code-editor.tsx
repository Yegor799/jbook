import MonacoEditor from '@monaco-editor/react';
import React from 'react';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string):void
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const onEditorDidMount = (getValue: () => string, MonacoEditor: any) => {
    MonacoEditor.onDidChangeModelContent(() => {
      onChange(getValue())
    })
  };

  return (
    <MonacoEditor
      editorDidMount={onEditorDidMount}
      value={initialValue}
      language='javascript'
      theme='dark'
      height="500px"
      options={{        
        wordWrap: "on",
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />    
  )
}

export default CodeEditor;