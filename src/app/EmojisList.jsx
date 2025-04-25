"use client"; // Enables client-side features

import { useState } from "react";

export default function EmojisList({ emojis }) {
  const [filter, setFilter] = useState("");

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter emojis..."
        className="mb-4 px-3 py-2 w-full rounded shadow bg-gray-800"
      />
      <div className="grid gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {filteredEmojis.map((emoji) => (
          <div
            key={emoji.url}
            className="bg-gray-600 rounded-lg shadow hover:shadow-md transition-shadow duration-200 p-4"
          >
            <a href={emoji.url} target="_blank" rel="noreferrer">
              <img
                src={emoji.url}
                alt={emoji.name}
                className="w-full h-24 object-contain mx-auto hover:opacity-80 transition-opacity duration-200"
              />
            </a>
            <div className="p-3 text-center">
              <a
                href={emoji.url}
                className="text-blue-200 hover:text-blue-800 text-xs mt-1 inline-block"
              >
                {emoji.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}