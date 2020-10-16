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

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findOne({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  requireAuth()
  return db.post.create({
    data: foreignKeyReplacement(input),
  })
}

export const updatePost = ({ id, input }) => {
  requireAuth()
  return db.post.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  requireAuth()
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  author: (_obj, { root }) =>
    db.post.findOne({ where: { id: root.id } }).author(),
}
