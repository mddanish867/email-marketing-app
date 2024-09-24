import { useState } from 'react'

export default function CreateWorkflow() {
  const [workflowName, setWorkflowName] = useState('')
  const [triggerEvent, setTriggerEvent] = useState('')
  const [steps, setSteps] = useState([{ type: 'email', delay: 0, content: '' }])

  const addStep = () => {
    setSteps([...steps, { type: 'email', delay: 0, content: '' }])
  }

  const updateStep = (index, field, value) => {
    const newSteps = [...steps]
    newSteps[index][field] = value
    setSteps(newSteps)
  }

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Workflow created:', { workflowName, triggerEvent, steps })
    // Here you would typically send this data to your backend
    alert('Workflow created successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Create Workflow</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="workflowName" className="block text-sm font-medium text-gray-700">
            Workflow Name
          </label>
          <input
            type="text"
            id="workflowName"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="triggerEvent" className="block text-sm font-medium text-gray-700">
            Trigger Event
          </label>
          <select
            id="triggerEvent"
            value={triggerEvent}
            onChange={(e) => setTriggerEvent(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select a trigger event</option>
            <option value="subscribe">New Subscription</option>
            <option value="purchase">Product Purchase</option>
            <option value="abandon">Cart Abandonment</option>
          </select>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Workflow Steps</h4>
          {steps.map((step, index) => (
            <div key={index} className="border p-4 rounded-md space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Step {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeStep(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Delay (hours)</label>
                <input
                  type="number"
                  value={step.delay}
                  onChange={(e) => updateStep(index, 'delay', parseInt(e.target.value))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Content</label>
                <textarea
                  value={step.content}
                  onChange={(e) => updateStep(index, 'content', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows="3"
                ></textarea>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Add Step
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Create Workflow
        </button>
      </form>
    </div>
  )
}