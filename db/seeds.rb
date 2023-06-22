p "🌱 Now Seeding..."

p "Seeding Users..."
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

p "Seeding Posts..."
10.times do
  Post.create!(
    title: Faker::Lorem.sentence(word_count: 5),
    body: Faker::Lorem.paragraph(sentence_count: 30),
    placeholder_image: Faker::LoremFlickr.image(size: "500x600", search_terms: ['sports'])
  )
end

p "🌱 Done Seeding!"