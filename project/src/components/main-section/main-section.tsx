type MainChildrens = {
  isEmpty: boolean,
  children: JSX.Element[],
}

function MainSection({ isEmpty, children }: MainChildrens): JSX.Element {
  const classEmpty = isEmpty ? 'page__main--index-empty' : '';

  return (
    <main className={`page__main page__main--index ${classEmpty}`}>
      <h1 className="visually-hidden">Cities</h1>
      {children.map((item) => item)}
    </main>
  );
}

export default MainSection;
