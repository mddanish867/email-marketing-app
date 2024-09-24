import { useState } from 'react'

export default function AutoResend() {
  const [campaign, setCampaign] = useState('')
  const [resendDelay, setResendDelay] = useState(72)
  const [maxAttempts, setMaxAttempts] = useState(2)
  const [modifySubject, setModifySubject] = useState(false)
  const [subjectModification, setSubjectModification] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Auto resend set up:', { campaign, resendDelay, maxAttempts, modifySubject, subjectModification })
    // Here you would typically send this data to your backend
    alert('Auto resend set up successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Auto Resend</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="campaign" className="block text-sm font-medium text-gray-700">
            Select Campaign
          </label>
          <select
            id="campaign"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a campaign</option>
            <option value="summerSale">Summer Sale</option>
            <option value="newProduct">New Product Launch</option>
            <option value="newsletter">Monthly Newsletter</option>
          </select>
        </div>
        <div>
          <label htmlFor="resendDelay" className="block text-sm font-medium text-gray-700">
            Resend Delay (hours)
          </label>
          <input
            type="number"
            id="resendDelay"
            value={resendDelay}
            onChange={(e) => setResendDelay(parseInt(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="maxAttempts" className="block text-sm font-medium text-gray-700">
            Maximum Attempts
          </label>
          <input
            type="number"
            id="maxAttempts"
            value={maxAttempts}
            onChange={(e) => setMaxAttempts(parseInt(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            min="1"
            max="5"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="modifySubject"
            checked={modifySubject}
            onChange={(e) => setModifySubject(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="modifySubject" className="ml-2 block text-sm text-gray-900">
            Modify subject line for resend
          </label>
        </div>
        {modifySubject && (
          <div>
            <label htmlFor="subjectModification" className="block text-sm font-medium text-gray-700">
              Subject Line Modification
            </label>
            <input
              type="text"
              id="subjectModification"
              value={subjectModification}
              onChange={(e) => setSubjectModification(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="e.g., [Reminder]"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Set Up Auto Resend
        </button>
      </form>
    </div>
  )
}