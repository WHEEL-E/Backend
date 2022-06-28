import mongoose from 'mongoose'

export interface UploadedFileObject {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  id: mongoose.Types.ObjectId;
  filename: string;
  metadata: null;
  bucketName: string;
  chunkSize: number;
  size: number;
  uploadDate: Date;
  contentType: string;
}
