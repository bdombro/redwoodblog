import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

const foreignKeyReplacement = (input) => {
  let output = input
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/))
  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '')
    const value = input[key]
    delete output[key]
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    })
  })
  return output
}

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const userByEmail = ({ email }) => {
  return db.user.findOne({
    where: { email },
  })
}

export const createUser = ({ input }) => {
  requireAuth()
  return db.user.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateUser = ({ id, input }) => {
  requireAuth()
  return db.user.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  requireAuth()
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  posts: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).posts(),
}
