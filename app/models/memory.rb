class Memory < ApplicationRecord
    belongs_to :lane
    has_many :recollections
    has_many :photos
end
