import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const route = useRouter()
  useEffect(() => {
    if(
      !localStorage.getItem('Authorization')){
        route.push('/login')
      }
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
