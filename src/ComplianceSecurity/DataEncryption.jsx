import { useState } from 'react'

export default function DataEncryption() {
  const [sslEnabled, setSslEnabled] = useState(true)
  const [encryptionAlgorithm, setEncryptionAlgorithm] = useState('AES-256')
  const [dataAtRest, setDataAtRest] = useState(true)
  const [dataInTransit, setDataInTransit] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Data Encryption Settings:', { sslEnabled, encryptionAlgorithm, dataAtRest, dataInTransit })
    alert('Data Encryption settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Data Encryption Configuration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="sslEnabled"
            checked={sslEnabled}
            onChange={(e) => setSslEnabled(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="sslEnabled" className="ml-2 block text-sm text-gray-900">
            Enable SSL/TLS Encryption
          </label>
        </div>
        <div>
          <label htmlFor="encryptionAlgorithm" className="block text-sm font-medium text-gray-700">
            Encryption Algorithm
          </label>
          <select
            id="encryptionAlgorithm"
            value={encryptionAlgorithm}
            onChange={(e) => setEncryptionAlgorithm(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="AES-256">AES-256</option>
            <option value="RSA-2048">RSA-2048</option>
            <option value="ChaCha20">ChaCha20</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="dataAtRest"
            checked={dataAtRest}
            onChange={(e) => setDataAtRest(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="dataAtRest" className="ml-2 block text-sm text-gray-900">
            Encrypt Data at Rest
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="dataInTransit"
            checked={dataInTransit}
            onChange={(e) => setDataInTransit(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="dataInTransit" className="ml-2 block text-sm text-gray-900">
            Encrypt Data in Transit
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Data Encryption Settings
        </button>
      </form>
    </div>
  )
}