export interface IRoute {
  path: string
  params: object
}


export interface ISubscribable {
  subscribe(fn: () => void): () => void
}


export type ICallable = () => void