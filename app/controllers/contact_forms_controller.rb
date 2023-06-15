class ContactFormsController < ApplicationController
  # skip_before_action :authorize
  before_action :initialize_errors
  before_action :initialize_symbols

  def create
    @contact_form = ContactForm.new(contact_form_params)

    if @contact_form.deliver
      render json: {success: ["Email successfully sent! We will be in touch."], headers: @contact_form.headers}, status: :ok
    else
      @symbols_array.each{|symbol|
        if @contact_form.errors[symbol].present?
          symbol_errors = @contact_form.errors[symbol].map{|error|
            "#{symbol.to_s.capitalize} #{error}."
          }
          @errors.concat(symbol_errors)
        end
      }
      render json: {errors: @errors}, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def contact_form_params
      params.require(:contact_form).permit(:name, :email, :content)
    end

    def initialize_errors
      @errors = ["Unable to process your submission."]
    end

    def initialize_symbols
      @symbols_array = [:name, :email, :content]
    end

end


# To use ActionMailer with more complex functionality:

# First, you must have a contact_form_mailer.rb file in app/mailers

# Then, you need to create views and make sure the proper layouts are present

# Next, you can create test mailers or just move on to the next step

# Now, you can move on to placing the code below in your controller

# def create
#   @contact_form = ContactForm.new(contact_form_params)

#   ContactFormMailer.with(contact_form: @contact_form).new_contact_form_email.deliver!

#   if @contact_form.deliver
#     render json: {success: ["Email successfully sent! We will be in touch."]}, status: :ok
#   else
#     render json: {errors: ["Something went wrong. Please try again or email us directly at ron@daggettcontrol.com."]}, status: :unprocessable_entity
#   end
# end