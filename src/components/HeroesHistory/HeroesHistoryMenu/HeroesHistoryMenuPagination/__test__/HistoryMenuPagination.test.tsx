import { render, screen } from "@testing-library/react";
import HistoryMenuPagination from "../HistoryMenuPagination";
import { AppStore } from "../../../../../store/store";
import { Provider } from "react-redux";

describe('History Menu Pagination', () => {
  test('Pagination renders 3 pages with the Castle array', () => {
    const store = AppStore()
    render(
      <Provider store={store} >
        <HistoryMenuPagination arrayIndex={0} />
      </Provider>
    )
    expect(screen.getByRole('button', {
      name: /1/
    })).toBeInTheDocument()
    expect(screen.getByRole('button', {
      name: /2/
    })).toBeInTheDocument()
    expect(screen.getByRole('button', {
      name: /3/
    })).toBeInTheDocument()
  });

  test('Pagination renders 2 pages with any other alignment array', () => {
    const store = AppStore()
    Array(8).fill(null).map((_, index) => {
      const { unmount } = render(
        <Provider store={store} >
          <HistoryMenuPagination arrayIndex={index+ 1} />
        </Provider>
      )
      expect(screen.getByRole('button', {
        name: /1/
      })).toBeInTheDocument()
      expect(screen.getByRole('button', {
        name: /2/
      })).toBeInTheDocument()
      expect(screen.queryByRole('button', {
        name: /3/
      })).toBeNull()
      unmount()
    })
  })
})