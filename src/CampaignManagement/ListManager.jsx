import { useState } from 'react'

export default function ListManager() {
  const [lists, setLists] = useState([
    { id: 1, name: 'Newsletter Subscribers', count: 1000 },
    { id: 2, name: 'Product Updates', count: 500 },
    { id: 3, name: 'VIP Customers', count: 100 },
  ])

  const [newList, setNewList] = useState({ name: '' })

  const addList = () => {
    if (newList.name) {
      setLists([...lists, { ...newList, id: Date.now(), count: 0 }])
      setNewList({ name: '' })
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">List Manager</h2>
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="New List Name"
          className="flex-grow p-2 border rounded-l"
          value={newList.name}
          onChange={(e) => setNewList({ name: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          onClick={addList}
        >
          Add List
        </button>
      </div>
      <div className="space-y-4">
        {lists.map((list) => (
          <div key={list.id} className="flex items-center justify-between border-b pb-2">
            <div>
              <h3 className="font-bold">{list.name}</h3>
              <p className="text-sm text-gray-600">{list.count} subscribers</p>
            </div>
            <div>
              <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
              <button className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}