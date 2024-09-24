import { useState } from 'react'

export default function UnsubscribeTracking() {
  const [dateRange, setDateRange] = useState('last7days')

  const unsubscribeData = [
    { date: '2023-07-01', count: 12 },
    { date: '2023-07-02', count: 8 },
    { date: '2023-07-03', count: 15 },
    { date: '2023-07-04', count: 10 },
    { date: '2023-07-05', count: 7 },
    { date: '2023-07-06', count: 9 },
    { date: '2023-07-07', count: 11 },
  ]

  const totalUnsubscribes = unsubscribeData.reduce((sum, day) => sum + day.count, 0)
  const averageUnsubscribes = (totalUnsubscribes / unsubscribeData.length).toFixed(2)

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Total Unsubscribes</h3>
          <p className="text-3xl font-bold">{totalUnsubscribes}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Average Unsubscribes per Day</h3>
          <p className="text-3xl font-bold">{averageUnsubscribes}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Unsubscribes Over Time</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder: Unsubscribes over time</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Unsubscribe Reasons</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Reason</th>
                <th className="py-3 px-6 text-center">Count</th>
                <th className="py-3 px-6 text-center">Percentage</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Too many emails</td>
                <td className="py-3 px-6 text-center">45</td>
                <td className="py-3 px-6 text-center">60%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Not relevant</td>
                <td className="py-3 px-6 text-center">20</td>
                <td className="py-3 px-6 text-center">26.67%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">Other</td>
                <td className="py-3 px-6 text-center">10</td>
                <td className="py-3 px-6 text-center">13.33%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}