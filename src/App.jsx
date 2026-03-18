import './App.css'
import FAQTList from './components/FAQTList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text'>FAQ Center</h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Find answers to common questions about Tailwind CSS, its features, installation, and more. Browse our FAQ to learn how Tailwind can help you build better websites faster.
            </p>
          </header>
      </div>
      <FAQTList />
    </div>
  )
}

export default App