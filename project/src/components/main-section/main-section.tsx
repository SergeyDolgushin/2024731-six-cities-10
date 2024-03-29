import { CLASS_EMPTY } from './constants';

type MainChildrens = {
  isEmpty: boolean,
  children: JSX.Element[],
}

function MainSection({ isEmpty, children }: MainChildrens): JSX.Element {
  const classEmpty = isEmpty ? CLASS_EMPTY : '';

  return (
    <main className={`page__main page__main--index ${classEmpty}`} data-testid={`${classEmpty}`} >
      <h1 className="visually-hidden">Cities</h1>
      {children.map((item) => item)}
    </main>
  );
}

export { MainSection };
