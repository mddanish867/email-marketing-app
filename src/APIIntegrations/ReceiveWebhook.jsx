import { useState } from 'react'

export default function ReceiveWebhook() {
  const [webhookUrl, setWebhookUrl] = useState('https://api.example.com/webhook/abc123')
  const [selectedEvents, setSelectedEvents] = useState([])
  const [webhookLogs, setWebhookLogs] = useState([
    { id: 1, event: 'email.opened', timestamp: '2023-07-01T12:00:00Z', data: { email: 'user@example.com' } },
    { id: 2, event: 'email.clicked', timestamp: '2023-07-01T12:05:00Z', data: { email: 'user@example.com', link: 'https://example.com' } },
  ])

  const availableEvents = [
    'email.sent',
    'email.opened',
    'email.clicked',
    'email.bounced',
    'subscriber.added',
    'subscriber.removed',
  ]

  const handleEventToggle = (event) => {
    setSelectedEvents((prev) =>
      prev.includes(event)
        ? prev.filter((e) => e !== event)
        : [...prev, event]
    )
  }

  const handleRegenerateUrl = () => {
    // In a real application, this would call your backend to generate a new webhook URL
    const newWebhookUrl = 'https://api.example.com/webhook/' + Math.random().toString(36).substr(2, 9)
    setWebhookUrl(newWebhookUrl)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Receive Webhook</h3>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Webhook URL</h4>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={webhookUrl}
            readOnly
            className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
          />
          <button
            onClick={handleRegenerateUrl}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Regenerate URL
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Event Selection</h4>
        <div className="grid grid-cols-2 gap-2">
          {availableEvents.map((event) => (
            <label key={event} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedEvents.includes(event)}
                onChange={() => handleEventToggle(event)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{event}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-medium">Recent Webhook Logs</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Event</th>
                <th className="py-3 px-6 text-left">Timestamp</th>
                <th className="py-3 px-6 text-left">Data</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {webhookLogs.map((log) => (
                <tr key={log.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{log.event}</td>
                  <td className="py-3 px-6 text-left">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="py-3 px-6 text-left">
                    <pre className="text-xs">{JSON.stringify(log.data, null, 2)}</pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}