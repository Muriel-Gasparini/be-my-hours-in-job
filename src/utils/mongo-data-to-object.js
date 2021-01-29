export const parseMongoDataToObject = (object) => {
  const { __v, _id, ...objectWithNoId } = object._doc
  return Object.assign({ id: _id }, objectWithNoId)
}
