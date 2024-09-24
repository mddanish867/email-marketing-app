import { useState, useEffect } from 'react'

export default function TemplateEditor({ template, onSave }) {
  const [name, setName] = useState(template.name)
  const [content, setContent] = useState(template.content)
  const [isDraft, setIsDraft] = useState(template.isDraft)

  useEffect(() => {
    setName(template.name)
    setContent(template.content)
    setIsDraft(template.isDraft)
  }, [template])

  const handleSave = (asDraft = false) => {
    onSave({
      id: template.id || Date.now(),
      name,
      content,
      isDraft: asDraft
    })
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Template Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="border rounded p-2">
        <div className="mb-2 flex space-x-2">
          <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setContent(content + '<h1></h1>')}>H1</button>
          <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setContent(content + '<p></p>')}>P</button>
          <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setContent(content + '<a href=""></a>')}>Link</button>
          <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => setContent(content + '<img src="" alt="" />')}>Image</button>
        </div>
        <textarea
          className="w-full h-64 p-2 border rounded font-mono"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your HTML here..."
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => handleSave(true)}
        >
          Save as Draft
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleSave(false)}
        >
          Save Template
        </button>
      </div>
    </div>
  )
}