import { log, error, warn } from 'console'

class Notify {
  static error (errorMessage) {
    error(`Ooops this error as been ocurred ┗( T﹏T )┛: ${errorMessage}`)
  }

  static log (logMessage) {
    log(`༼ つ ◕_◕ ༽つ ${logMessage}`)
  }

  static warning (warningMessage) {
    warn(`Pay attention to this (┬┬﹏┬┬): ${warningMessage}`)
  }
}

export default Notify