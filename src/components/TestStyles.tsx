'use client';

import { useEffect } from 'react';

export function TestStyles() {
  useEffect(() => {
    console.log('TestStyles component mounted');
  }, []);

  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-600 mb-6">
          This is a test component with Tailwind CSS classes.
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
