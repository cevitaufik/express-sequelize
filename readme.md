# REST API server menggunakan ExpressJs dan ORM Sequelize

* ## Tentang aplikasi
  Ini adalah REST API server yang dibangun menggunakan ExpressJs dan juga ORM Sequelize dengan MySQL sebagai databasenya.

  Aplikasi ini sangat terinspirasi dari Laravel dan akan dikembangkan mengikuti cara-cara yang digunakan oleh Laravel, jadi jangan heran jika struktur dari proyek ini sangat mirip dengan Laravel.

  Setiap request yang masuk harus menyertakan **Api-Key** pada header yang mana api key yang dilampirkan harus terdaftar pada database.

* ## Instalasi
  ```
  npm run install
  ```

* ## Melakukan migrasi database
  ```
  npm run migrate
  ```

* ## Membuat data dummy
  ```
  npm run seed
  ```

* ## Membuat symbolic link
  Buka terminal dengan mode administrator lalu jalankan peribtah berikut:
  ```
  npm run storagelink
  ```

* ## Menjalankan server
  Buka terminal dengan mode administrator lalu jalankan peribtah berikut:
  ```
  npm run serve
  ```