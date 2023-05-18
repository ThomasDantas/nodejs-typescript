export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = `The field '${fieldName}' is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}
