import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import App from './App.tsx'
import "./index.css"

import { store } from '@store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <Theme appearance="dark">
            <App />
          </Theme>
      </Provider>
  </StrictMode>,
)
