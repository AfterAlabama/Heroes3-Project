import { CreateCookie } from "./CreateCookie";

export const DeleteCookie = (name:string): void => {
  CreateCookie(name, null, null)
}