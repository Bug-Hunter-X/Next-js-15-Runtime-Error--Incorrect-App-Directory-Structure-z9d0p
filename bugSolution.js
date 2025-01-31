```javascript
// app/page.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a paragraph of text.</p>
    </div>
  );
}
```
The solution moves the component to `app/page.js`.  This conforms to the Next.js 15 `app` directory structure, ensuring proper rendering.