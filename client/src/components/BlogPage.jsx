import PostsCollection from "./PostsCollection"


export default function BlogPage() {



  return (
    <div>
      <div className="hero bg-white text-primary">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Blog Page</h1>
            <p className="py-6">This is the blog page component. Here the page will list the latest blog posts. There will also be an individual page for each blog post, if needed. These inidividual pages can expand on detail.</p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
      <PostsCollection />
    </div>
  )
}