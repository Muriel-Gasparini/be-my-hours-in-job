import console, { log, warn } from 'console'

class Notify {
  static error (errorMessage, error) {
    console.error(`👹 ${errorMessage} ----> ${error}`)
  }

  static log (logMessage) {
    log(`👾 ${logMessage}`)
  }

  static warning (warningMessage) {
    warn(`🚧 ${warningMessage}`)
  }
}

export default Notify