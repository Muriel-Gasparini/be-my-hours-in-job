
const parseMessageObject = (message) => {
  return typeof message === 'object' ? message : { message }
}

class httpMessage {

  static internalServerError (errorMessage, responseObject) {
    responseObject.status(500).json({ error: errorMessage })
  }

  static badRequest (message, responseObject) {
    responseObject.status(400).json(parseMessageObject(message))
  }

  static successMessage (message, responseObject) {
    responseObject.status(200).json(parseMessageObject(message))
  }

  static created (message, responseObject) {
    responseObject.status(201).json(parseMessageObject(message))
  }
}

export default httpMessage
