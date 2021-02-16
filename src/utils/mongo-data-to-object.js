export const parseMongoDataToObject = (object) => {
  const { __v, _id, ...objectWithNoId } = object._doc
  return { id: _id, ...objectWithNoId}
}
