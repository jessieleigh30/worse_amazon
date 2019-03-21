class Review < ApplicationRecord
  validates :title, presence: true
  belongs_to :item
end
