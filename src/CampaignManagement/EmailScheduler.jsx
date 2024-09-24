import { useState } from 'react'

export default function EmailScheduler() {
  const [scheduledEmails, setScheduledEmails] = useState([
    { id: 1, campaign: 'Summer Sale', date: '2023-07-01', time: '09:00' },
    { id: 2, campaign: 'Product Launch', date: '2023-07-15', time: '14:00' },
  ])

  const [newSchedule, setNewSchedule] = useState({ campaign: '', date: '', time: '' })

  const addSchedule = () => {
    if (newSchedule.campaign && newSchedule.date && newSchedule.time) {
      setScheduledEmails([...scheduledEmails, { ...newSchedule, id: Date.now() }])
      setNewSchedule({ campaign: '', date: '', time: '' })
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Email Scheduler</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Campaign Name"
          className="w-full p-2 mb-2 border rounded"
          value={newSchedule.campaign}
          onChange={(e) => setNewSchedule({ ...newSchedule, campaign: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 mb-2 border rounded"
          value={newSchedule.date}
          onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
        />
        <input
          type="time"
          className="w-full p-2 mb-2 border rounded"
          value={newSchedule.time}
          onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={addSchedule}
        >
          Schedule Email
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Campaign</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scheduledEmails.map((email) => (
              <tr key={email.id} className="border-b">
                <td className="px-4 py-2">{email.campaign}</td>
                <td className="px-4 py-2">{email.date}</td>
                <td className="px-4 py-2">{email.time}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}