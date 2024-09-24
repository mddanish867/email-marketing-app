import { useState } from 'react'

export default function LinkTracking() {
  const [selectedCampaign, setSelectedCampaign] = useState('all')

  const campaigns = [
    { id: 'all', name: 'All Campaigns' },
    { id: 'campaign1', name: 'Summer Sale' },
    { id: 'campaign2', name: 'Product Launch' },
    { id: 'campaign3', name: 'Newsletter' },
  ]

  const linkData = [
    { id: 1, url: 'https://example.com/product1', clicks: 1250, uniqueClicks: 980 },
    { id: 2, url: 'https://example.com/product2', clicks: 875, uniqueClicks: 720 },
    { id: 3, url: 'https://example.com/category', clicks: 650, uniqueClicks: 540 },
    { id: 4, url: 'https://example.com/sale', clicks: 1500, uniqueClicks: 1200 },
  ]

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
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">URL</th>
              <th className="py-3 px-6 text-center">Total Clicks</th>
              <th className="py-3 px-6 text-center">Unique Clicks</th>
              <th className="py-3 px-6 text-center">Click-through Rate</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {linkData.map((link) => (
              <tr key={link.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {link.url}
                  </a>
                </td>
                <td className="py-3 px-6 text-center">{link.clicks}</td>
                <td className="py-3 px-6 text-center">{link.uniqueClicks}</td>
                <td className="py-3 px-6 text-center">
                  {((link.uniqueClicks / link.clicks) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Click Distribution</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder: Click distribution across links</p>
        </div>
      </div>
    </div>
  )
}