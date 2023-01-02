export interface AuthContextData {
  user?: {
    id: string
    name: string
  } | null
  login?: (arg0: string) => void
  logout?: () => void
  logged?: boolean
}
