import { useState } from 'react'

export default function EmailPerformance() {
  const [selectedCampaign, setSelectedCampaign] = useState('all')
  const [dateRange, setDateRange] = useState('last7days')

  const campaigns = [
    { id: 'all', name: 'All Campaigns' },
    { id: 'campaign1', name: 'Summer Sale' },
    { id: 'campaign2', name: 'Product Launch' },
    { id: 'campaign3', name: 'Newsletter' },
  ]

  const performanceData = {
    openRate: 25.5,
    clickRate: 3.2,
    bounceRate: 1.8,
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <select
          className="border rounded p-2"
          value={selectedCampaign}
          onChange={(e) => setSelectedCampaign(e.target.value)}
        >
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.name}
            </option>
          ))}
        </select>
        <select
          className="border rounded p-2"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="last90days">Last 90 Days</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Open Rate</h3>
          <p className="text-3xl font-bold">{performanceData.openRate}%</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Click Rate</h3>
          <p className="text-3xl font-bold">{performanceData.clickRate}%</p>
        </div>
        <div className="bg-red-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Bounce Rate</h3>
          <p className="text-3xl font-bold">{performanceData.bounceRate}%</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Performance Over Time</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder: Performance metrics over time</p>
        </div>
      </div>
    </div>
  )
}