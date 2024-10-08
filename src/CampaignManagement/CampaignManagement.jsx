import { useState } from "react";
import CampaignManager from "../CampaignManagement/CampaignManager";
import TemplateManager from "../CampaignManagement/TemplateManager";
import EmailEditor from "../CampaignManagement/EmailEditor";
import EmailScheduler from "../CampaignManagement/EmailScheduler";
import UTMGenerator from "../CampaignManagement/UTMGenerator";
import TestEmailSender from "../CampaignManagement/TestEmailSender";
import ListManager from "../CampaignManagement/ListManager";
import UTMParameterAdder from "../CampaignManagement/UTMParameterAdder";
import EmailListSegmentation from "../CampaignManagement/EmailListSegmentation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");

  const tabs = [
    { id: "campaigns", label: "Campaigns" },
    { id: "templates", label: "Templates" },
    { id: "editor", label: "Email Editor" },
    { id: "scheduler", label: "Scheduler" },
    { id: "utm", label: "UTM Generator" },
    { id: "test", label: "Test Email" },
    { id: "lists", label: "Email Lists" },
    { id: "utm", label: "UTM Parameters" },
    { id: "segmentation", label: "List Segmentation" },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-indigo-900">
                  Campaign Management
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl py-6 sm:px-6 lg:px-8">
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
            {activeTab === "campaigns" && <CampaignManager />}
            {activeTab === "templates" && <TemplateManager />}
            {activeTab === "editor" && <EmailEditor />}
            {activeTab === "scheduler" && <EmailScheduler />}
            {activeTab === "utm" && <UTMGenerator />}
            {activeTab === "test" && <TestEmailSender />}
            {activeTab === "lists" && <ListManager />}
            {activeTab === "utm" && <UTMParameterAdder />}
            {activeTab === "segmentation" && <EmailListSegmentation />}
            
          </div>
        </div>
      </div>
    </div>
  );
}
