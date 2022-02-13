import Card from './components/Card'
import Nav from './components/Nav'
import PkProvider from './context/PkContext'

function App () {
  return (
    <main className='font-mono w-screen h-screen bg-gradient-to-l from-red-500 p-5 sm:p-0 overflow-auto'>
      <PkProvider>
        <Nav />
        <Card />
      </PkProvider>
    </main>
  )
}

export default App