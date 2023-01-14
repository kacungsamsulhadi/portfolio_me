# portfolio_me
Portfolio yang saya bangun dengan HTML dan TailwindCSS

Untuk menjalankan project ini, pastikan `npm` sudah terinstall pada komputer/laptop Anda.
---
Tata cara menjalankan project:

1. Install node modules

```
npm install
```
2. Tambahkan Tailwind CLI build process

```
"dev": "tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch"
```

3. Minify (optional)

```
"minify": "tailwindcss -o ./public/css/final.css --minify"
```

3. Jalankan project

```
npm run dev
```
