"use client";

import { useState } from "react";

export default function EmojisList({ emojis }) {
  const [filter, setFilter] = useState("");
  const [copiedUrl, setCopiedUrl] = useState(null); // New state for copied URL

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleCopy = async (url) => {
    try {
      url = "https://notsfl.com" + url
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url); // Show success message
      // Auto-hide after 2 seconds
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter emojis..."
        className="mb-4 px-3 py-2 w-full rounded shadow bg-gray-800"
      />

      {/* New toast notification */}
      {copiedUrl && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 p-3 bg-green-500 text-white rounded-lg shadow-lg text-sm transform transition-opacity duration-1000">
          <span>Copied to clipboard: {copiedUrl}</span>
          <button
            onClick={() => setCopiedUrl(null)}
            className="ml-2 text-white hover:underline"
          >
            ✖️
          </button>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {filteredEmojis.map((emoji) => (
          <div
            key={emoji.url}
            className="bg-gray-600 rounded-lg shadow hover:shadow-md transition-shadow duration-200 p-4 cursor-pointer"
            onClick={() => handleCopy(emoji.url)}
          >
            <img
              src={emoji.url}
              alt={emoji.name}
              className="w-full h-24 object-contain mx-auto hover:opacity-80 transition-opacity duration-200"
            />
            <div className="p-3 text-center">
              <span className="text-blue-200 hover:text-blue-800 text-xs mt-1 inline-block">
                {emoji.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}