import { useState } from 'react'

export default function GDPRCompliance() {
  const [consentText, setConsentText] = useState('')
  const [dataRetentionPeriod, setDataRetentionPeriod] = useState('')
  const [dataSubjectRights, setDataSubjectRights] = useState([])

  const handleDataSubjectRightsChange = (right) => {
    setDataSubjectRights((prev) =>
      prev.includes(right) ? prev.filter((r) => r !== right) : [...prev, right]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('GDPR Compliance Settings:', { consentText, dataRetentionPeriod, dataSubjectRights })
    alert('GDPR Compliance settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">GDPR Compliance</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="consentText" className="block text-sm font-medium text-gray-700">
            Consent Text
          </label>
          <textarea
            id="consentText"
            value={consentText}
            onChange={(e) => setConsentText(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="dataRetentionPeriod" className="block text-sm font-medium text-gray-700">
            Data Retention Period (in months)
          </label>
          <input
            type="number"
            id="dataRetentionPeriod"
            value={dataRetentionPeriod}
            onChange={(e) => setDataRetentionPeriod(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Data Subject Rights</label>
          <div className="mt-2 space-y-2">
            {['Right to Access', 'Right to Rectification', 'Right to Erasure', 'Right to Restrict Processing', 'Right to Data Portability'].map((right) => (
              <label key={right} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={dataSubjectRights.includes(right)}
                  onChange={() => handleDataSubjectRightsChange(right)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">{right}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update GDPR Compliance Settings
        </button>
      </form>
    </div>
  )
}