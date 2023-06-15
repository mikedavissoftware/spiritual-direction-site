  # json.partial! "@posts/post", post: @post

  json.post do
    json.id @post.id
    # json.title @post.title
    json.body @post.body
    # json.image @post.image
    json.published_at @post.published_at
    if @post.image.attached?
      json.image (url_for(@post.image))
      json.image_as_thumbnail (url_for(@post.image_as_thumbnail))
    end
  end
