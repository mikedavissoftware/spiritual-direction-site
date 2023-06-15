ActiveAdmin.register RichTextTest do
  index do
    selectable_column
    column :id
    column :body
    column :created_at
    column :updated_at
    actions
  end

  permit_params :body

  form do |f|
    f.inputs 'Rich Text Test' do
      f.input :body, as: :quill_editor
    end
    f.actions
  end

  show do |t|
    attributes_table do
      row :created_at
      row :updated_at
      row :body, as: :quill_
      row :slug
      row :category
    end
  end

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :body
  #
  # or
  #
  # permit_params do
  #   permitted = [:body]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
