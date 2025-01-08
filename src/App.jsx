import React,{useState} from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const { register, handleSubmit } = useForm()
  const [response, setResponse] = useState(null)

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className='w-full max-w-[120rem] h-screen flex justify-center bg-gray-400'>
      <div className=''>
        <h1>Web AI</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div>
          <input 
          type="radio"
          id='mode1'
          value='mode1'
          {...register('mode', { required: true })}
          />
          <label htmlFor="mode1">mode1</label>
          </div>
          <div>
          <input 
          type="radio"
          id='mode2'
          value='mode2'
          {...register('mode', { required: true })}
          />
          <label htmlFor="mode2">mode2</label>
          </div>
          <div>
          <label htmlFor="question">write question</label>
          <input 
          type="text"
          id='question'
          {...register('question', { required: true })}
          />
          </div>
          <button type='submit' className='text-white bg-blue-600 w-max mx-auto px-4 py-2 rounded-lg'>Submit</button>
        </form>

        <div className='w-full mt-5 h-48 bg-white text-gray-900'>
          <h1 className='bg-gray-400'>Respone</h1>
          {response && <p>{response}</p>}
        </div>
      </div>
    </div>
  )
}

export default App