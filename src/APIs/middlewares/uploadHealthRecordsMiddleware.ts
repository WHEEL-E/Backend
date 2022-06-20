import { GridFsStorage } from 'multer-gridfs-storage'
import { database } from '../../app'
import multer from 'multer'
const config = require('config')
const healthRecordsBucket = config.get('healthRecordsBucket')

const healthRecordsStorage = new GridFsStorage({
  url: config.get('db') + database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['file/txt', 'file/csv', 'file/pdf']
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-wheele-health-record`
      req.body.filename = filename

      return filename
    }

    return {
      bucketName: healthRecordsBucket,
      filename: `${Date.now()}-wheele`
    }
  }
})

const uploadHealthRecordsStorage = multer({ storage: healthRecordsStorage }).single('health_record')

export default uploadHealthRecordsStorage
