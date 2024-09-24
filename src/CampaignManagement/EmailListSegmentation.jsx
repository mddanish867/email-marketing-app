import { useState } from 'react'

export default function EmailListSegmentation() {
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: 'john@example.com', tags: ['customer', 'newsletter'] },
    { id: 2, email: 'jane@example.com', tags: ['prospect', 'webinar'] },
    { id: 3, email: 'bob@example.com', tags: ['customer', 'product-update'] },
  ])

  const [segments, setSegments] = useState([
    { id: 1, name: 'Active Customers', criteria: ['customer'] },
    { id: 2, name: 'Newsletter Subscribers', criteria: ['newsletter'] },
  ])

  const [newSegment, setNewSegment] = useState({ name: '', criteria: '' })

  const addSegment = () => {
    if (newSegment.name && newSegment.criteria) {
      setSegments([...segments, {
        id: Date.now(),
        name: newSegment.name,
        criteria: newSegment.criteria.split(',').map(tag => tag.trim()),
      }])
      setNewSegment({ name: '', criteria: '' })
    }
  }

  const getSegmentSubscribers = (segmentCriteria) => {
    return subscribers.filter(subscriber =>
      segmentCriteria.every(criteria => subscriber.tags.includes(criteria))
    )
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Email List Segmentation</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Segment Name"
          className="w-full p-2 mb-2 border rounded"
          value={newSegment.name}
          onChange={(e) => setNewSegment({ ...newSegment, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Criteria (comma-separated tags)"
          className="w-full p-2 mb-2 border rounded"
          value={newSegment.criteria}
          onChange={(e) => setNewSegment({ ...newSegment, criteria: e.target.value })}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={addSegment}
        >
          Create Segment
        </button>
      </div>
      <div className="space-y-6">
        {segments.map((segment) => (
          <div key={segment.id} className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">{segment.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Criteria: {segment.criteria.join(', ')}
            </p>
            <h4 className="font-semibold mb-2">Subscribers in this segment:</h4>
            <ul className="list-disc list-inside">
              {getSegmentSubscribers(segment.criteria).map((subscriber) => (
                <li key={subscriber.id} className="text-sm">
                  {subscriber.email} (Tags: {subscriber.tags.join(', ')})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}