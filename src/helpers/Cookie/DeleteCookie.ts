import { CreateCookie } from "./CreateCookie";

export const DeleteCookie = (name:string) => {
  CreateCookie(name, null, null)
}