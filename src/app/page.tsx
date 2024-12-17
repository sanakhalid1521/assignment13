import Link from 'next/link';

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const books = await url.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl mb-5">Book List</h1>
      {books.map((book: any) => (
        <div key={book.id} className="mb-3">
          {/* Only show the ID without "Book" text */}
          <Link href={`/${book.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <span className="text-2xl cursor-pointer hover:text-yellow-400">
              {book.id}
            </span>
          </Link>
        </div>
      ))}
    </main>
  );
}
