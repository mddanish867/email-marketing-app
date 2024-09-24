import { useState } from 'react'

export default function SendEmailAPI() {
  const [apiKey, setApiKey] = useState('')
  const [testEmail, setTestEmail] = useState('')
  const [testSubject, setTestSubject] = useState('')
  const [testBody, setTestBody] = useState('')

  const handleGenerateApiKey = () => {
    // In a real application, this would call your backend to generate a new API key
    const newApiKey = 'api_' + Math.random().toString(36).substr(2, 9)
    setApiKey(newApiKey)
  }

  const handleTestApi = (e) => {
    e.preventDefault()
    console.log('Test API call:', { apiKey, testEmail, testSubject, testBody })
    // Here you would typically send this data to your backend
    alert('Test email sent successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Send Email API</h3>
      <div className="bg-gray-100 p-4 rounded-md">
        <h4 className="text-lg font-medium mb-2">API Documentation</h4>
        <p className="text-sm mb-2">
          Endpoint: <code className="bg-gray-200 p-1 rounded">https://api.example.com/send-email</code>
        </p>
        <p className="text-sm mb-2">Method: POST</p>
        <p className="text-sm mb-2">Headers:</p>
        <ul className="list-disc list-inside text-sm mb-2">
          <li>Content-Type: application/json</li>
          <li>X-API-Key: Your API Key</li>
        </ul>
        <p className="text-sm">Body:</p>
        <pre className="bg-gray-200 p-2 rounded text-xs">
          {JSON.stringify({
            to: 'recipient@example.com',
            subject: 'Email Subject',
            body: 'Email Body',
          }, null, 2)}
        </pre>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">API Key Management</h4>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={apiKey}
            readOnly
            className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Your API Key"
          />
          <button
            onClick={handleGenerateApiKey}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Generate New Key
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Test API</h4>
        <form onSubmit={handleTestApi} className="space-y-2">
          <input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Recipient Email"
            required
          />
          <input
            type="text"
            value={testSubject}
            onChange={(e) => setTestSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Subject"
            required
          />
          <textarea
            value={testBody}
            onChange={(e) => setTestBody(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Email Body"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Test Send Email API
          </button>
        </form>
      </div>
    </div>
  )
}