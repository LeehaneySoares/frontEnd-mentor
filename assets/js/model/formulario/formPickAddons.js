import Formulario from './formulario.js'

class FormPickAddons extends Formulario {
  static create (props) {
    return props
      ? new FormPickAddons(props)
      : []
  }
}

export default FormPickAddons