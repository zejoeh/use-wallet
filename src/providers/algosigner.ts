import { PROVIDER_ID } from "../constants";
import type { WalletProvider } from "../types";

const icon =
  "data:image/svg+xml;base64," +
  "PHN2ZyB3aWR0aD0iMjM4IiBoZWlnaHQ9IjIzOCIgdmlld0JveD0iMCAwIDIzOCAyMzgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01MS43MDUgMTQ1LjA0MkgxMTYuNzA1TDEwNy43MDUgMTU1LjA0Mkg1MS43MDVWMTQ1LjA0MloiIGZpbGw9IiNENjQ1MDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDcuNTE5IDE5MS41NTdMMTI5LjU3NyAxNDQuMzk0TDE0Mi40MDQgMTI3LjExMkwxNjcuODc1IDE5MS41NTdIMTQ3LjUxOVpNMTEwLjkzNiA5NS4zOTMyTDEyMC42MTMgMTIwLjgzMUwxMzMuMzU5IDEwNC4yMjhMMTE3LjQ3NSA2NC4wNDIyQzExNS45MjggNjAuMTI4IDExMi4xNDYgNTcuNTU2NSAxMDcuOTM4IDU3LjU1NjVDMTAzLjcyOSA1Ny41NTY1IDk5Ljk0NzQgNjAuMTI4IDk4LjQwMDMgNjQuMDQyMkw2Ny45NjU5IDE0MS4wNDJIODcuNzgwN0M5NS40MTUzIDEyMS4wMTEgMTAyLjg5MyAxMDEuMzk5IDEwNS4xOTggOTUuMzU0MUMxMDUuNjQxIDk0LjE5MTIgMTA2Ljc0MyA5My40NTk5IDEwNy45ODcgOTMuNDU5OUgxMDguMTMyQzEwOS4zNzggOTMuNDU5OSAxMTAuNDkzIDk0LjIyOTMgMTEwLjkzNiA5NS4zOTMyWk04MC45MjEgMTU5LjA0MkM3NC45Mjg5IDE3NC43NjggNjkuODY2MSAxODguMDYzIDY4LjU0NDcgMTkxLjU1N0g0OEw2MC44NTE0IDE1OS4wNDJIODAuOTIxWiIgZmlsbD0iIzIyMkI2MCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3Ni4wMjYgNTQuNzUwOUMxNzcuOTk3IDUyLjA4NzIgMTgxLjc1NCA1MS41MjU3IDE4NC40MTggNTMuNDk2N0MxODcuMDgyIDU1LjQ2NzggMTg3LjY0MyA1OS4yMjUxIDE4NS42NzIgNjEuODg4OEwxMzAuMDEzIDEzNy4xMDdDMTI5LjcxNCAxMzcuNTEyIDEyOS4zNDEgMTM3Ljg1NyAxMjguOTEzIDEzOC4xMjNMMTE3Ljg1NiAxNDUuMDEzQzExNy4wODcgMTQ1LjQ5MyAxMTYuMTI4IDE0NC43ODMgMTE2LjM2MSAxNDMuOTA3TDExOS43MTggMTMxLjMxOEMxMTkuODQ3IDEzMC44MzIgMTIwLjA2OCAxMzAuMzc0IDEyMC4zNjcgMTI5Ljk3TDE3MC42NyA2MS45ODlMMTY5LjkyOSA2MS40NDA1QzE2OS40ODUgNjEuMTEyIDE2OC44NTkgNjEuMjA1NiAxNjguNTMgNjEuNjQ5NkwxNTIuMzExIDgzLjU2ODhDMTUyLjU4NiA4NC4yMDIzIDE1Mi41MjQgODQuOTYxMiAxNTIuMDg0IDg1LjU1NjJMMTQ5LjExIDg5LjU3NTVDMTQ4LjQ1MyA5MC40NjM0IDE0Ny4yMDEgOTAuNjUwNiAxNDYuMzEzIDg5Ljk5MzZDMTQ1LjQyNSA4OS4zMzY2IDE0NS4yMzggODguMDg0MSAxNDUuODk1IDg3LjE5NjJMMTQ3LjY3OSA4NC43ODQ3TDE0OC44NjkgODMuMTc2OUwxNjcuMzA4IDU4LjI1NzRDMTY4LjYyMiA1Ni40ODE1IDE3MS4xMjcgNTYuMTA3MiAxNzIuOTAzIDU3LjQyMTJMMTczLjY0NCA1Ny45Njk3TDE3Ni4wMjYgNTQuNzUwOVoiIGZpbGw9IiNENjQ1MDAiLz4KPC9zdmc+Cg==";

export const ALGO_SIGNER: WalletProvider = {
  id: PROVIDER_ID.ALGO_SIGNER,
  name: "AlgoSigner",
  icon,
  isWalletConnect: false,
};
