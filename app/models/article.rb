class Article < ApplicationRecord
  has_many :contents, dependent: :destroy
end
