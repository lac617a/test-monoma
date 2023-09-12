class Utils {
  // eslint-disable-next-line no-useless-escape
  private pattern_mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/
  private pattern_only_string = /^[A-Z a-z]+$/
  private pattern_only_number = /^[0-9]+$/

  isEmail(email: string): boolean {
    const value = this.pattern_mail.test(email)
    return value
  }

  validatedEmail(email: string): boolean {
    return !this.isEmail(email) && email.length > 0
  }

  isString(values: string): boolean {
    const value = this.pattern_only_string.test(values)
    return value
  }

  isNumber(values: string): boolean {
    const value = this.pattern_only_number.test(values)
    return value
  }

  classNames(...classes: (string | Boolean)[]) {
    return classes.filter(Boolean).join(' ')
  }

  generateUuid = (): string =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })

  scrollTo = () => document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // Optional if you want to skip the scrolling animation
  })
}

const utils = new Utils()

export default utils
