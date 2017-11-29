PASSWORD = 'password'

Trip.destroy_all
User.destroy_all

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

10.times.each do
    start_date = Faker::Time.between(DateTime.now - 10, DateTime.now)
    end_date = Faker::Time.between(DateTime.now, DateTime.now + 10)
    duration = (end_date.to_date - start_date.to_date).to_i
    Trip.create(
        title: Faker::Pokemon.name,
        description: Faker::RickAndMorty.quote,
        user: users.sample,
        location: Faker::LordOfTheRings.location,
        start_date: start_date,
        end_date: end_date,
        duration: duration,
    )
end

trips = Trip.all

puts "--------- SEED RESULTS ---------"
puts "Created #{users.count} users"
puts "Created #{trips.count} trips"
# puts "Created #{bids.count} bids"
puts "Log in with super_user. email: #{super_user.email} password: #{PASSWORD}"