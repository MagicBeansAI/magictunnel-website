'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-600 mb-6">
          This is a test page to verify Tailwind CSS is working.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-100 text-blue-800 rounded-md">
            <p>This is a blue info box with Tailwind classes</p>
          </div>
          <button 
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => alert('Button clicked!')}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}
