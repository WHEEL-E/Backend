import { UnprocessableError } from '../types/general.types'
import mongoose from 'mongoose'

export const getProfilePicture = async (profilePictureId: string) => {
  const db = mongoose.connection.useDb('testundefined').db
  const collection = db.collection('photos.files')
  const collectionChunks = db.collection('photos.chunks')
  const docs = await collection.find({ _id: new mongoose.Types.ObjectId(profilePictureId) }).toArray()
  let photoFinalFormat = ''
  if (!docs) {
    throw new UnprocessableError('Photos not found')
  }

  if (!docs || docs.length === 0) {
    throw new UnprocessableError('Zero photos found')
  } else {
    // Retrieving the chunks from the db
    collectionChunks.find({ files_id: docs[0]._id }).sort({ n: 1 }).toArray(async function (err, chunks) {
      if (err) {
        console.log('error 3')
      }
      if (!chunks || chunks.length === 0) {
        // No data found
        throw new UnprocessableError('No data found for the photos')
      }
      // Append Chunks
      const photoData = []
      for (let i = 0; i < chunks.length; i++) {
        // This is in Binary JSON or BSON format, which is stored
        // in fileData array in base64 endocoded string format
        photoData.push(chunks[i].data.toString('base64'))
      }
      // Display the chunks using the data URI format
      photoFinalFormat = 'data:' + docs[0].contentType + ';base64,' + photoData.join('')

      return photoFinalFormat
    })
  }
}

export const getMedicalRecord = async (fileId: string) => {
  const db = mongoose.connection.useDb('testundefined').db
  const collection = db.collection('fs.files')
  const collectionChunks = db.collection('fs.chunks')
  const docs = await collection.find({ _id: new mongoose.Types.ObjectId(fileId) }).toArray()
  let finalFileInBase64Format = ''
  if (!docs) {
    throw new UnprocessableError('Files not found')
  }
  if (!docs || docs.length === 0) {
    throw new UnprocessableError('Zero files found')
  } else {
    // Retrieving the chunks from the db
    const chunks = await collectionChunks.find({ files_id: docs[0]._id }).sort({ n: 1 }).toArray()
    if (!chunks || chunks.length === 0) {
      // No data found
      throw new UnprocessableError('No data found for the files')
    }
    // Append Chunks
    const fileData = []
    for (let i = 0; i < chunks.length; i++) {
      // This is in Binary JSON or BSON format, which is stored
      // in fileData array in base64 endocoded string format
      fileData.push(chunks[i].data.toString('base64'))
    }
    // Display the chunks using the data URI format
    finalFileInBase64Format = 'data:' + docs[0].contentType + ';base64,' + fileData.join('')

    return finalFileInBase64Format
  }
}
