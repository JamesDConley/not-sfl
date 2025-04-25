import fs from 'fs';
import path from 'path';
import EmojisList from './EmojisList';

export default function Page() {
  const directory = path.join(process.cwd(), 'public/emojis');
  const files = fs.readdirSync(directory);
  const emojis = files.map((file) => ({
    name: file,
    url: `/emojis/${file}`,
  }));

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <EmojisList emojis={emojis} />
    </div>
  );
}