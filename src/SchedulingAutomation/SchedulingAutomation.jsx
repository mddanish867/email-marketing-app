import { useState } from 'react'
import CreateWorkflow from './CreateWorkflow'
import TriggerEmail from './TriggerEmail'
import AutoResend from './AutoResend'
import ScheduleFollowUp from './ScheduleFollowUp'

export default function SchedulingAutomation() {
  const [activeTab, setActiveTab] = useState('createWorkflow')

  const tabs = [
    { id: 'createWorkflow', label: 'Create Workflow' },
    { id: 'triggerEmail', label: 'Trigger Email' },
    { id: 'autoResend', label: 'Auto Resend' },
    { id: 'scheduleFollowUp', label: 'Schedule Follow-Up' },
  ]

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Scheduling and Automation</h2>
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
        {activeTab === 'createWorkflow' && <CreateWorkflow />}
        {activeTab === 'triggerEmail' && <TriggerEmail />}
        {activeTab === 'autoResend' && <AutoResend />}
        {activeTab === 'scheduleFollowUp' && <ScheduleFollowUp />}
      </div>
    </div>
  )
}