// import * as config from 'config'
import { GridFsStorage } from 'multer-gridfs-storage'
import { database } from '../../app'
import multer from 'multer'
const config = require('config')
const imageBucket = config.get('imageBucket')

const photoStorage = new GridFsStorage({
  url: config.get('db') + database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg']
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-wheele-patient`
      req.body.filename = filename
      console.log('filename is safely in res locals', req.body.filename)

      return filename
    }

    return {
      bucketName: imageBucket,
      filename: `${Date.now()}-wheele`
    }
  }
})

const uploadPhotosMiddleware = multer({ storage: photoStorage }).single('profile_picture')

export default uploadPhotosMiddleware
