'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import GoogleMapComponent from './map'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.'
  }),
  email: z.string().email({
    message: 'El correo debe ser válido.'
  }),
  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.'
  })
})

function ContactSection () {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: 'Hola! Estoy interesado en los servicios mencionados. ¿Podemos agendar una cita?'
    }
  })

  // 2. Define a submit handler.
  function onSubmit (values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(JSON.stringify(values, null, 2))
    console.log(values)
  }
  return (
    <section id='services' className='flex mb-10 pt-20 gap-20 items-center w-full md:flex-row flex-col-reverse'>
      <article className='flex flex-col gap-5 w-full'>
        <h2 className='subtitle text-left w-full'>
          Contáctanos
        </h2>
        <div className='flex gap-5 md:flex-row flex-col'>
          <div className='flex-1'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          className='h-12'
                          placeholder="Diego"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input
                          className='h-12'
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          className='h-32 resize-none'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant='outline'
                  type="submit"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
          <div className='flex-1'>
            <GoogleMapComponent />
          </div>
        </div>
      </article>
    </section>
  )
}

export default ContactSection
