# Express TS API

## Overview
- Project backend sederhana menggunakan **Express** dan **TypeScript**
- Dibuat untuk latihan memahami alur dasar backend tanpa database sungguhan
- Fokus utama pembelajaran ada pada penggunaan **`fs`** untuk file-based storage dan **`Map`** untuk in-memory cache

## Learning Goals
- Memahami cara menyimpan data ke file JSON dengan `fs`
- Memahami cara membaca data dari file lalu memuatnya ke memory
- Memahami peran `Map` untuk mempercepat lookup data
- Memahami perbedaan antara data yang tersimpan di file dan data yang hidup di memory
- Memahami batasan pendekatan file-based storage sebelum pindah ke database sungguhan

## How It Works
- Data disimpan di file JSON menggunakan module **`fs`**
- Saat server dijalankan, data dari file dapat dimuat ke dalam **`Map`**
- `Map` dipakai sebagai cache agar server tidak perlu membaca file terus-menerus di setiap request
- Saat ada perubahan data, isi `Map` dapat ditulis ulang kembali ke file JSON

## Why This Approach
- Lebih ringan dan mudah dipahami untuk project latihan
- Cocok untuk belajar fondasi backend sebelum memakai PostgreSQL, MySQL, atau MongoDB
- Membantu memahami konsep persistence, caching, dan state management dari level dasar

## Limitation
- Belum cocok untuk production
- Rentan **race condition** jika ada lebih dari satu process yang menulis ke file yang sama
- Data di memory akan hilang saat server restart, lalu perlu dimuat ulang dari file
- Tidak seaman dan seandal database sungguhan untuk concurrent writes

## Note
- README ini ditulis dengan bantuan **AI** lalu disesuaikan agar tetap ringkas, natural, dan sesuai dengan tujuan project sebagai media belajar