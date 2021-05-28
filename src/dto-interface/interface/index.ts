export { CompanyInterface } from './companyInterface';
export { IJWTPayload } from './jwt-payload.interface';
export { UploadExcelFileResponseInterface } from './upload-excel-file-response.interface';

export interface ResponseInterface {
  statusCode: number;
  error: string | null;
  message: unknown;
}
