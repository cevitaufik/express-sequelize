import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

/**
 * Konfigurasi folder storage
 *
 * Masukan folder target yang akan dihubungngkan dengan folder storage menggunakan
 * symbolic link. Tambahkan direktory yang akan dihubungkan pada array dir dengan
 * memasukan object yang berisi:
 *
 * target: path folder yang akan dihubungkan
 * name: nama subfolder
 *
 * contoh:
 * {target: "D:/folder-asset", name: "asset"}
 *
 * maka akan menghasilkan /storage/asset
 *
 * Untuk menghubungkan foldernya jalankan perintah "npm run storagelink"
 */
export const storage = {
  path: path.join(process.cwd(), '/storage'),
  dir: [
    {
      target: process.env.ASSET_PATH,
      name: 'public'
    },
    {
      target: process.env.LOG_PATH,
      name: 'logs'
    }
  ]
}
