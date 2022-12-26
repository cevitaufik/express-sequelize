import path from 'path'

export class Storage {
  static baseDir = '/storage'

  /**
   * Mengakses folder pada direktory /storage
   *
   * @param {string} name nama folder yang akan diakses
   * @returns string path menuju folder yang diakses
   */
  static dir (name) {
    return path.join(process.cwd(), `${this.baseDir}/${name}`)
  }
}
