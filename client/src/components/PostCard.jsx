


export default function PostCard({ post }) {

  const {title, body, placeholder_image} = post

  const parser = new DOMParser()
  const parsedBody = parser.parseFromString(body, "text/html")

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={placeholder_image} alt="Blog Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {body}
        <div className="card-actions">
          <button className="btn btn-primary">Read this Blog</button>
        </div>
      </div>
    </div>
  )
}