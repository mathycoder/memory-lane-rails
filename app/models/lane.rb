class Lane < ApplicationRecord
    has_many :user_lanes
    has_many :users, through: :user_lanes
    has_many :memories
end
