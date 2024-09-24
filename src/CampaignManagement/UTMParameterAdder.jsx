import { useState } from 'react'

export default function UTMParameterAdder() {
  const [urls, setUrls] = useState([
    { id: 1, original: 'https://example.com/product', withUTM: 'https://example.com/product?utm_source=email&utm_medium=campaign&utm_campaign=summer_sale' },
  ])

  const [newUrl, setNewUrl] = useState({
    original: '',
    source: '',
    medium: '',
    campaign: '',
    term: '',
    content: '',
  })

  const addUTMParameters = () => {
    if (newUrl.original && newUrl.source && newUrl.medium && newUrl.campaign) {
      const params = new URLSearchParams({
        utm_source: newUrl.source,
        utm_medium: newUrl.medium,
        utm_campaign: newUrl.campaign,
      })

      if (newUrl.term) params.append('utm_term', newUrl.term)
      if (newUrl.content) params.append('utm_content', newUrl.content)

      const withUTM = `${newUrl.original}${newUrl.original.includes('?') ? '&' : '?'}${params.toString()}`

      setUrls([...urls, { id: Date.now(), original: newUrl.original, withUTM }])
      setNewUrl({ original: '', source: '', medium: '', campaign: '', term: '', content: '' })
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">UTM Parameter Adder</h2>
      <div className="space-y-4 mb-6">
        <input
          type="url"
          placeholder="Original URL"
          className="w-full p-2 border rounded"
          value={newUrl.original}
          onChange={(e) => setNewUrl({ ...newUrl, original: e.target.value })}
        />
        <input
          type="text"
          placeholder="Source"
          className="w-full p-2 border rounded"
          value={newUrl.source}
          onChange={(e) => setNewUrl({ ...newUrl, source: e.target.value })}
        />
        <input
          type="text"
          placeholder="Medium"
          className="w-full p-2 border rounded"
          value={newUrl.medium}
          onChange={(e) => setNewUrl({ ...newUrl, medium: e.target.value })}
        />
        <input
          type="text"
          placeholder="Campaign"
          className="w-full p-2 border rounded"
          value={newUrl.campaign}
          onChange={(e) => setNewUrl({ ...newUrl, campaign: e.target.value })}
        />
        <input
          type="text"
          placeholder="Term (optional)"
          className="w-full p-2 border rounded"
          value={newUrl.term}
          onChange={(e) => setNewUrl({ ...newUrl, term: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content (optional)"
          className="w-full p-2 border rounded"
          value={newUrl.content}
          onChange={(e) => setNewUrl({ ...newUrl, content: e.target.value })}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={addUTMParameters}
        >
          Add UTM Parameters
        </button>
      </div>
      <div className="space-y-4">
        {urls.map((url) => (
          <div key={url.id} className="border-b pb-4">
            <h3 className="font-bold mb-2">Original URL:</h3>
            <p className="text-sm text-gray-600 break-all mb-2">{url.original}</p>
            <h3 className="font-bold mb-2">URL with UTM Parameters:</h3>
            <p className="text-sm text-blue-600 break-all">{url.withUTM}</p>
          </div>
        ))}
      </div>
    </div>
  )
}