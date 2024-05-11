"use client"

import { fetchAllProps } from "@/app/property/actions";
import { create } from "zustand";
import { persist } from "zustand/middleware";






type StatesT = {
  isLoading: boolean | undefined,
  error: string | null,
  properties: PropertyT[]
}

type ActionsT = {
  setLoading: (isLoading: boolean) => void,
  getProperties: () => void,
}

type PropertyStoreT = {
  states: StatesT
  actions: ActionsT
}



export const usePropertyStore = create<PropertyStoreT>()
(
  persist( (set) => ({

    states: {
      isLoading: undefined,
      error: null,
      properties: [],
    },


    actions: {

      setLoading: (isLoading: boolean) => {
        set((store) => ({
          states: { ...store.states, isLoading: isLoading }
        }))
      },

      getProperties: async () => {

        set((store) => ({ states: { ...store.states, isLoading: true } }))

        try {
          const props: PropertyT[] = await fetchAllProps()
          console.log("usePropertyStore.getProperties:", props)
          set((store) => ({
            states: { ...store.states, properties: props, isLoading: false }
          }))
        }
        catch (error: any) {
          set((store) => ({
            states: { ...store.states, error: error.message, isLoading: false }
          }))
        }
      },
    }

  }),

  { name: "property-store", skipHydration: true }
))











