export function validator (schemaName, body) {
  const schema = require(`./schemas/${schemaName}`).default

  const { error } = schema.validate(body)

  if (error) return { isError: true, message: { error: error.message.replace(/"+/g, '') } }
  
  if (schemaName === 'login' && body && body.password !== body.confirmPassword) return { isError: true , message: { error: "The confirmPassword don't match with password" } }

  return { isError: false }
}
