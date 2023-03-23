import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import { AppStore } from './store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

const store = AppStore();

root.render(
  <Provider store={store}>
    <App /> 
  </Provider>
  )