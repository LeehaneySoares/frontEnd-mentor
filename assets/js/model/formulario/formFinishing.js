import Formulario from './formulario.js'

class FormFinishing extends Formulario {
  static create (props) {
    return props
      ? new FormFinishing(props)
      : []
  }
}

export default FormFinishing