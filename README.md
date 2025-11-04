# SPA SEO Prerender Template

Template ini adalah dasar untuk membangun **Single Page Application (SPA)** berbasis **Vue 3 + Vite + Express** dengan dukungan **SEO (Search Engine Optimization)** menggunakan teknik **Prerendering**.  
Didesain agar **ringan, mudah dikembangkan**, dan **siap untuk produksi**.


## Teknologi yang Digunakan

| Teknologi                           | Deskripsi                                                    |
| ----------------------------------- | ------------------------------------------------------------ |
| **Vue 3**                           | Framework utama untuk membangun SPA                          |
| **Vue Router 4**                    | Manajemen routing aplikasi                                   |
| **Vite**                            | Build tool modern dan super cepat                            |
| **Express 5**                       | Server Node.js ringan untuk produksi                         |
| **TailwindCSS 3**                   | Framework CSS utility-first untuk styling                    |
| **Prerender SPA Plugin Next**       | Plugin untuk prerender halaman SPA agar SEO-friendly         |
| **@prerenderer/renderer-puppeteer** | Menjalankan prerender menggunakan headless Chrome            |
| **vite-plugin-prerender**           | Integrasi prerender dengan Vite                              |
| **PostCSS & Autoprefixer**          | Otomatis menambahkan prefix CSS untuk kompatibilitas browser |



## Instalasi

Clone repository ini dan masuk ke folder project:

`git clone https://github.com/dupancode/spa-seo-prerender-template.git cd spa-seo-prerender-template/development`

install semua dependensi:

`npm install`


## Konfigurasi Router

Buka file:

`src/router/index.js`

Ubah atau tambahkan rute sesuai kebutuhan:

```const dynamicRoutes = ["vue"];  export const router = [   "/",   "/about",   ...dynamicRoutes.map(id => `/project/${id}`) ];```

**Keterangan:**

*   `dynamicRoutes` berisi daftar halaman dinamis.  
    Misalnya, jika kamu memiliki halaman `/project/vue`, maka tambahkan `"vue"`.
    
*   Kamu bisa menambah rute lain seperti:
    
    `const dynamicRoutes = ["vue", "react-new", "angular"];`
    


## Build Proyek

Untuk melakukan build dengan prerendering:

`npm run build`

Setelah proses selesai, folder `dist/` akan berisi hasil prerender statis.


## Deploy ke Production--

1.  Pindah ke folder **production**:
        
    `cd ../production`
    
2.  Install dependensi server:
    
    `npm install`
    
3.  Salin hasil build (`dist/`) dari folder development ke dalam folder `public/` di production:
    
    `production/public/dist/`
    
4.  Jalankan server Express:
    
    `node server`
    
5.  Jika berjalan lancar di lokal, kamu bisa **upload folder production ke share hosting atau VPS**.
    


### Catatan Penting

*   Pastikan file **dist** sudah berisi hasil build lengkap sebelum diupload.
    
*   Jika kamu menggunakan **shared hosting**, pastikan environment Node.js aktif.
    
*   Gunakan **custom domain** agar URL yang di-prerender dikenali oleh mesin pencari.
    
*   Untuk SEO optimal, pastikan setiap halaman memiliki:
    
    *   `<title>` unik
        
    *   `<meta name="description">` sesuai konten halaman
        


## Script Utama

*   `npm run dev` → Jalankan mode pengembangan
    
*   `npm run build` → Build proyek + prerender sitemap
    
*   `npm run preview` → Jalankan preview lokal hasil build
    


## Hasil Akhir

Setelah deploy, aplikasi kamu:

*   Teroptimasi untuk **SEO** (HTML sudah di-prerender)
    
*   Tetap berfungsi sebagai **SPA interaktif**
    
*   Dapat dijalankan di **shared hosting atau server Node.js**
    


## Kontributor

Template ini dikembangkan oleh [Dupan Code](https://dupancode.com) sebagai pondasi untuk proyek SPA SEO-friendly.  
Dapat digunakan dan dimodifikasi bebas untuk keperluan pribadi atau komersial.
