# portfolio_me
Portfolio yang saya bangun dengan HTML, CSS dan Js

Untuk menjalankan project ini, pastikan `npm` sudah terinstall pada komputer/laptop Anda.
---
Tata cara menjalankan project:

1. Install node modules

```
npm install
```
2. Tambahkan Tailwind CLI build process (pada package.json)

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
