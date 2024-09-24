import { useState } from 'react'
import TemplateEditor from './TemplateEditor'
import TemplatePreview from './TemplatePreview'
import SavedTemplates from './SavedTemplates'

export default function EmailTemplateDesigner() {
  const [activeTab, setActiveTab] = useState('editor')
  const [currentTemplate, setCurrentTemplate] = useState({
    id: null,
    name: '',
    content: '',
    isDraft: true
  })

  const handleSave = (template) => {
    // In a real app, this would save to a database
    console.log('Saving template:', template)
    setCurrentTemplate(template)
  }

  const handleLoad = (template) => {
    setCurrentTemplate(template)
    setActiveTab('editor')
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Email Template Designer</h2>
      <div className="mb-4">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'editor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('editor')}
          >
            Editor
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'preview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'saved' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Templates
          </button>
        </div>
      </div>
      {activeTab === 'editor' && (
        <TemplateEditor 
          template={currentTemplate} 
          onSave={handleSave}
        />
      )}
      {activeTab === 'preview' && (
        <TemplatePreview template={currentTemplate} />
      )}
      {activeTab === 'saved' && (
        <SavedTemplates onLoad={handleLoad} />
      )}
    </div>
  )
}