export default function PresenterCard({ data, delay }) {
  return (

    <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-xs md:max-w-md w-full p-4 z-10 relative opacity-0 animate-fade-slide-scale"    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
      
      <div className="bg-indigo-500 p-2 rounded-t-2xl flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <div className="p-6 flex flex-col items-center space-y-4">

        <img 
          src={data.img}
          alt={data.name} 
          className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-4 border-indigo-500"
        />

        <h2 className="text-lg md:text-xl font-bold">{data.name}</h2>

        <p className="text-center text-gray-600 text-xs md:text-sm">
          {data.title}
        </p>

        <div className="flex items-center space-x-4 mt-2">
          <a href="{data.linkedin}" className="text-indigo-600 hover:underline text-sm">LinkedIn</a>
          <a href="{data.website}" className="text-indigo-600 hover:underline text-sm">Website</a>
        </div>

        <div className="mt-6 flex items-center space-x-2">
          <span className="text-sm">📅</span>
          <span className="bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
            {data.date}
          </span>
        </div>

      </div>

    </div>
  );
}

