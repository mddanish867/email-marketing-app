import { useState } from 'react'

export default function UTMGenerator() {
  const [utmParams, setUtmParams] = useState({
    url: '',
    source: '',
    medium: '',
    campaign: '',
    term: '',
    content: '',
  })

  const [generatedUrl, setGeneratedUrl] = useState('')

  const generateUTM = () => {
    const params = new URLSearchParams({
      utm_source: utmParams.source,
      utm_medium: utmParams.medium,
      utm_campaign: utmParams.campaign,
    })

    if (utmParams.term) params.append('utm_term', utmParams.term)
    if (utmParams.content) params.append('utm_content', utmParams.content)

    setGeneratedUrl(`${utmParams.url}?${params.toString()}`)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">UTM Generator</h2>
      <div className="space-y-4">
        <input
          type="url"
          placeholder="URL"
          className="w-full p-2 border rounded"
          value={utmParams.url}
          onChange={(e) => setUtmParams({ ...utmParams, url: e.target.value })}
        />
        <input
          type="text"
          placeholder="Source"
          className="w-full p-2 border rounded"
          value={utmParams.source}
          onChange={(e) => setUtmParams({ ...utmParams, source: e.target.value })}
        />
        <input
          type="text"
          placeholder="Medium"
          className="w-full p-2 border rounded"
          value={utmParams.medium}
          onChange={(e) => setUtmParams({ ...utmParams, medium: e.target.value })}
        />
        <input
          type="text"
          placeholder="Campaign"
          className="w-full p-2 border rounded"
          value={utmParams.campaign}
          onChange={(e) => setUtmParams({ ...utmParams, campaign: e.target.value })}
        />
        <input
          type="text"
          placeholder="Term (optional)"
          className="w-full p-2 border rounded"
          value={utmParams.term}
          onChange={(e) => setUtmParams({ ...utmParams, term: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content (optional)"
          className="w-full p-2 border rounded"
          value={utmParams.content}
          onChange={(e) => setUtmParams({ ...utmParams, content: e.target.value })}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={generateUTM}
        >
          Generate UTM URL
        </button>
      </div>
      {generatedUrl && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Generated URL:</h3>
          <div className="p-2 bg-gray-100 rounded break-all">{generatedUrl}</div>
        </div>
      )}
    </div>
  )
}