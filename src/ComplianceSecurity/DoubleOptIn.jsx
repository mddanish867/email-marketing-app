import { useState } from 'react'

export default function DoubleOptIn() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [confirmationEmailSubject, setConfirmationEmailSubject] = useState('')
  const [confirmationEmailBody, setConfirmationEmailBody] = useState('')
  const [confirmationLinkExpiration, setConfirmationLinkExpiration] = useState(24)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Double Opt-In Settings:', { isEnabled, confirmationEmailSubject, confirmationEmailBody, confirmationLinkExpiration })
    alert('Double Opt-In settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Double Opt-In Configuration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isEnabled"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="isEnabled" className="ml-2 block text-sm text-gray-900">
            Enable Double Opt-In
          </label>
        </div>
        {isEnabled && (
          <>
            <div>
              <label htmlFor="confirmationEmailSubject" className="block text-sm font-medium text-gray-700">
                Confirmation Email Subject
              </label>
              <input
                type="text"
                id="confirmationEmailSubject"
                value={confirmationEmailSubject}
                onChange={(e) => setConfirmationEmailSubject(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmationEmailBody" className="block text-sm font-medium text-gray-700">
                Confirmation Email Body
              </label>
              <textarea
                id="confirmationEmailBody"
                value={confirmationEmailBody}
                onChange={(e) => setConfirmationEmailBody(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="confirmationLinkExpiration" className="block text-sm font-medium text-gray-700">
                Confirmation Link Expiration (hours)
              </label>
              <input
                type="number"
                id="confirmationLinkExpiration"
                value={confirmationLinkExpiration}
                onChange={(e) => setConfirmationLinkExpiration(parseInt(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                min="1"
                required
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Double Opt-In Settings
        </button>
      </form>
    </div>
  )
}