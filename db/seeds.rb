# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Dwelling.destroy_all
Booking.destroy_all
Review.destroy_all
Dwelling.create(image_url: 'http://d3b8erylo0uriu.cloudfront.net/wp-content/uploads/2014/06/diagon-alley-preview-universal-studios-florida-07-02-147026-oi.jpg', description: 'Shared', title: "Close to Magic Shops", location: "Hogwarts School of Witchcraft andd Wizardry", guest_limit: 1, bedrooms: 1, beds: 2, about_this: "", price: 60, owner_id: 1, check_in: "", check_out: "", house_rules: "")
Dwelling.create(image_url: 'http://d3b8erylo0uriu.cloudfront.net/wp-content/uploads/2014/06/diagon-alley-preview-universal-studios-florida-07-02-147026-oi.jpg', description: 'Shared', title: "Close to Magic Shops", location: "Diagon Alley, London, Great Britain", guest_limit: 2, bedrooms: 1, beds: 1, about_this: "Amazing 2rd floor condo adjacent to magical shops of all kinds in hip Diagon Alley.  Close to portkeys to Hogsmeade, Godric's Hallow, and New York City", price: 100, owner_id: 1, check_in: "", check_out: "", house_rules: "")
Dwelling.create(image_url: 'http://d3b8erylo0uriu.cloudfront.net/wp-content/uploads/2014/06/diagon-alley-preview-universal-studios-florida-07-02-147026-oi.jpg', description: 'Shared', title: "Close to Magic Shops", location: "Diagon Alley, London, Great Britain", guest_limit: 2, bedrooms: 1, beds: 1, about_this: "Amazing 2rd floor condo adjacent to magical shops of all kinds in hip Diagon Alley.  Close to portkeys to Hogsmeade, Godric's Hallow, and New York City", price: 500, owner_id: 1, check_in: "", check_out: "", house_rules: "")
Dwelling.create(image_url: 'http://d3b8erylo0uriu.cloudfront.net/wp-content/uploads/2014/06/diagon-alley-preview-universal-studios-florida-07-02-147026-oi.jpg', description: 'Shared', title: "Close to Magic Shops", location: "Diagon Alley, London, Great Britain", guest_limit: 2, bedrooms: 1, beds: 1, about_this: "Amazing 2rd floor condo adjacent to magical shops of all kinds in hip Diagon Alley.  Close to portkeys to Hogsmeade, Godric's Hallow, and New York City", price: 700, owner_id: 1, check_in: "", check_out: "", house_rules: "")
User.create(  email: "harry",
  password: "1234567",
  session_token: "OGabyBskSAueGYFqQlZV1A==",
  fname: "Harry")
