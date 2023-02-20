import { Button, TextInput } from '@ignite-ui/react'
import { ArrowArcRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowArcRight />
      </Button>
    </Form>
  )
}
