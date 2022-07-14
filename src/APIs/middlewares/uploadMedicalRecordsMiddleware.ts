import { GridFsStorage } from 'multer-gridfs-storage'
import multer from 'multer'
const config = require('config')
const medicalRecordsBucket = config.get('medicalRecordsBucket')
console.log(config.get('db'))
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
const medicalRecordsStorage = new GridFsStorage({
  url: 'mongodb+srv://wheeler:1234@backend-cluster.qrm0u.mongodb.net/testundefined',
  file: (req, file) => {
    const match = ['file/txt', 'file/csv', 'file/pdf']
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-wheele-medical-record`
      req.body.filename = filename

      console.log(filename)

      return filename
    }

    return {
      bucketName: medicalRecordsBucket,
      filename: `${Date.now()}-wheele-medical-record`
    }
  }
})

const uploadMedicalRecordsStorage = multer({ storage: medicalRecordsStorage }).single('health_record')

export default uploadMedicalRecordsStorage
