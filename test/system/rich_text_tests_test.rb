require "application_system_test_case"

class RichTextTestsTest < ApplicationSystemTestCase
  setup do
    @rich_text_test = rich_text_tests(:one)
  end

  test "visiting the index" do
    visit rich_text_tests_url
    assert_selector "h1", text: "Rich text tests"
  end

  test "should create rich text test" do
    visit rich_text_tests_url
    click_on "New rich text test"

    fill_in "Body", with: @rich_text_test.body
    click_on "Create Rich text test"

    assert_text "Rich text test was successfully created"
    click_on "Back"
  end

  test "should update Rich text test" do
    visit rich_text_test_url(@rich_text_test)
    click_on "Edit this rich text test", match: :first

    fill_in "Body", with: @rich_text_test.body
    click_on "Update Rich text test"

    assert_text "Rich text test was successfully updated"
    click_on "Back"
  end

  test "should destroy Rich text test" do
    visit rich_text_test_url(@rich_text_test)
    click_on "Destroy this rich text test", match: :first

    assert_text "Rich text test was successfully destroyed"
  end
end
