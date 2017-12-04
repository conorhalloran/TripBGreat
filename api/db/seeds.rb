PASSWORD = 'password'

Trip.destroy_all
User.destroy_all
Day.destroy_all

super_user = User.create(
    first_name: 'Super',
    last_name: 'Dude',
    email: 'conor@conor.com',
    password: PASSWORD
)

10.times.each do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password: PASSWORD
    )
end

users = User.all

users.each do |user|
    arr = users.ids
    arr.delete_if{|i|i==user.id}
    
    rand(2..7).times.each do
        usedId = arr.sample
        arr.delete_if{|i|i==usedId}
        user.friendships.push(
            Friendship.create(
                user_id: user,
                friend_id: usedId,
            )
        )
    end
    user.save
end


states = [
  'pending',
  'published',
  'in_progress',
  'completed'
]
# days.ago.strftime(%d/%m/%Y)
15.times.each do
    start_date = Faker::Time.between(DateTime.now - 10, DateTime.now)
    end_date = Faker::Time.between(DateTime.now, DateTime.now + 10)
    longitude = 49.499316
    latitude = -119.593725
    # arr = users
    # trip_users = []
    # rand(2..7).times.each do
    #     usedId = arr.sample
    #     trip_users.push(usedId)
    #     arr.delete_if{|i|i==usedId}
    # end
    Trip.create(
        title: Faker::Pokemon.name,
        description: Faker::RickAndMorty.quote,
        user_id: users.sample.id,
        location: Faker::LordOfTheRings.location,
        start_date: start_date.strftime("%d/%m/%Y"),
        end_date: end_date.strftime("%d/%m/%Y"),
        aasm_state: states.sample,
        longitude: latitude + rand / 20,
        latitude: longitude + rand / 50,
    )
end

trips = Trip.all

trips.each do |trip|
    userArray = users
    rand(2..7).times.each do
        usedId = userArray.sample
        trip.users << usedId
    end
    
    trip.duration.times.each do
    Day.create(
        title: Faker::Pokemon.name,
        description: Faker::RickAndMorty.quote,
        date: trip.start_date,
        start_location: trip.location,
        start_longitude: trip.longitude,
        start_latitude: trip.latitude,
        end_location: trip.location + "_end",
        end_longitude: trip.longitude + 1,
        end_latitude: trip.latitude + 1,
        user_id: trip.user_id,
        trip_id: trip.id,

    )
    end
end 
days = Day.all

puts Cowsay.say("SEED RESULTS", :ghostbusters)
puts "---------------------------------------------------------------------"
puts "Created #{users.count} users"
puts "Created #{trips.count} trips"
puts "Created #{days.count} days"
puts "Log in with super_user. email: #{super_user.email} password: #{PASSWORD}"