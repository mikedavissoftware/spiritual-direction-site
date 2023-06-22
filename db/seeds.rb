p "🌱 Now Seeding..."

p "Seeding Users..."
AdminUser.create(
  email: 'admin@example.com', 
  password: 'password', 
  password_confirmation: 'password'
)

p "Seeding Posts..."
10.times do
  Post.create(
    title: Faker::Lorem.sentence(word_count: 5),
    body: Faker::Lorem.paragraph(sentence_count: 30),
    placeholder_image: Faker::LoremFlickr.image(size: "500x600", search_terms: ['sports'])
  )
  p "Created Post"
end

p "🌱 Done Seeding!"