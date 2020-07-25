class User < ApplicationRecord
    has_many :user_lanes
    has_many :lanes, through: :user_lanes
end
