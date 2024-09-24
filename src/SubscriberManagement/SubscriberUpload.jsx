import { useState } from 'react'

export default function SubscriberUpload({ onUpload }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState([])

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)

    const reader = new FileReader()
    reader.onload = (event) => {
      const csv = event.target.result
      const lines = csv.split('\n')
      const headers = lines[0].split(',')
      const previewData = lines.slice(1, 6).map(line => {
        const values = line.split(',')
        return headers.reduce((obj, header, index) => {
          obj[header.trim()] = values[index]
          return obj
        }, {})
      })
      setPreview(previewData)
    }
    reader.readAsText(selectedFile)
  }

  const handleUpload = () => {
    if (file) {
      // In a real application, you would process the file here
      // and call onUpload with the processed data
      console.log('Uploading file:', file.name)
      onUpload(preview)
    }
  }

  const handleExport = () => {
    // In a real application, you would generate the CSV content here
    const csvContent = "data:text/csv;charset=utf-8,Email,Name,Lists\njohn@example.com,John Doe,Newsletter\njane@example.com,Jane Smith,Product Updates"
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "subscribers.csv")
    document.body.appendChild(link)
    link.click()
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2 font-bold">Upload CSV/Excel File</label>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </div>
      {preview.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Preview:</h3>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(preview[0]).map((header) => (
                  <th key={header} className="px-4 py-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {preview.map((row, index) => (
                <tr key={index} className="border-b">
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="px-4 py-2">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleUpload}
          disabled={!file}
        >
          Upload Subscribers
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleExport}
        >
          Export Subscribers
        </button>
      </div>
    </div>
  )
}