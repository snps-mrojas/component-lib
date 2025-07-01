import './App.css'
import { Button, Input } from '../lib'

function App() {
  return (
    <div>
      <h1>component-lib</h1>
      <hr />
      <h2>Button</h2>
      <Button title={"Hello there"} />
      <hr />
      <h2>Input</h2>
      <Input title="Enter username" placeHolder='Enter...' />
    </div>
  )
}

export default App
