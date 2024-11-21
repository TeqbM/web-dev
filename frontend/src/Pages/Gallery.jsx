import Todo from "../Components/Todo";

export default function Gallery() {

  return (
    <>
      <section className="py-4 bg-slate-100">
        <div className="container">
            <h1>Gallery</h1>
        </div>
      </section>

      <section className="py-7">
        <div className="container">
          <Todo />
        </div>
      </section>

    </>
  )
}
