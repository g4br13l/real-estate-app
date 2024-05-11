






type StatesT = {
  isLoading: boolean | undefined,
  error: string | null,
  user: PropertyT[]
}

type ActionsT = {
  setLoading: (isLoading: boolean) => void,
  getProperties: () => void,
}

type UserStoreT = {
  states: StatesT
  actions: ActionsT
}






