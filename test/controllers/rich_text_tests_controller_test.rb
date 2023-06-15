require "test_helper"

class RichTextTestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rich_text_test = rich_text_tests(:one)
  end

  test "should get index" do
    get rich_text_tests_url
    assert_response :success
  end

  test "should get new" do
    get new_rich_text_test_url
    assert_response :success
  end

  test "should create rich_text_test" do
    assert_difference("RichTextTest.count") do
      post rich_text_tests_url, params: { rich_text_test: { body: @rich_text_test.body } }
    end

    assert_redirected_to rich_text_test_url(RichTextTest.last)
  end

  test "should show rich_text_test" do
    get rich_text_test_url(@rich_text_test)
    assert_response :success
  end

  test "should get edit" do
    get edit_rich_text_test_url(@rich_text_test)
    assert_response :success
  end

  test "should update rich_text_test" do
    patch rich_text_test_url(@rich_text_test), params: { rich_text_test: { body: @rich_text_test.body } }
    assert_redirected_to rich_text_test_url(@rich_text_test)
  end

  test "should destroy rich_text_test" do
    assert_difference("RichTextTest.count", -1) do
      delete rich_text_test_url(@rich_text_test)
    end

    assert_redirected_to rich_text_tests_url
  end
end
