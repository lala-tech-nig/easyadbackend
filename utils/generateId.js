import { v4 as uuidv4 } from "uuid";

export function generateEasyAdId() {
  return "EASYAD-" + uuidv4().split("-")[0].toUpperCase();
}
