export default function DynamicBook({ params }: { params: { name: string } }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <h1 className="text-white text-7xl capitalize">{params.name.replace(/-/g, ' ')}</h1>
    </div>
  );
}
