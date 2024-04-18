# TomYo Translate

TomYo's service, offered free of charge, instantly translates words, phrases between English and Mongolian.

## API Examples

### Simple

Request:

```javascript
const res = await fetch("https://api.translate.tomyo.io/predict", {
  method: "POST",
  body: JSON.stringify({
    text: "Hello!",
  }),
  headers: { "Content-Type": "application/json" }
});

console.log(await res.json());
```

Response:

```javascript
{
    "Сайн уу!"
}
```