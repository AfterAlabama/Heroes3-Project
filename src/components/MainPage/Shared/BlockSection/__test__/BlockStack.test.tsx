import { render, screen, waitFor } from "@testing-library/react";
import { AppStore } from "../../../../../store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import BlockStack from "../BlockStack";
import { MainSlice } from "../../../../../store/Reducers/MainSlice";


describe('Block Stack', () => {
  test('Block Stack displays a working link if user is authorized', async () => {
    const store = AppStore();
    const { changeAuth } = MainSlice.actions
    render(
      <Provider store={store} >
        <MemoryRouter>
          <BlockStack />
        </MemoryRouter>
      </Provider>
    )

    await waitFor(() => store.dispatch(changeAuth(true)))

    expect(screen.getAllByText(/смотреть/i)[0]).toBeInTheDocument()
  });

  test('Block Stack displays a link to auth form if user is not authorized', async () => {
    const store = AppStore();
    const { changeAuth } = MainSlice.actions
    store.dispatch(changeAuth(true))
    render(
      <Provider store={store} >
        <MemoryRouter>
          <BlockStack />
        </MemoryRouter>
      </Provider>
    )

    await waitFor(() => store.dispatch(changeAuth(false)))

    expect(screen.getAllByText(/войти/i)[0]).toBeInTheDocument()
  })
})