class Trip < ApplicationRecord
  belongs_to :user
  validates :title, presence: true

  include AASM 

    aasm whiny_transitions: false do
        state :pending, initial: true 
        state :published
        state :in_progress
        state :completed

        event :publish do 
        transitions from: :pending, to: :published
        end 

        event :mark_in_progress do 
        transitions from: :published, to: :in_progress
        end

        event :archive do 
        transitions from: [:published, :in_progress], to: :completed
        end 

    end
end
