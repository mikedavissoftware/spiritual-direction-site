class ApplicationController < ActionController::Base
  # include ActionController::Cookies
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # before_action :authorize
  # skip_forgery_protection

  # private

  # def render_not_found(exception)
  #   # render json: {error: "#{exception.model} not found"}, status: :not_found
  #   redirect_to login_path, alert: "User not found"
  # end

  # def render_unprocessable_entity(exception)
  #   # render json: {errors:exception.record.errors.full_messages}, status: :unprocessable_entity
  #   redirect_to login_path, alert: "Unprocessable entity"
  # end

  # def authorize
  #   @current_user = User.find(session[:user_id])
  # end
end
