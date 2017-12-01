class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :start_date, :end_date, :duration, :aasm_state, :user, :longitude, :latitude
  belongs_to :user

  # def duration
  #   (object.end_date.to_date - object.start_date.to_date).to_i
  # end

  # def start_date
  #   object.start_date.strftime('%Y-%B-%d')
  # end

  # def end_date
  #   object.end_date.strftime('%Y-%B-%d')
  # end

  def user
    object.user.full_name
  end
  
end
