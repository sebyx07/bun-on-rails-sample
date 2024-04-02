export default function ApplicationLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
        <Style file="application.scss" />
        <Style file="tailwind.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}