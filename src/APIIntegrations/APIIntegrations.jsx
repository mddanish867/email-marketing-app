import { useState } from 'react'
import IntegrateCRM from './IntegrateCRM'
import SendEmailAPI from './SendEmailAPI'
import ReceiveWebhook from './ReceiveWebhook'

export default function APIIntegrations() {
  const [activeTab, setActiveTab] = useState('integrateCRM')

  const tabs = [
    { id: 'integrateCRM', label: 'Integrate CRM' },
    { id: 'sendEmailAPI', label: 'Send Email API' },
    { id: 'receiveWebhook', label: 'Receive Webhook' },
  ]

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">API & Integrations</h2>
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
        {activeTab === 'integrateCRM' && <IntegrateCRM />}
        {activeTab === 'sendEmailAPI' && <SendEmailAPI />}
        {activeTab === 'receiveWebhook' && <ReceiveWebhook />}
      </div>
    </div>
  )
}