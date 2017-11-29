class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :start_date, :end_date, :duration
  has_one :user
end
