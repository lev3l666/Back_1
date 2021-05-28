import { isNil } from '@nestjs/common/utils/shared.utils';
import * as AWS from 'aws-sdk';
import { Logger } from '@nestjs/common';
import { Configuration } from '../config/config.keys';

export const isUndefined = value => value === undefined;

export const isNull = value => value === null;
export const isEmpty = value =>
  isUndefined(value)
  || isNull(value)
  || value === '';

export class AppHelper {
  private static logger = new Logger(AppHelper.name);

  static getDateRangeArray(startDate: Date, endDate: Date) {
    const dateArray = [];
    let currentDate: Date = startDate;
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate.getTime()));
      currentDate = AppHelper.addDays(currentDate, 1);
    }
    return dateArray;
  }

  static addDays(date: Date, days) {
    date.setDate(date.getDate() + days);
    return date;
  }

  static filterObjectAndRemoveEmptyValues(object: object) {
    Object.keys(object).forEach(k => {
      if (isNil(object[k]) || isEmpty(object[k])) {
        delete object[k];
      }
    });
    return object;
  }

  static removePublicAclS3(key) {
    const s3 = new AWS.S3();
    s3.putObjectAcl({
      Bucket: Configuration.AWS_S3_BUCKET_NAME.toString(),
      ACL: 'private',
      Key: key,
    }, ((err) => {
      if (err) {
        this.logger.error('Error in put ACL ' + err);
      }
    }));
  }
}
