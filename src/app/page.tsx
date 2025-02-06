import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Home() {

  async function create(formData: FormData) {
    'use server'

    console.log(formData)

  }
//teste
  return (

    <form
      // onSubmit={handleSubmit}
      action={create}
      className='flex flex-col  gap-5 bg-gray-950 w-full rounded-lg p-10'
    >
      <h1 className='text-3xl border-b-2'>Pontos</h1>
      {/* {new Date().toLocaleDateString('pt-BR')} - {hoursWorked} */}

      <Input type='time' label='Entrada' defaultValue='09:00' />
      <Input type='time' label='Almoço' defaultValue='12:00' />
      <Input type='time' label='Retorno' defaultValue='13:00' />
      <Input type='time' label='Saída' defaultValue='18:00' />

      <div className='flex justify-end'>
        <Button
          value='Salvar'
        // disabled={hoursWorked !== 8}
        />
      </div>

    </form>
  )
}