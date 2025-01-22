import React, { FormEvent, useState } from 'react'
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {

  const [data, setData] = useState({
    entrada: '09:00',
    almoco: '12:00',
    retorno: '13:00',
    saida: '18:00'
  })

  const [hoursWorked, setWorkedHours] = useState(8)

  function timeToMinutes(time: string) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as {
      entrada: string
      almoco: string
      retorno: string
      saida: string
    }

    const hoursNumber = Object.fromEntries(Object.entries(data).map(([key, value]) => {
      return [key, timeToMinutes(value)]
    })) as {
      entrada: number
      almoco: number
      retorno: number
      saida: number
    }

    const hoursInteval = hoursNumber.retorno - hoursNumber.almoco

    const hoursWorked = (hoursNumber.saida - hoursNumber.entrada - hoursInteval) / 60

    setWorkedHours(hoursWorked)
  }

  return (
    <div className='flex flex-col gap-4 h-screen items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col  gap-5 bg-gray-950 w-1/3 rounded-lg p-10'
      >
        <h1 className='text-3xl border-b-2'>Pontos</h1>
        {new Date().toLocaleDateString('pt-BR')} - {hoursWorked}

        <Input type='time' label='Entrada' defaultValue='09:00' />
        <Input type='time' label='Almoço' defaultValue='12:00' />
        <Input type='time' label='Retorno' defaultValue='13:00' />
        <Input type='time' label='Saída' defaultValue='18:00' />

        <div className='flex justify-end'>
          <Button
            value='Salvar'
            disabled={hoursWorked !== 8}
          />
        </div>

      </form>
    </div>
  )
}

export default App
