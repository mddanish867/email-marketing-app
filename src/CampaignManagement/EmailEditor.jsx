import { useState } from 'react'

export default function EmailEditor() {
  const [editorContent, setEditorContent] = useState('')
  const [editorMode, setEditorMode] = useState('wysiwyg')

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Email Editor</h2>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            editorMode === 'wysiwyg' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setEditorMode('wysiwyg')}
        >
          WYSIWYG
        </button>
        <button
          className={`px-4 py-2 rounded ${
            editorMode === 'html' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setEditorMode('html')}
        >
          HTML
        </button>
      </div>
      {editorMode === 'wysiwyg' ? (
        <div className="border p-4 rounded min-h-[300px]">
          {/* This is a placeholder for a WYSIWYG editor. In a real application, you'd integrate a library like TinyMCE or CKEditor here. */}
          <div contentEditable="true" className="outline-none min-h-[300px]" onInput={(e) => setEditorContent(e.currentTarget.innerHTML)}>
            <p>Start typing your email content here...</p>
          </div>
        </div>
      ) : (
        <textarea
          className="w-full p-2 border rounded min-h-[300px]"
          value={editorContent}
          onChange={(e) => setEditorContent(e.target.value)}
          placeholder="Enter your HTML here..."
        ></textarea>
      )}
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Save Email
        </button>
      </div>
    </div>
  )
}