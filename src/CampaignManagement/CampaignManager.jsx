import { useState } from 'react'

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Summer Sale', subject: 'Don\'t Miss Our Summer Deals!', status: 'Draft' },
    { id: 2, name: 'Welcome Series', subject: 'Welcome to Our Community', status: 'Scheduled' },
    { id: 3, name: 'Product Launch', subject: 'Introducing Our Latest Product', status: 'Sent' },
  ])

  const [newCampaign, setNewCampaign] = useState({ name: '', subject: '' })

  const addCampaign = () => {
    if (newCampaign.name && newCampaign.subject) {
      setCampaigns([...campaigns, { ...newCampaign, id: Date.now(), status: 'Draft' }])
      setNewCampaign({ name: '', subject: '' })
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Campaign Manager</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Campaign Name"
          className="w-full p-2 mb-2 border rounded"
          value={newCampaign.name}
          onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email Subject"
          className="w-full p-2 mb-2 border rounded"
          value={newCampaign.subject}
          onChange={(e) => setNewCampaign({ ...newCampaign, subject: e.target.value })}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={addCampaign}
        >
          Add Campaign
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b">
                <td className="px-4 py-2">{campaign.name}</td>
                <td className="px-4 py-2">{campaign.subject}</td>
                <td className="px-4 py-2">{campaign.status}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}