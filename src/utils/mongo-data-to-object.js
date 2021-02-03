export const parseMongoDataToObject = (object) => {
  const { __v, _id, ...objectWithNoId } = object && object._doc ? object._doc : object
  return Object.assign({ id: _id }, objectWithNoId)
}
