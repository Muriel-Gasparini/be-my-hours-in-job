export function validator (schemaName, body) {
  const schema = require(`./schemas/${schemaName}`).default

  const { error } = schema.validate(body)

  if (error) return { isError: true, message: { error: error.message.replace(/"+/g, '') } }

  return { isError: false }
}
