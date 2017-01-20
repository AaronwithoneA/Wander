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
Dwelling.create(image_url: 'http://d3b8erylo0uriu.cloudfront.net/wp-content/uploads/2014/06/diagon-alley-preview-universal-studios-florida-07-02-147026-oi.jpg', description: 'Shared', title: "Close to Magic Shops", location: "Diagon Alley, London, Great Britain", guest_limit: 2, bedrooms: 1, beds: 1, about_this: "Amazing 2rd floor condo adjacent to magical shops of all kinds in hip Diagon Alley.  Close to portkeys to Hogsmeade, Godric's Hallow, and New York City", price: 700, owner_id: 1, check_in: "", check_out: "", house_rules: "")
Dwelling.create(owner_id: 14,
  location: "London",
  price: 90,
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484951512/c9qiv8zz9qjnj1maepqc.jpg",
  description: "Entire Home",
  guest_limit: 2,
  bedrooms: 2,
  beds: 1,
  about_this:
   "Enjoy a lovely stay with us at our cottage! We have a cozy, warm room available for 1-2 guests to stay. I may even brew up some Gurdyroot Infusion for you! ",
  title: " Cozy room in cottage",
  house_rules: "Please mind the dirigibles in the front.")
Dwelling.create(owner_id: 14,
  location: "Canterbury",
  price: 800,
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484951628/e6lxfcyoflap1d2cxbkl.png",
  description: "Entire Home",
  guest_limit: 15,
  bedrooms: 8,
  beds: 10,
  about_this: "Live large and stay in our giant mansion. All of your wishes will be attended to by loyal house elves.",
  title: "Grand stay in a beautiful mansion",
  house_rules:
   "Stay in common areas and bedrooms (exploring off-limit areas will result in immediate termination of booking). Purebloods only.")
Dwelling.create(  owner_id: 14,
  location: "Southend-on-sea",
  price: 60,
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484951703/qwfmtxbepq2lop2owh4q.jpg",
  description: "Entire Home",
  guest_limit: 2,
  bedrooms: 3,
  beds: 3,
  about_this:
   "Looking for a weekend getaway? Come stay at our lovely cottage on the seashore. Unwind by the waves and relax. ",
  title: "Stay by the seashore at Shell Cottage")
Dwelling.create(owner_id: 14,
  location: "Maidstone",
  price: 50,
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484951772/pk56qwlnprp6zmoqwl1j.jpg",
  description: "Entire Home",
  guest_limit: 4,
  bedrooms: 6,
  beds: 4,
  about_this:
   "Looking for a cozy place to stay? Join us at The Burrow! We're used to having a large crowd around (9 of us when the family is home, bigger now that we've got grandkids!), so the more, the merrier. Plenty of space for all. Stick around for sausages for breakfast.",
  title: "Warm, bright room available"
)
Dwelling.create(owner_id: 14,
  location: "London",
  price: 300,
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484951839/rougjetxhvewuyez5biv.jpg",
  description: "Entire Home",
  guest_limit: 8,
  bedrooms: 6,
  beds: 6,
  about_this:
   "Traveling through London? Stay overnight at our large home. Free use of well-stocked kitchen and dining area, choice of several available bedrooms. Please take no notice of Mrs. Black when you enter (she's harmless).",
  title: "Full house available to book while in London",
  house_rules: "Do not reveal this address to any muggles! Strong anti-muggle charms placed over this residence.")
Dwelling.create()
User.create(  email: "harry",
  password: "1234567",
  session_token: "OGabyBskSAueGYFqQlZV1A==",
  fname: "Harry")
User.create(  email: "RubeusHagrid@hogwarts.com",
  password: "1234567",
  fname: "Rubeus")
