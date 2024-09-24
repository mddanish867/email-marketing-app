import { useState, useEffect } from 'react'

export default function RealTimeDashboard() {
  const [stats, setStats] = useState({
    emailsSent: 0,
    opens: 0,
    clicks: 0,
    unsubscribes: 0,
  })

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setStats(prevStats => ({
        emailsSent: prevStats.emailsSent + Math.floor(Math.random() * 5),
        opens: prevStats.opens + Math.floor(Math.random() * 3),
        clicks: prevStats.clicks + Math.floor(Math.random() * 2),
        unsubscribes: prevStats.unsubscribes + (Math.random() > 0.8 ? 1 : 0),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const recentActivity = [
    { action: 'Email Opened', email: 'john@example.com', time: '2 seconds ago' },
    { action: 'Link Clicked', email: 'sarah@example.com', time: '5 seconds ago' },
    { action: 'Unsubscribed', email: 'mike@example.com', time: '10 seconds ago' },
    { action: 'Email Sent', email: 'lisa@example.com', time: '15 seconds ago' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Emails Sent</h3>
          <p className="text-3xl font-bold">{stats.emailsSent}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Opens</h3>
          <p className="text-3xl font-bold">{stats.opens}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Clicks</h3>
          <p className="text-3xl font-bold">{stats.clicks}</p>
        </div>
        <div className="bg-red-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Unsubscribes</h3>
          <p className="text-3xl font-bold">{stats.unsubscribes}</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Live Activity Feed</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded flex justify-between items-center">
              <div>
                <p className="font-semibold">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.email}</p>
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Real-time Performance Chart</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart placeholder: Real-time performance metrics</p>
        </div>
      </div>
    </div>
  )
}