import { prisma } from './prisma'

export interface UserType {
  id?: number
  name: string
  email: string
  password_hash: string
  img_perfil?: string
  img_fundo?: string
}

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany()
  return allUsers
}

export async function getUser(id: number) {
  const data = await prisma.user.findFirst({
    where: {
      id
    }
  })
  return data
}

export async function verifyUser(id: number, name: string, email: string) {
  const data = await prisma.user.findFirst({
    where: {
      id,
      name,
      email
    }
  })
  return data
}

export async function getUserEmail(email: string) {
  const data = await prisma.user.findFirst({
    where: {
      email
    }
  })
  return data
}

export async function getUserName(name: string) {
  const data = await prisma.user.findFirst({
    where: {
      name
    }
  })
  return data
}

export async function createUser(data: UserType) {
  await prisma.user.create({
    data
  })
}
export interface UserType2 {
  name?: string
  email?: string
  password_hash?: string
  img_perfil?: string
  img_fundo?: string
}
export async function updateUser(id: number, data: UserType2) {
  await prisma.user.update({
    where: {
      id
    },
    data
  })
}

export async function deleteUser(id: number) {
  await prisma.user.delete({
    where: {
      id
    }
  })
}
