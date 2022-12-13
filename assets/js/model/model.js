import Formulario from './formulario/index.js'

class Model {
  #formulario
  #inputs
  #nextButton
  #stepCurrent
  #tagForm

  get formulario () {
    return this.#formulario ??= Formulario[Symbol.iterator]()
  }

  get inputs () {
    return this.#inputs ??= []
  }

  get html () {
    return document.querySelector('.multiStep__article')
  }

  get nextButton () {
    return this.#nextButton ??= document.querySelector('.multiStep__next')
  }

  get stepCurrent () {
    return this.#stepCurrent ??= this.formulario.next()?.value
  }

  get tagForm () {
    return document.querySelector('form') 
  }

  constructor () {
    this.html.innerHTML = this.stepCurrent.template()
    this.addEvent()
  }

  addEvent () {
    this.tagForm.addEventListener('submit', (event) => (
      event.preventDefault(),
      this.mountFormData(event.srcElement)
    ))
    return this
  }

  mountFormData (form) {
    const formData = new FormData(form)
    const object = Object.fromEntries(formData)
    sessionStorage.setItem('stepOne', JSON.stringify(object))
    this.next()
    return this
  }

  next () {
    this.#stepCurrent = this.formulario.next()?.value
    this.html.innerHTML = this.stepCurrent.template()
    return this
  }

  static create () {
    return new Model()
  }
}

export default Model.create()