import './globals.css';
import { pageContext } from '../context';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <pageContext.Provider value="not default 👍">
          <div style={{ border: '10px solid white', height: '100vh' }}>
            {children}
          </div>
        </pageContext.Provider>
      </body>
    </html>
  );
}
