import { useState } from 'react'

export default function EngagementTracking() {
  const [selectedMetric, setSelectedMetric] = useState('openRate')

  const engagementData = {
    openRate: [
      { hour: '00:00', value: 2.5 },
      { hour: '06:00', value: 3.8 },
      { hour: '12:00', value: 7.2 },
      { hour: '18:00', value: 5.6 },
    ],
    clickRate: [
      { hour: '00:00', value: 0.8 },
      { hour: '06:00', value: 1.2 },
      { hour: '12:00', value: 2.5 },
      { hour: '18:00', value: 1.9 },
    ],
  }

  const locationData = [
    { location: 'United States', percentage: 45 },
    { location: 'United Kingdom', percentage: 20 },
    { location: 'Canada', percentage: 15 },
    { location: 'Australia', percentage: 10 },
    { location: 'Other', percentage: 10 },
  ]

  const deviceData = [
    { device: 'Mobile', percentage: 55 },
    { device: 'Desktop', percentage: 35 },
    { device: 'Tablet', percentage: 10 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <select
          className="border rounded p-2"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="openRate">Open Rate</option>
          <option value="clickRate">Click Rate</option>
        </select>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Best Times for {selectedMetric === 'openRate' ? 'Opens' : 'Clicks'}</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder: Engagement by time of day</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Top Locations</h3>
          <div className="space-y-2">
            {locationData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32">{item.location}</div>
                <div className="flex-grow">
                  <div className="bg-blue-200 h-4 rounded">
                    <div
                      className="bg-blue-500 h-4 rounded"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-right">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Device Usage</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder: Device usage pie chart</p>
          </div>
          <div className="mt-4 space-y-2">
            {deviceData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24">{item.device}</div>
                <div className="flex-grow">
                  <div className="bg-green-200 h-4 rounded">
                    <div
                      className="bg-green-500 h-4 rounded"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-right">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}