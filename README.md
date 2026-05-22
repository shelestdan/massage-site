# Сайт массажа

Статический сайт без сборки и серверной части. Подходит для минимального тарифа Timeweb.

## Публикация

Загрузить в корень сайта:

- `index.html`
- `prices.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- папку `assets/`

Форм обратной связи нет. Запись идет через телефон, WhatsApp и ссылку на карту.

Если подключите другой домен, заменить `https://shelestdan.github.io/massage-site` в `index.html`, `prices.html`, `robots.txt` и `sitemap.xml`.

## SEO и аналитика

- `assets/favicon.svg` - favicon.
- `assets/logo.svg` - логотип в шапке.
- `seo-direct-plan.md` - структура SEO и Яндекс Директ.
- Для целей Яндекс Метрики добавить ID счетчика перед `script.js`:

```html
<script>window.YA_METRIKA_ID = 12345678;</script>
```

## Локальный просмотр

```bash
python3 -m http.server 4174
```

Открыть: `http://127.0.0.1:4174/`
