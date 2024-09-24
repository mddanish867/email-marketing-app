import { useState } from 'react'

export default function AccessControl() {
  const [ipWhitelist, setIpWhitelist] = useState('')
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [passwordPolicy, setPasswordPolicy] = useState({
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  })

  const handlePasswordPolicyChange = (field, value) => {
    setPasswordPolicy((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Access Control Settings:', { ipWhitelist, twoFactorAuth, passwordPolicy })
    alert('Access Control settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Access Control Configuration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="ipWhitelist" className="block text-sm font-medium text-gray-700">
            IP Whitelist (comma-separated)
          </label>
          <input
            type="text"
            id="ipWhitelist"
            value={ipWhitelist}
            onChange={(e) => setIpWhitelist(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="e.g., 192.168.1.1, 10.0.0.1"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="twoFactorAuth"
            checked={twoFactorAuth}
            onChange={(e) => setTwoFactorAuth(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-900">
            Enable Two-Factor Authentication
          </label>
        </div>
        <div>
          <h4 className="text-lg font-medium">Password Policy</h4>
          <div className="space-y-2 mt-2">
            <div>
              <label htmlFor="minLength" className="block text-sm font-medium text-gray-700">
                Minimum Length
              </label>
              <input
                type="number"
                id="minLength"
                value={passwordPolicy.minLength}
                onChange={(e) => handlePasswordPolicyChange('minLength', parseInt(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                min="6"
              />
            </div>
            {Object.entries(passwordPolicy)
              .filter(([key]) => key !== 'minLength')
              .map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    onChange={(e) => handlePasswordPolicyChange(key, e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={key} className="ml-2 block text-sm text-gray-900">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Access Control Settings
        </button>
      </form>
    </div>
  )
}