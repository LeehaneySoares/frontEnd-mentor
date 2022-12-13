import Field from './field/index.js'

class Formulario {
  #description
  #fields
  #id
  #plans
  #title

  get description () {
    return this.#description ??= ''
  }

  get field () {
    return ''
  }

  get fields () {
    return this.#fields ??= []
  }

  get id () {
    return this.#id ??= ''
  }

  get plans () {
    return this.#plans ??= {}
  }

  get title () {
    return this.#title ??= ''
  }

  constructor ({ description, id, fields, plans, title }) {
    this.#description = description ?? ''
    this.#id = id ?? ''
    this.#fields = fields ?? []
    this.#plans = plans ?? ''
    this.#title = title ?? ''
    this.build()
  }

  build () {
    this.#fields = this.fields?.map(field => Field.create(field, this))
    return this
  }
}

export default Formulario