# TomYo Translate

TomYo Translate нь англи - монгол хэлний хооронд үгс, хэллэгүүдийг орчуулах боломжийг олгодог онлайн орчуулгын хэрэгсэл юм.
Та өөрийн аппликэйшн болон системдээ API интеграци хийн ашиглах бүрэн боломжтой.

## API ашиглах жишээ

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