class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :start_date, :end_date, :duration, :aasm_state
  has_one :user
end
