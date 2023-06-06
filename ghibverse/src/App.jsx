import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">GhibVerse!</h1>
        <div>
          <p className="text-sm font-medium text-red-900">search movies</p>
        </div>

        <main>
          <h2>Movies</h2>
          <div>
            grid display
            {/* map each movie to load here */}
          </div>
        </main>

        <footer >
          <p className="border-black">Developed by K.C. De Mey</p>
        </footer>
      </div>
    </>
  );
}

export default App
