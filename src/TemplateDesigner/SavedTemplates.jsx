import { useState } from 'react'

const preMadeTemplates = [
  { id: 'pre1', name: 'Welcome Email', content: '<h1>Welcome!</h1><p>We\'re glad you\'re here.</p>', isDraft: false },
  { id: 'pre2', name: 'Newsletter', content: '<h1>Monthly Newsletter</h1><p>Here\'s what\'s new...</p>', isDraft: false },
  { id: 'pre3', name: 'Promotion', content: '<h1>Special Offer!</h1><p>Don\'t miss out on our latest deal.</p>', isDraft: false },
]

export default function SavedTemplates({ onLoad }) {
  const [savedTemplates, setSavedTemplates] = useState([
    { id: 1, name: 'My First Template', content: '<h1>Hello</h1><p>This is my first template.</p>', isDraft: true },
    { id: 2, name: 'Newsletter Draft', content: '<h1>Newsletter</h1><p>Content goes here.</p>', isDraft: true },
  ])

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Saved Templates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedTemplates.map((template) => (
          <div key={template.id} className="border rounded p-4">
            <h4 className="font-bold">{template.name}</h4>
            <p className="text-sm text-gray-500">{template.isDraft ? 'Draft' : 'Published'}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => onLoad(template)}
            >
              Load
            </button>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mt-8">Pre-made Templates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {preMadeTemplates.map((template) => (
          <div key={template.id} className="border rounded p-4">
            <h4 className="font-bold">{template.name}</h4>
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => onLoad(template)}
            >
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}