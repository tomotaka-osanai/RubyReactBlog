class ApplicationController < ActionController::Base
  # すべてのURL生成時にformat: :htmlをデフォルトにする
  def default_url_options
    { format: :html }
  end
end
