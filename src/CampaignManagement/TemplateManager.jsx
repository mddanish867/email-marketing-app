import { useState } from 'react'

export default function TemplateManager() {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Welcome Email', content: '<h1>Welcome!</h1><p>We\'re glad you\'re here.</p>' },
    { id: 2, name: 'Newsletter', content: '<h1>Monthly Newsletter</h1><p>Here\'s what\'s new...</p>' },
    { id: 3, name: 'Promotion', content: '<h1>Special Offer!</h1><p>Don\'t miss out on our latest deal.</p>' },
  ])

  const [newTemplate, setNewTemplate] = useState({ name: '', content: '' })

  const addTemplate = () => {
    if (newTemplate.name && newTemplate.content) {
      setTemplates([...templates, { ...newTemplate, id: Date.now() }])
      setNewTemplate({ name: '', content: '' })
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Template Manager</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Template Name"
          className="w-full p-2 mb-2 border rounded"
          value={newTemplate.name}
          onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
        />
        <textarea
          placeholder="HTML Content"
          className="w-full p-2 mb-2 border rounded h-32"
          value={newTemplate.content}
          onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
        ></textarea>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={addTemplate}
        >
          Save Template
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div key={template.id} className="border p-4 rounded">
            <h3 className="font-bold mb-2">{template.name}</h3>
            <div className="mb-2 h-24 overflow-hidden text-sm text-gray-600">
              {template.content.substring(0, 100)}...
            </div>
            <div className="flex justify-between">
              <button className="text-blue-500 hover:text-blue-700">Edit</button>
              <button className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}