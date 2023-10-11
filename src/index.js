import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import client from './components/react-query-client'


const container = document.getElementById('root')

const root = ReactDOM.createRoot((container))
// const client = new QueryClient()

root.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools/>
  </QueryClientProvider>
)


if (import.meta.hot) {
    import.meta.hot.accept()
}