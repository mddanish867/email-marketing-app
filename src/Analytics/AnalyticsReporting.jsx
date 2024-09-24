import { useState } from 'react'
import EmailPerformance from './EmailPerformance'
import LinkTracking from './LinkTracking'
import UnsubscribeTracking from './UnsubscribeTracking'
import EngagementTracking from './EngagementTracking'
import EmailHeatmap from './EmailHeatmap'
import ReportExport from './ReportExport'
import RealTimeDashboard from './RealTimeDashboard'

export default function AnalyticsReporting() {
  const [activeTab, setActiveTab] = useState('performance')

  const tabs = [
    { id: 'performance', label: 'Email Performance' },
    { id: 'links', label: 'Link Tracking' },
    { id: 'unsubscribes', label: 'Unsubscribe Tracking' },
    { id: 'engagement', label: 'Engagement Tracking' },
    { id: 'heatmap', label: 'Email Heatmap' },
    { id: 'export', label: 'Export Reports' },
    { id: 'realtime', label: 'Real-time Dashboard' },
  ]

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Analytics & Reporting</h2>
      <div className="mb-4">
        <div className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`mr-2 inline-block p-4 rounded-t-lg ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-600 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 'performance' && <EmailPerformance />}
        {activeTab === 'links' && <LinkTracking />}
        {activeTab === 'unsubscribes' && <UnsubscribeTracking />}
        {activeTab === 'engagement' && <EngagementTracking />}
        {activeTab === 'heatmap' && <EmailHeatmap />}
        {activeTab === 'export' && <ReportExport />}
        {activeTab === 'realtime' && <RealTimeDashboard />}
      </div>
    </div>
  )
}