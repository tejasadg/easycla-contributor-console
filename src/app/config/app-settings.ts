import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
    /* eslint-disable */
    public static COOKIE_EXPIRY = (30 * 24 * 60 * 60 * 1000);
    public static CLA_USER = 'cla-user';
    public static EMAIL_PATTERN = '[a-z|A-Z|0-9]+[@]+[a-z|A-Z|0-9]+[.]+([a-z|A-Z|0-9]){2}';
    public static USERNAME_REGEX = '/^[a-zA-Z0-9_]{1,15}$/';
    public static URL_PATTERN = '^((ht|f)tp(s?))\://([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(/\S*)?$';
}