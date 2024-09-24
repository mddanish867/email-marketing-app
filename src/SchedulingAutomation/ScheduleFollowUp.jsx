import { useState } from 'react'

export default function ScheduleFollowUp() {
  const [campaign, setCampaign] = useState('')
  const [engagementType, setEngagementType] = useState('')
  const [followUpDelay, setFollowUpDelay] = useState(24)
  const [followUpTemplate, setFollowUpTemplate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Follow-up scheduled:', { campaign, engagementType, followUpDelay, followUpTemplate })
    // Here you would typically send this data to your backend
    alert('Follow-up email scheduled successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Schedule Follow-Up</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="campaign" className="block text-sm font-medium text-gray-700">
            Select Campaign
          </label>
          <select
            id="campaign"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a campaign</option>
            <option value="summerSale">Summer Sale</option>
            <option value="newProduct">New Product Launch</option>
            <option value="newsletter">Monthly Newsletter</option>
          </select>
        </div>
        <div>
          <label htmlFor="engagementType" className="block text-sm font-medium text-gray-700">
            Engagement Type
          </label>
          <select
            id="engagementType"
            value={engagementType}
            onChange={(e) => setEngagementType(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select engagement type</option>
            <option value="emailOpen">Email Open</option>
            <option value="linkClick">Link Click</option>
            <option value="productView">Product View</option>
          </select>
        </div>
        <div>
          <label htmlFor="followUpDelay" className="block text-sm font-medium text-gray-700">
            Follow-Up Delay (hours)
          </label>
          <input
            type="number"
            id="followUpDelay"
            value={followUpDelay}
            onChange={(e) => setFollowUpDelay(parseInt(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="followUpTemplate" className="block text-sm font-medium text-gray-700">
            Follow-Up Email Template
          </label>
          <select
            id="followUpTemplate"
            value={followUpTemplate}
            onChange={(e) => setFollowUpTemplate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a template</option>
            <option value="additionalInfo">Additional Information</option>
            <option value="specialOffer">Special Offer</option>
            <option value="feedback">Feedback Request</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Schedule Follow-Up
        </button>
      </form>
    </div>
  )
}