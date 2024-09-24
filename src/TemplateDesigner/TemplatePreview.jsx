import { useState } from 'react'

export default function TemplatePreview({ template }) {
  const [screenSize, setScreenSize] = useState('desktop')

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded ${screenSize === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setScreenSize('mobile')}
        >
          Mobile
        </button>
        <button
          className={`px-4 py-2 rounded ${screenSize === 'tablet' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setScreenSize('tablet')}
        >
          Tablet
        </button>
        <button
          className={`px-4 py-2 rounded ${screenSize === 'desktop' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setScreenSize('desktop')}
        >
          Desktop
        </button>
      </div>
      <div className={`border rounded p-4 mx-auto ${
        screenSize === 'mobile' ? 'w-full max-w-sm' :
        screenSize === 'tablet' ? 'w-full max-w-md' :
        'w-full max-w-4xl'
      }`}>
        <h3 className="text-lg font-bold mb-2">{template.name}</h3>
        <div 
          className="border p-4 bg-white"
          dangerouslySetInnerHTML={{ __html: template.content }}
        ></div>
      </div>
    </div>
  )
}