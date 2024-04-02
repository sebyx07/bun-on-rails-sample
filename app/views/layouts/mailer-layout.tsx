export default function MailerLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
        <Style file="mailer.scss" />
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}