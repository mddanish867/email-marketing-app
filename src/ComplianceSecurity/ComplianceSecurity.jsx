import { useState } from 'react'
import GDPRCompliance from './GDPRCompliance'
import CANSPAMCompliance from './CANSPAMCompliance'
import CCPACompliance from './CCPACompliance'
import DoubleOptIn from './DoubleOptIn'
import DataEncryption from './DataEncryption'
import AccessControl from './AccessControl'
import APIKeyManagement from './APIKeyManagement'

export default function ComplianceSecurity() {
  const [activeTab, setActiveTab] = useState('gdpr')

  const tabs = [
    { id: 'gdpr', label: 'GDPR Compliance' },
    { id: 'canspam', label: 'CAN-SPAM Compliance' },
    { id: 'ccpa', label: 'CCPA Compliance' },
    { id: 'doubleOptIn', label: 'Double Opt-In' },
    { id: 'encryption', label: 'Data Encryption' },
    { id: 'accessControl', label: 'Access Control' },
    { id: 'apiKeys', label: 'API Key Management' },
  ]

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Compliance & Security</h2>
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
        {activeTab === 'gdpr' && <GDPRCompliance />}
        {activeTab === 'canspam' && <CANSPAMCompliance />}
        {activeTab === 'ccpa' && <CCPACompliance />}
        {activeTab === 'doubleOptIn' && <DoubleOptIn />}
        {activeTab === 'encryption' && <DataEncryption />}
        {activeTab === 'accessControl' && <AccessControl />}
        {activeTab === 'apiKeys' && <APIKeyManagement />}
      </div>
    </div>
  )
}