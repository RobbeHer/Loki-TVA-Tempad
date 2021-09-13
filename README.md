# Loki: TVA Tempad

## Tips testing the PWA
1. Make sure to not block all cookies since the service-worker won't be downloadable.
2. Do not put the .htacces file in the public directory when running ``npm run build`` since the service-worker will not be able to download it from your server.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
