ActiveAdmin.register Post do
  index do
    selectable_column
    column :id
    column :title
    column :body
    column :image
    column :published_at
    column :created_at
    column :updated_at
    actions
  end

  permit_params :title, :body, :image, :published_at

  form do |f|
    f.inputs 'Post' do
      f.input :title
      f.input :body, as: :quill_editor
      f.input :image, as: :file, input_html: { multiple: false }, label: 'Add an image to the blog post'
      f.input :published_at
    end
    f.actions
  end

  show do |t|
    attributes_table do
      if t.image.attached?
        puts "ayyyyyyy"
        span do
          # for some reason this image tag successfully opened in a new tab when putting it in a block with the 'do' and 'end', instead of one line
          link_to t.image, target: :_blank do 
            image_tag(t.image.variant(resize: "324^x324^"))
          end
        end
      end
      row :title
      row :created_at
      row :updated_at
      row :published_at
    end
  end
  
end
