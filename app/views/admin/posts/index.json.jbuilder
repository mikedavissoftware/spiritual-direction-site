json.array! @posts do |post|
  json.id post.id
  json.title post.title
  json.body post.body
  json.placeholder_image post.placeholder_image
  if post.image.attached?
    json.image ("#{ENV["BASE_URL"]}#{url_for(post.image)}")
    # json.image_as_thumbnail (url_for(post.image_as_thumbnail))
  end
  json.published_at post.published_at
  json.created_at post.created_at
  json.updated_at post.updated_at
end
