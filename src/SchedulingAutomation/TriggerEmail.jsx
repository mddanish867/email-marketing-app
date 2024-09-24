import { useState } from 'react'

export default function TriggerEmail() {
  const [trigger, setTrigger] = useState('')
  const [emailTemplate, setEmailTemplate] = useState('')
  const [recipients, setRecipients] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Trigger email set up:', { trigger, emailTemplate, recipients })
    // Here you would typically send this data to your backend
    alert('Trigger email set up successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Trigger Email</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="trigger" className="block text-sm font-medium text-gray-700">
            Select Trigger
          </label>
          <select
            id="trigger"
            value={trigger}
            onChange={(e) => setTrigger(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a trigger</option>
            <option value="newSubscriber">New Subscriber</option>
            <option value="productPurchase">Product Purchase</option>
            <option value="abandonedCart">Abandoned Cart</option>
            <option value="birthdayReminder">Birthday Reminder</option>
          </select>
        </div>
        <div>
          <label htmlFor="emailTemplate" className="block text-sm font-medium text-gray-700">
            Email Template
          </label>
          <select
            id="emailTemplate"
            value={emailTemplate}
            onChange={(e) => setEmailTemplate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select an email template</option>
            <option value="welcome">Welcome Email</option>
            <option value="thankYou">Thank You for Your Purchase</option>
            <option value="cartReminder">Don't Forget Your Cart</option>
            <option value="birthdayWishes">Happy Birthday</option>
          </select>
        </div>
        <div>
          <label htmlFor="recipients" className="block text-sm font-medium text-gray-700">
            Recipients (comma-separated emails or list names)
          </label>
          <input
            type="text"
            id="recipients"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Set Up Trigger Email
        </button>
      </form>
    </div>
  )
}