import { useState } from 'react'

export default function EmailHeatmap() {
  const [selectedCampaign, setSelectedCampaign] = useState('campaign1')

  const campaigns = [
    { id: 'campaign1', name: 'Summer Sale' },
    { id: 'campaign2', name: 'Product Launch' },
    { id: 'campaign3', name: 'Newsletter' },
  ]

  // This is a simplified representation of click data for the heatmap
  const clickData = [
    { id: 'header', clicks: 50 },
    { id: 'hero', clicks: 120 },
    { id: 'product1', clicks: 80 },
    { id: 'product2', clicks: 65 },
    { id: 'cta', clicks: 95 },
    { id: 'footer', clicks: 30 },
  ]

  const maxClicks = Math.max(...clickData.map(item => item.clicks))

  const getHeatColor = (clicks) => {
    const intensity = clicks / maxClicks
    return `rgb(255, ${Math.round(255 - intensity * 255)}, 0)`
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
      </div>
      <div className="border rounded p-4">
        <div className="space-y-4">
          {clickData.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded"
              style={{ backgroundColor: getHeatColor(item.clicks) }}
            >
              <h4 className="font-semibold">{item.id}</h4>
              <p>{item.clicks} clicks</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 mr-2"></div>
          <span>High engagement</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
          <span>Medium engagement</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 mr-2"></div>
          <span>Low engagement</span>
        </div>
      </div>
    </div>
  )
}