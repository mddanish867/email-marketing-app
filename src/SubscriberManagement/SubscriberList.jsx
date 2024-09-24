import { useState } from 'react'

export default function SubscriberList({ subscribers, onAdd, onRemove, onUpdate }) {
  const [newSubscriber, setNewSubscriber] = useState({ email: '', name: '', lists: [] })
  const [editingId, setEditingId] = useState(null)

  const handleAdd = () => {
    if (newSubscriber.email && newSubscriber.name) {
      onAdd(newSubscriber)
      setNewSubscriber({ email: '', name: '', lists: [] })
    }
  }

  const handleEdit = (subscriber) => {
    setEditingId(subscriber.id)
  }

  const handleSave = (subscriber) => {
    onUpdate(subscriber)
    setEditingId(null)
  }

  const handleListChange = (subscriber, list) => {
    const updatedLists = subscriber.lists.includes(list)
      ? subscriber.lists.filter(l => l !== list)
      : [...subscriber.lists, list]
    onUpdate({ ...subscriber, lists: updatedLists })
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
          value={newSubscriber.email}
          onChange={(e) => setNewSubscriber({ ...newSubscriber, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded"
          value={newSubscriber.name}
          onChange={(e) => setNewSubscriber({ ...newSubscriber, name: e.target.value })}
        />
        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handleAdd}
        >
          Add Subscriber
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Lists</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-b">
                <td className="px-4 py-2">
                  {editingId === subscriber.id ? (
                    <input
                      type="email"
                      value={subscriber.email}
                      onChange={(e) => onUpdate({ ...subscriber, email: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    subscriber.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingId === subscriber.id ? (
                    <input
                      type="text"
                      value={subscriber.name}
                      onChange={(e) => onUpdate({ ...subscriber, name: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                  ) : (
                    subscriber.name
                  )}
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    {['Newsletter', 'Product Updates', 'Promotions'].map((list) => (
                      <label key={list} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={subscriber.lists.includes(list)}
                          onChange={() => handleListChange(subscriber, list)}
                          className="mr-1"
                        />
                        <span className="text-sm">{list}</span>
                      </label>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">
                  {editingId === subscriber.id ? (
                    <button
                      className="text-green-500 hover:text-green-700 mr-2"
                      onClick={() => handleSave(subscriber)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEdit(subscriber)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onRemove(subscriber.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}