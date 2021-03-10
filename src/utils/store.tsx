/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactElement, useState } from 'react'

export interface StoreProps {
  web3Account: string
  setWeb3Account: React.Dispatch<React.SetStateAction<string>>
}

export function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

export const [useStore, CtxProvider] = createCtx<StoreProps>()

export const StoreProvider = ({ children }: any) => {
  const [web3Account, setWeb3Account] = useState<string>('')
  return <CtxProvider value={{ web3Account, setWeb3Account }}>{children}</CtxProvider>
}
