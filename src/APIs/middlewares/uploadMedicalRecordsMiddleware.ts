import { GridFsStorage } from 'multer-gridfs-storage'
import { database } from '../../app'
import multer from 'multer'
const config = require('config')
const medicalRecordsBucket = config.get('medicalRecordsBucket')

const medicalRecordsStorage = new GridFsStorage({
  url: config.get('db') + database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['file/txt', 'file/csv', 'file/pdf']
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-wheele-medical-record`
      req.body.filename = filename

      return filename
    }

    return {
      bucketName: medicalRecordsBucket,
      filename: `${Date.now()}-wheele`
    }
  }
})

const uploadMedicalRecordsStorage = multer({ storage: medicalRecordsStorage }).single('medical_record')

export default uploadMedicalRecordsStorage
