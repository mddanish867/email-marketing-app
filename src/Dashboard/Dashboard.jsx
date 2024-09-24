import { useState } from "react";
import CampaignManagement from "../CampaignManagement/CampaignManagement";
import EmailTemplateDesigner from '../TemplateDesigner/EmailTemplateDesigner';
import SubscriberManagement from '../SubscriberManagement/SubscriberManagement';
import AnalyticsReporting from '../Analytics/AnalyticsReporting';
import SchedulingAutomation from '../SchedulingAutomation/SchedulingAutomation';
import APIIntegrations from '../APIIntegrations/APIIntegrations';
import ComplianceSecurity from '../ComplianceSecurity/ComplianceSecurity';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");

  const tabs = [
    { id: "campaigns", label: "Campaigns Management" },    
    { id: 'templates', label: 'Email Templates' },
    { id: 'subscribers', label: 'Subscriber Management' },
    { id: 'analytics', label: 'Analytics & Reporting' },
    { id: 'automation', label: 'Scheduling & Automation' },
    { id: 'apiIntegrations', label: 'API & Integrations' },
    { id: 'complianceSecurity', label: 'Compliance & Security' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-800">
                  Email Marketing App
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`mr-2 inline-block p-4 rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-600 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === "campaigns" && <CampaignManagement />}            
            {activeTab === 'templates' && <EmailTemplateDesigner />}
            {activeTab === 'subscribers' && <SubscriberManagement />}
            {activeTab === 'analytics' && <AnalyticsReporting />}
            {activeTab === 'automation' && <SchedulingAutomation />}
            {activeTab === 'apiIntegrations' && <APIIntegrations />}
            {activeTab === 'complianceSecurity' && <ComplianceSecurity />}
          </div>
        </div>
      </div>
    </div>
  );
}
