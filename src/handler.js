const fakultas = require('./fakultas')
const prodi = require('./prodi')
const dosen = require('./dosen')

const getAllFakultasHandler = () => ({
  status: 'success',
  data: {
    fakultas,
  },
})

const getAllDosenHandler = () => ({
  status: 'success',
  data: {
    dosen,
  },
})

const getDetailFakultasHandler = (request, h) => {
  const { slug } = request.params
  const pickedFakultas = fakultas.find((fakultas) => fakultas.slug === slug)

  if (!pickedFakultas) {
    return h
      .response({
        status: 'error',
        message: 'Fakultas not found',
      })
      .code(404)
  }

  return {
    status: 'success',
    data: {
      ...pickedFakultas,
    },
  }
}
const getDetailProdiHandler = (request, h) => {
  const { slug } = request.params
  const pickedProdi = prodi.find((prodi) => prodi.slug === slug)

  if (!pickedProdi) {
    return h
      .response({
        status: 'error',
        message: 'Prodi not found',
      })
      .code(404)
  }

  return {
    status: 'success',
    data: {
      ...pickedProdi,
    },
  }
}
module.exports = {
  getAllFakultasHandler,
  getDetailFakultasHandler,
  getDetailProdiHandler,
  getAllDosenHandler,
}
