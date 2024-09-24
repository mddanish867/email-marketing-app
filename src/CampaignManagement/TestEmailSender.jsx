import { useState } from 'react'

export default function TestEmailSender() {
  const [testEmail, setTestEmail] = useState({
    recipient: '',
    subject: '',
    content: '',
  })

  const [isSent, setIsSent] = useState(false)

  const sendTestEmail = () => {
    // In a real application, you would send the email here
    console.log('Sending test email:', testEmail)
    setIsSent(true)
    setTimeout(() => setIsSent(false), 3000)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Test Email Sender</h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Recipient Email"
          className="w-full p-2 border rounded"
          value={testEmail.recipient}
          onChange={(e) => setTestEmail({ ...testEmail, recipient: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 border rounded"
          value={testEmail.subject}
          onChange={(e) => setTestEmail({ ...testEmail, subject: e.target.value })}
        />
        <textarea
          placeholder="Email Content"
          className="w-full p-2 border rounded h-32"
          value={testEmail.content}
          onChange={(e) => setTestEmail({ ...testEmail, content: e.target.value })}
        ></textarea>
        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={sendTestEmail}
        >
          Send Test Email
        </button>
      </div>
      {isSent && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Test email sent successfully!
        </div>
      )}
    </div>
  )
}