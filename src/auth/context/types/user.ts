export interface AuthContextData {
  user?: {
    id: string
    name: string
  }
  login?: (arg0: string) => void
  logout?: () => void
  logged?: boolean
}
