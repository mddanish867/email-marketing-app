import { useState } from 'react'

export default function CCPACompliance() {
  const [privacyPolicy, setPrivacyPolicy] = useState('')
  const [dataCollectionNotice, setDataCollectionNotice] = useState('')
  const [optOutMechanism, setOptOutMechanism] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('CCPA Compliance Settings:', { privacyPolicy, dataCollectionNotice, optOutMechanism })
    alert('CCPA Compliance settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">CCPA Compliance</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="privacyPolicy" className="block text-sm font-medium text-gray-700">
            Privacy Policy URL
          </label>
          <input
            type="url"
            id="privacyPolicy"
            value={privacyPolicy}
            onChange={(e) => setPrivacyPolicy(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="dataCollectionNotice" className="block text-sm font-medium text-gray-700">
            Data Collection Notice
          </label>
          <textarea
            id="dataCollectionNotice"
            value={dataCollectionNotice}
            onChange={(e) => setDataCollectionNotice(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="optOutMechanism" className="block text-sm font-medium text-gray-700">
            Opt-Out Mechanism Description
          </label>
          <textarea
            id="optOutMechanism"
            value={optOutMechanism}
            onChange={(e) => setOptOutMechanism(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update CCPA Compliance Settings
        </button>
      </form>
    </div>
  )
}