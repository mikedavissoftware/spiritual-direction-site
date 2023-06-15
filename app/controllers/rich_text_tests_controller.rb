class RichTextTestsController < InheritedResources::Base

  private

    def rich_text_test_params
      params.require(:rich_text_test).permit(:body)
    end

end
