import { useState } from 'react'
import SubscriberList from './SubscriberList'
import SubscriberUpload from './SubscriberUpload'
import SubscriberSegmentation from './SubscriberSegmentation'
import UnsubscribeManagement from './UnsubscribeManagement'

export default function SubscriberManagement() {
  const [activeTab, setActiveTab] = useState('list')
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: 'john@example.com', name: 'John Doe', lists: ['Newsletter'], tags: ['customer'] },
    { id: 2, email: 'jane@example.com', name: 'Jane Smith', lists: ['Product Updates'], tags: ['prospect'] },
  ])

  const addSubscriber = (newSubscriber) => {
    setSubscribers([...subscribers, { id: Date.now(), ...newSubscriber }])
  }

  const removeSubscriber = (id) => {
    setSubscribers(subscribers.filter(sub => sub.id !== id))
  }

  const updateSubscriber = (updatedSubscriber) => {
    setSubscribers(subscribers.map(sub => sub.id === updatedSubscriber.id ? updatedSubscriber : sub))
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Subscriber Management</h2>
      <div className="mb-4">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('list')}
          >
            Subscriber List
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'upload' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('upload')}
          >
            Upload Subscribers
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'segment' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('segment')}
          >
            Segmentation
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'unsubscribe' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('unsubscribe')}
          >
            Unsubscribe Management
          </button>
        </div>
      </div>
      {activeTab === 'list' && (
        <SubscriberList 
          subscribers={subscribers}
          onAdd={addSubscriber}
          onRemove={removeSubscriber}
          onUpdate={updateSubscriber}
        />
      )}
      {activeTab === 'upload' && (
        <SubscriberUpload onUpload={addSubscriber} />
      )}
      {activeTab === 'segment' && (
        <SubscriberSegmentation subscribers={subscribers} onUpdate={updateSubscriber} />
      )}
      {activeTab === 'unsubscribe' && (
        <UnsubscribeManagement subscribers={subscribers} onUpdate={updateSubscriber} />
      )}
    </div>
  )
}