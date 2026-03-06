# Express TS API

notes: README ini ditulis dengan bantuan **AI** lalu disesuaikan untuk menjelaskan project secara ringkas.



Project ini dibuat sebagai latihan backend sederhana menggunakan **Express** dan **TypeScript**, dengan fokus utama memahami bagaimana data bisa dikelola tanpa database sungguhan. Di sini, penyimpanan dilakukan lewat **file JSON menggunakan `fs`**, sementara **`Map`** dipakai sebagai cache di memory agar proses lookup bisa lebih cepat dan tidak selalu bergantung pada pembacaan file di setiap request. Pendekatan ini sengaja dipilih supaya pembelajaran lebih terasa dari level paling dasar: bagaimana data dibaca, disimpan, dimuat ulang, dan dipakai kembali di dalam server.

Salah satu tujuan utama project ini adalah membiasakan diri dengan alur berpikir backend yang nyata, meskipun tools yang dipakai masih sederhana. Dengan `fs`, project ini membantu memahami konsep persistence secara manual, sedangkan `Map` membantu melihat perbedaan antara data yang hidup di file dan data yang hidup di memory. Dari sini, jadi lebih gampang memahami kenapa caching bisa mempercepat akses data, kenapa state di memory akan hilang saat server restart, dan bagaimana file-based storage bisa dipakai sebagai langkah awal sebelum pindah ke database yang lebih proper.

Walaupun sederhana, pendekatan ini juga sengaja dipertahankan karena punya nilai belajar yang jelas, termasuk untuk melihat langsung batasannya. Kombinasi `fs` dan `Map` cocok untuk latihan, dummy project, dan eksplorasi arsitektur dasar backend, tapi tetap punya kelemahan seperti risiko **race condition** saat ada lebih dari satu process menulis ke file yang sama. README ini ditulis dengan bantuan **AI** lalu disesuaikan agar tetap natural, ringkas, dan sesuai dengan tujuan project sebagai media belajar, bukan sebagai sistem production-ready.