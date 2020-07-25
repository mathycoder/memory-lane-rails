class User < ApplicationRecord
    has_many :user_lanes
    has_many :lanes, through: :user_lanes
    has_many :memories, through: :lanes
    has_many :recollections
    has_many :photos
end
