import { PROVIDER_ID } from "../constants";
import type { WalletProvider } from "../types";

const icon =
  "data:image/svg+xml;base64," +
  "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDkuODMgMjEwLjMzIj48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE2MS4zMSkiIHN0eWxlPSJmb250LWZhbWlseTpJQk1QbGV4U2Fucy1NZWRtLCAmYXBvcztJQk0gUGxleCBTYW5zJmFwb3M7OyBmb250LXNpemU6MTkwcHg7Ij48dHNwYW4geD0iMCIgeT0iMCI+S01EPC90c3Bhbj48L3RleHQ+PC9zdmc+";

export const KMD_WALLET: WalletProvider = {
  id: PROVIDER_ID.KMD_WALLET,
  name: "KMD",
  icon,
  isWalletConnect: false,
};
