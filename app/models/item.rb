class Item < ApplicationRecord
  belongs_to :department
  validates :name, presence: true
  has_many :reviews, dependent: :destroy
end
