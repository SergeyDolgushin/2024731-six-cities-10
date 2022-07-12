function PageNotFound(): JSX.Element {

  return (
    <main className="page__404">
      <h1 className="pvisually-hidden">Ошибка 404</h1>
      <div className="page__404__text">
        <p>Такой страницы не существует</p>
      </div>
    </main>
  );
}

export default PageNotFound;
