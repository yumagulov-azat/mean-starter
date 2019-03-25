import * as bcrypt from 'bcrypt-nodejs';


export class CryptWrapper {

  /**
   * Gen sal then hash
   * @param data
   * @param saltRounds
   */
  public static saltHash(data: string, saltRounds: number = 10): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.salt(saltRounds)
        .then((salt: string) => this.hash(data, salt))
        .then((hash: string) => resolve(hash))
        .catch((err: Error) => reject(err));
    });
  }

  /**
   * Generate a salt
   * @param rounds
   */
  public static salt(rounds: number = 10): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      bcrypt.genSalt(rounds, function (err: Error, salt: string) {
        if (err) {
          reject(err);
        }
        resolve(salt);
      });
    });
  }

  /**
   * Generate a hash
   * @param data
   * @param salt
   */
  public static hash(data: string, salt: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      bcrypt.hash(data, salt, null, function (err: Error, hash: string) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  }

  /**
   * Compare password
   * @param hash
   * @param password
   */
  public static comparePassword(hash: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      bcrypt.compare(hash, password, function (err: Error, result: boolean) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
