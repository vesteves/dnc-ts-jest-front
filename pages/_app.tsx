import '../app/globals.css';

type Props = {
  Component: React.ComponentType;
  pageProps: object;
};

export default function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
