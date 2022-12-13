class Field {
  #id
  #label
  #maxLength
  #pattern
  #placeholder
  #type

  get id () {
    return this.#id
  }

  get label () {
    return this.#label
  }

  get maxLength () {
    return this.#maxLength
  }

  get pattern () {
    return this.#pattern
  }

  get placeholder () {
    return this.#placeholder
  }

  get type () {
    return this.#type
  }

  constructor (descriptor, parent) {
    this.#id = descriptor?.id
    this.#label = descriptor?.label
    this.#maxLength = descriptor?.maxlength
    this.#pattern = descriptor?.pattern
    this.#placeholder = descriptor?.placeholder
    this.#type = descriptor?.type
  }

  template () {
    return `
      <div class='multiStep__field'>
        <label class='multiStep__label'>${this.label}</label>
        <input
          id='${this.id}'
          maxlength='${this.maxLength}'
          pattern='${this.pattern}'
          placeholder='${this.placeholder}'
          type='${this.type}'
        />
      </div>
    `
  }

  static create (descriptor, parent) {
    return descriptor
      ? new Field(descriptor, parent)
      : []
  }
}

export default Field