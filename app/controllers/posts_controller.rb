class PostsController < InheritedResources::Base

  private

    def post_params
      params.require(:post).permit(:title, :body, :image, :published_at)
    end

end

# note that this controller inherits from InheritedResources::Base
# this might mean that other controllers do as well
