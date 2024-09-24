import { useState } from 'react'

export default function SubscriberSegmentation({ subscribers, onUpdate }) {
  const [segments, setSegments] = useState([
    { id: 1, name: 'Active Customers', criteria: { lists: ['Newsletter'], tags: ['customer'] } },
    { id: 2, name: 'Prospects', criteria: { tags: ['prospect'] } },
  ])
  const [newSegment, setNewSegment] = useState({ name: '', criteria: { lists: [], tags: [] } })

  const addSegment = () => {
    if (newSegment.name) {
      setSegments([...segments, { id: Date.now(), ...newSegment }])
      setNewSegment({ name: '', criteria: { lists: [], tags: [] } })
    }
  }

  const removeSegment = (id) => {
    setSegments(segments.filter(segment => segment.id !== id))
  }

  const applySegment = (segment) => {
    const updatedSubscribers = subscribers.map(subscriber => {
      const inSegment = (
        segment.criteria.lists.every(list => subscriber.lists.includes(list)) &&
        segment.criteria.tags.every(tag => subscriber.tags.includes(tag))
      )
      return {
        ...subscriber,
        tags: inSegment
          ? [...new Set([...subscriber.tags, segment.name])]
          : subscriber.tags.filter(tag => tag !== segment.name)
      }
    })
    updatedSubscribers.forEach(onUpdate)
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold mb-2">Create New Segment</h3>
        <input
          type="text"
          placeholder="Segment Name"
          className="w-full p-2 mb-2 border rounded"
          value={newSegment.name}
          onChange={(e) => setNewSegment({ ...newSegment, name: e.target.value })}
        />
        <div className="mb-2">
          <label className="block mb-1">Lists:</label>
          {['Newsletter', 'Product Updates', 'Promotions'].map((list) => (
            <label key={list} className="flex items-center">
              <input
                type="checkbox"
                checked={newSegment.criteria.lists.includes(list)}
                onChange={(e) => {
                  const updatedLists = e.target.checked
                    ? [...newSegment.criteria.lists, list]
                    : newSegment.criteria.lists.filter(l => l !== list)
                  setNewSegment({
                    ...newSegment,
                    criteria: { ...newSegment.criteria, lists: updatedLists }
                  })
                }}
                className="mr-1"
              />
              <span className="text-sm">{list}</span>
            </label>
          ))}
        </div>
        <div className="mb-2">
          <label className="block mb-1">Tags:</label>
          {['customer', 'prospect', 'inactive'].map((tag) => (
            <label key={tag} className="flex items-center">
              <input
                type="checkbox"
                checked={newSegment.criteria.tags.includes(tag)}
                onChange={(e) => {
                  const updatedTags = e.target.checked
                    ? [...newSegment.criteria.tags, tag]
                    : newSegment.criteria.tags.filter(t => t !== tag)
                  setNewSegment({
                    ...newSegment,
                    criteria: { ...newSegment.criteria, tags: updatedTags }
                  })
                }}
                className="mr-1"
              />
              <span className="text-sm">{tag}</span>
            </label>
          ))}
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={addSegment}
        >
          Create Segment
        </button>
      </div>
      <div>
        <h3 className="font-bold mb-2">Existing Segments</h3>
        {segments.map((segment) => (
          <div key={segment.id} className="border p-4 rounded mb-2">
            <h4 className="font-bold">{segment.name}</h4>
            <p className="text-sm mb-2">
              Lists: {segment.criteria.lists.join(', ') || 'Any'}
              <br />
              Tags: {segment.criteria.tags.join(', ') || 'Any'}
            </p>
            <div className="flex justify-between">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                onClick={() => applySegment(segment)}
              >
                Apply Segment
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => removeSegment(segment.id)}
              >
                Remove Segment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}