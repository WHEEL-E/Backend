import * as fs from 'fs'
import mongoose from 'mongoose'
export const getProfilePicture = async (
  profilePictureId: string,
  // @ts-ignore
  res
) => {
  const db = mongoose.connection.useDb('testundefined').db
  const collection = db.collection('photos.files')
  const collectionChunks = db.collection('photos.chunks')

  // the problem here it doesn't wait for the resonse
  return collection.find({ _id: new mongoose.Types.ObjectId(profilePictureId) }).toArray(async function (err, docs) {
    if (err) {
      // error handling to be optimized
      console.log('error 1')
    }
    if (!docs || docs.length === 0) {
      console.log('error 2')
    } else {
      // Retrieving the chunks from the db
      const file = collectionChunks.find({ files_id: docs[0]._id }).sort({ n: 1 }).toArray(async function (err, chunks) {
        if (err) {
          console.log('error 3')
        }
        if (!chunks || chunks.length === 0) {
          // No data found
          console.log('error 4')

          return
        }
        // Append Chunks
        const fileData = []
        for (let i = 0; i < chunks.length; i++) {
          // This is in Binary JSON or BSON format, which is stored
          // in fileData array in base64 endocoded string format
          fileData.push(chunks[i].data.toString('base64'))
        }
        // Display the chunks using the data URI format
        const finalFileInBase64Format = 'data:' + docs[0].contentType + ';base64,' + fileData.join('')

        // just for testing that we recieve the image correctly
        const imageBuffer = Buffer.from(fileData.join(''), 'base64')
        const format = docs[0].contentType.substr(6)
        fs.writeFileSync(`output1.${format}`, imageBuffer)
        res.imageData = finalFileInBase64Format

        return finalFileInBase64Format
      })

      return file
    }
  })
}
