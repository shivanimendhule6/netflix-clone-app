const VideoTitle = ({title , overview}) => {
  return (
    <div className="pt-20 px-6 text-left bg-gradient-to-b from-black to-transparent">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-lg text-gray-300 mt-2">{overview}</p>
        <div className="mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> ▶ Play</button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded ml-2 hover:bg-gray-700"> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;