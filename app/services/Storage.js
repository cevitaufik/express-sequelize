import path from 'path'

export class Storage {
  static baseDir = '/storage'

  static dir (name) {
    return path.join(process.cwd(), `${this.baseDir}/${name}`)
  }
}
