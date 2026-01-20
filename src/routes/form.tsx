import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod/v4'
import { useMemo } from 'react'
import { Item } from '@/data/models'

export const Route = createFileRoute('/form')({
  ssr: false,
  component: Form,
})

const schema: z.ZodType<Item> = z.object({
  id: z.number().min(1),
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().optional(),
})

function Form() {
  const defaultValues = useMemo<Item>(
    () => ({
      id: 5,
      name: '',
      description: '',
    }),
    [],
  )
  const {} = useForm({
    defaultValues,
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  return <div>Form Route</div>
}
