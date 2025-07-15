'use client';

import React, { useEffect, useState } from 'react';

export function TestComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check the current theme
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        MagicTunnel
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Theme Test
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a test component to verify theming is working correctly.
        </p>
        <div className="flex flex-col space-y-4">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={toggleTheme}
          >
            Toggle Dark Mode
          </button>
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Current theme: <span className="font-medium">
                {isDarkMode ? 'Dark' : 'Light'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
