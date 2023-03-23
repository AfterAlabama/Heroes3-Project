import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppStore } from './store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

const store = AppStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App /> 
    </Provider>
  </BrowserRouter>
  )