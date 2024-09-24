import { useState } from 'react'

export default function UnsubscribeManagement({ subscribers, onUpdate }) {
  const [unsubscribeEmail, setUnsubscribeEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleUnsubscribe = () => {
    const subscriber = subscribers.find(sub => sub.email === unsubscribeEmail)
    if (subscriber) {
      const updatedSubscriber = { ...subscriber, lists: [] }
      onUpdate(updatedSubscriber)
      setMessage(`${unsubscribeEmail} has been unsubscribed from all lists.`)
    } else {
      setMessage(`${unsubscribeEmail} is not found in the subscriber list.`)
    }
    setUnsubscribeEmail('')
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold mb-2">Unsubscribe Management</h3>
        <input
          type="email"
          placeholder="Enter email to unsubscribe"
          className="w-full p-2 mb-2 border rounded"
          value={unsubscribeEmail}
          onChange={(e) => setUnsubscribeEmail(e.target.value)}
        />
        <button
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={handleUnsubscribe}
        >
          Unsubscribe
        </button>
      </div>
      {message && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
          <p>{message}</p>
        </div>
      )}
      <div>
        <h3 className="font-bold mb-2">GDPR and CAN-SPAM Compliance</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Always include an unsubscribe link in every email</li>
          <li>Process unsubscribe requests within 10 business days</li>
          <li>Do not require subscribers to provide information other than their email address to unsubscribe</li>
          <li>Do not charge a fee to unsubscribe</li>
          <li>Do not require subscribers to log in to unsubscribe</li>
          <li>Keep records of subscriber consent and unsubscribe requests</li>
        </ul>
      </div>
    </div>
  )
}