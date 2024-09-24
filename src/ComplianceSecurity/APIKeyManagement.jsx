import { useState } from 'react'

export default function APIKeyManagement() {
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Production API Key', key: 'prod_api_key_123', expiresAt: '2023-12-31' },
    { id: 2, name: 'Development API Key', key: 'dev_api_key_456', expiresAt: '2023-09-30' },
  ])
  const [newKeyName, setNewKeyName] = useState('')

  const generateApiKey = () => {
    return 'api_key_' + Math.random().toString(36).substr(2, 9)
  }

  const handleCreateKey = (e) => {
    e.preventDefault()
    const newKey = {
      id: apiKeys.length + 1,
      name: newKeyName,
      key: generateApiKey(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
    }
    setApiKeys([...apiKeys, newKey])
    setNewKeyName('')
  }

  const handleDeleteKey = (id) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id))
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">API Key Management</h3>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Existing API Keys</h4>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {apiKeys.map((apiKey) => (
              <tr key={apiKey.id}>
                <td className="px-6 py-4 whitespace-nowrap">{apiKey.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{apiKey.key}</td>
                <td className="px-6 py-4 whitespace-nowrap">{apiKey.expiresAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteKey(apiKey.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Create New API Key</h4>
        <form onSubmit={handleCreateKey} className="space-y-4">
          <div>
            <label htmlFor="newKeyName" className="block text-sm font-medium text-gray-700">
              API Key Name
            </label>
            <input
              type="text"
              id="newKeyName"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Create New API Key
          </button>
        </form>
      </div>
    </div>
  )
}