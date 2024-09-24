import { useState } from 'react'

export default function ReportExport() {
  const [selectedReport, setSelectedReport] = useState('emailPerformance')
  const [dateRange, setDateRange] = useState('last7days')
  const [format, setFormat] = useState('pdf')

  const reports = [
    { id: 'emailPerformance', name: 'Email Performance' },
    { id: 'linkTracking', name: 'Link Tracking' },
    { id: 'unsubscribes', name: 'Unsubscribe Report' },
    { id: 'engagement', name: 'Engagement Report' },
  ]

  const handleExport = () => {
    // In a real application, this would trigger the report generation and download
    console.log(`Exporting ${selectedReport} report for ${dateRange} in ${format} format`)
    alert(`Report export started. Your ${format.toUpperCase()} will be ready for download shortly.`)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Report</label>
          <select
            className="w-full border rounded p-2"
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
          >
            {reports.map((report) => (
              <option key={report.id} value={report.id}>
                {report.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
          <select
            className="w-full border rounded p-2"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="format"
              value="pdf"
              checked={format === 'pdf'}
              onChange={() => setFormat('pdf')}
            />
            <span className="ml-2">PDF</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="format"
              value="excel"
              checked={format === 'excel'}
              onChange={() => setFormat('excel')}
            />
            <span className="ml-2">Excel</span>
          </label>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleExport}
      >
        Export Report
      </button>
    </div>
  )
}