import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
