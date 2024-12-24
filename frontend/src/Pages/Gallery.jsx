import { lazy, Suspense } from "react"

const LaztCom = lazy(()=> import('../Components/CrudExample')); 
export default function Gallery() {
  return (
    <>
      <section className="py-5 bg-slate-100 mt-1 border-y">
        <div className="container">
            <h1>Gallery</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          
        <Suspense fallback={"Loading"}>
          <LaztCom />
        </Suspense>

        </div>
      </section>

    </>
  )
}
