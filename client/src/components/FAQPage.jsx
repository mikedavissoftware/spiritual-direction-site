


export default function FAQPage() {



  return (
    <div>
      <div className="hero bg-white text-primary">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">FAQ Page</h1>
            <p className="py-6">This is the FAQ page component</p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-xl">

        <div className="collapse collapse-arrow bg-base-200 m-3">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            FAQ 1
          </div>
          <div className="collapse-content"> 
            <p>Answer to FAQ 1</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 m-3">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            FAQ 2
          </div>
          <div className="collapse-content"> 
            <p>Answer to FAQ 2</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 m-3">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            FAQ 3
          </div>
          <div className="collapse-content"> 
            <p>Answer to FAQ 3</p>
          </div>
        </div>

      </div>
    </div>
  )
}