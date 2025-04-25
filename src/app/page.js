import fs from 'fs';
import path from 'path';

export default function Page() {
  // Read emojis directory contents at build time (static generation)
  const directory = path.join(process.cwd(), 'public/emojis');
  const files = fs.readdirSync(directory);
  const emojis = files.map((file) => ({
    name: file,
    url: `/emojis/${file}`,
  }));

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-4">All Emojis</h1>
      <div className="grid grid-cols-4 gap-4">
        {emojis.map((emoji) => (
          <div key={emoji.url} className="p-2">
            <a href={emoji.url} target="_blank" rel="noreferrer">
              <img 
                src={emoji.url} 
                alt={emoji.name} 
                className="max-h-40 hover:scale-105 transition-transform"
              />
            </a>
            <div className="mt-2">
              <span className="font-bold">{emoji.name}</span>
              <br />
              <a 
                href={emoji.url} 
                className="text-blue-500 hover:underline"
              >
                Direct Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}