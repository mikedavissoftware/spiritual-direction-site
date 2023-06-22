ActiveAdmin.register Post do
  permit_params :title, :body, :placeholder_image, :image, :published_at
  
  controller do
    skip_before_action :authenticate_active_admin_user, only: [:index, :show]
  end

  index do
    selectable_column
    column :id
    column :title
    column :body do |post|
      raw(post.body)
    end
    column :placeholder_image
    column :image do |post|
      if post.image.attached?
        span do
          link_to post.image, target: :_blank do 
            # image_tag(post.image.variant(resize: "100^x100^"))
            url_for(post.image)
          end
        end
      else
        span do
          "N/A"
        end
      end
    end
    column :published_at
    column :created_at
    column :updated_at
    actions
  end

  form do |f|
    f.inputs 'Post' do
      f.input :title
      f.input :body, as: :quill_editor
      f.input :placeholder_image
      f.input :image, as: :file, input_html: { multiple: false }, label: 'Add an image to the blog post'
      f.input :published_at
    end
    f.actions
  end

  show do |t|
    attributes_table do
      if t.image.attached?
        span do
          # for some reason this image tag successfully opened in a new tab when putting it in a block with the 'do' and 'end', instead of one line
          link_to t.image, target: :_blank do 
            image_tag(t.image.variant(resize: "324^x324^"))
          end
        end
      else
        span do
          # for some reason this image tag successfully opened in a new tab when putting it in a block with the 'do' and 'end', instead of one line
          link_to t.placeholder_image, target: :_blank do 
            image_tag(t.placeholder_image)
          end
        end
      end
      row :title
      row :body do
        raw(t.body)
      end
      row :placeholder_image
      row :created_at
      row :updated_at
      row :published_at
    end
  end
  
end
