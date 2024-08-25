export interface ViewLogic<T> {
  view:
    | ((props: T) => React.JSX.Element | null)
    | React.MemoExoticComponent<(props: T) => React.JSX.Element | null>;
}
