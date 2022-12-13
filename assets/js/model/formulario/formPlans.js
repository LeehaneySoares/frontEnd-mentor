import Formulario from './formulario.js'

class FormPlans extends Formulario {
  #field

  get field () {
    return this.#field ??= ''
  }

  changeField () {
    this.fields.forEach(field =>
      this.#field += `
        <div class='multiStep__form-group'>
          <label class='multiStep__label'>${field.label}</label>
          <input
            name='${field.id}'
            maxlength='${field.maxLength}'
            pattern='${field.pattern}'
            placeholder='${field.placeholder}'
            required
            type='${field.type}'
          />
        </div>
      `  
    )
    return this.field.replace('undefined', '')
  }

  template () {
    return `
      <hgroup class='multiStep__hgroup'>
        <h1 class='multiStep__title'>${this.title}</h1>
        <h4 class='multiStep__description'>${this.description}</h4>
      </hgroup>
      ${this.changeField()}
    `
  }

  static create (props) {
    return props
      ? new FormPlans(props)
      : []
  }
}

export default FormPlans