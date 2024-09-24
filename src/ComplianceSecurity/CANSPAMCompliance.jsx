import { useState } from 'react'

export default function CANSPAMCompliance() {
  const [senderInfo, setSenderInfo] = useState({
    name: '',
    address: '',
    email: '',
  })
  const [unsubscribeLink, setUnsubscribeLink] = useState('')
  const [subjectLineGuidelines, setSubjectLineGuidelines] = useState('')

  const handleSenderInfoChange = (field, value) => {
    setSenderInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('CAN-SPAM Compliance Settings:', { senderInfo, unsubscribeLink, subjectLineGuidelines })
    alert('CAN-SPAM Compliance settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">CAN-SPAM Compliance</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h4 className="text-lg font-medium">Sender Information</h4>
          <div className="space-y-2">
            {Object.entries(senderInfo).map(([field, value]) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  value={value}
                  onChange={(e) => handleSenderInfoChange(field, e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="unsubscribeLink" className="block text-sm font-medium text-gray-700">
            Unsubscribe Link
          </label>
          <input
            type="url"
            id="unsubscribeLink"
            value={unsubscribeLink}
            onChange={(e) => setUnsubscribeLink(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="subjectLineGuidelines" className="block text-sm font-medium text-gray-700">
            Subject Line Guidelines
          </label>
          <textarea
            id="subjectLineGuidelines"
            value={subjectLineGuidelines}
            onChange={(e) => setSubjectLineGuidelines(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update CAN-SPAM Compliance Settings
        </button>
      </form>
    </div>
  )
}