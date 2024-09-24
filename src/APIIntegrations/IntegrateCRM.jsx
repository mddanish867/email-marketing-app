import { useState } from 'react'

export default function IntegrateCRM() {
  const [crmProvider, setCrmProvider] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [apiSecret, setApiSecret] = useState('')
  const [fieldMapping, setFieldMapping] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
  })

  const handleFieldMappingChange = (field, value) => {
    setFieldMapping((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('CRM Integration:', { crmProvider, apiKey, apiSecret, fieldMapping })
    // Here you would typically send this data to your backend
    alert('CRM integration set up successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Integrate CRM</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="crmProvider" className="block text-sm font-medium text-gray-700">
            CRM Provider
          </label>
          <select
            id="crmProvider"
            value={crmProvider}
            onChange={(e) => setCrmProvider(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a CRM provider</option>
            <option value="salesforce">Salesforce</option>
            <option value="hubspot">HubSpot</option>
            <option value="zoho">Zoho CRM</option>
          </select>
        </div>
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
            API Key
          </label>
          <input
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="apiSecret" className="block text-sm font-medium text-gray-700">
            API Secret
          </label>
          <input
            type="password"
            id="apiSecret"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Field Mapping</h4>
          {Object.entries(fieldMapping).map(([field, value]) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                id={field}
                value={value}
                onChange={(e) => handleFieldMappingChange(field, e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder={`CRM ${field} field`}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Integrate CRM
        </button>
      </form>
    </div>
  )
}