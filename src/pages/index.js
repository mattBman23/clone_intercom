import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-between w-16 p-4 bg-gray-200">
        <div className="flex flex-col space-y-4">
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
          <a>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </a>
        </div>
      </div>

      <div className="flex-col w-64 px-2 space-y-3 bg-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">Inbox</div>
          <SearchIcon className="flex-none w-5 h-5" />
        </div>
        <div className="h-64 bg-red-200"></div>
        <div className="h-64 bg-red-200"></div>
      </div>
      <div className="flex-grow bg-white border shadow-xl rounded-l-xl">
        Content
      </div>
    </div>
  );
}
