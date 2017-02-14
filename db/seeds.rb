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

User.create(  email: "papalovegood@gmail.com",
  password: "1234567",
  session_token: "OGabyBskSAueGYFqQlZV1A==",
  fname: "Xenophilius",
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487029892/u5uiregromclvbcl2d6m.jpg" )
User.create(  email: "destroyallmuggles@gmail.com",
  password: "1234567",
  fname: "Lucius",
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1486575925/gd1vhu5oyvisxd3wwudn.jpg" )
User.create(  email: "fawks@gmail.com",
  password: "1234567",
  fname: "Albus",
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1486582464/od1mvwbejiunfhpnxcvt.jpg" )
User.create(  email: "theboywholived@gmail.com",
  password: "1234567",
  fname: "Harry",
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487025459/mphmsi1dczgl3gpc3p3r.jpg" )
User.create(  email: "gentlecreatures@gmail.com",
  password: "1234567",
  fname: "Rubeus",
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487028294/rf44hzjo5ikirbdfruct.jpg" )
User.create(  email: "RIPFred@gmail.com",
  password: "1234567",
  image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487028816/uwzzu5pgyjrrfwtggiv2.jpg",
  fname: "Molly")
User.create(  email: "RubeusHagrid@hogwarts.com",
  password: "1234567",
  fname: "Rubeus")
  Dwelling.create(image_url: 'http://d3b8erylo0uriu.cloudfront.net/wp-content/uploads/2014/06/diagon-alley-preview-universal-studios-florida-07-02-147026-oi.jpg',
    description: 'Shared',
    title: "Close to Magic Shops",
    location: "Diagon Alley, London, Great Britain",
    guest_limit: 2,
    bedrooms: 1,
    beds: 1,
    about_this: "Amazing 2rd floor condo adjacent to magical shops of all kinds in hip Diagon Alley.  Close to portkeys to Hogsmeade, Godric's Hallow, and New York City",
    price: 450,
    owner_id: User.all[5].id,
    check_in: "",
    check_out: "",
    house_rules: "")
      Review.create(guest_id: User.fifth.id,
        dwelling_id: Dwelling.first.id,
        rating: 5,
        body: "Molly has converted the upstairs of the old toy shop into a real home.  What a lovely family.")
  Dwelling.create(owner_id: User.first.id,
    location: "Great Britain",
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
      Review.create(guest_id: User.fourth.id,
        dwelling_id: Dwelling.second.id,
        rating: 4,
        body: "Brilliant place.  People are a little weird but nice.")
  Dwelling.create(owner_id: User.second.id,
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
  Dwelling.create(  owner_id: User.fourth.id,
    location: "Southend-on-sea",
    price: 300,
    image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484951703/qwfmtxbepq2lop2owh4q.jpg",
    description: "Entire Home",
    guest_limit: 2,
    bedrooms: 3,
    beds: 3,
    about_this:
     "Looking for a weekend getaway? Come stay at our lovely cottage on the seashore. Unwind by the waves and relax. ",
    title: "Stay by the seashore at Shell Cottage")
  Dwelling.create(owner_id: User.all[5].id,
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
  Dwelling.create(owner_id: User.fourth.id,
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

  Dwelling.create(  owner_id: User.third.id,
    location: "Platform 9 3/4, Hogsmeade Station",
    price: 100,
    image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485159538/nfzmkrpivo0mtmoh3ode.jpg",
    description: "Shared",
    guest_limit: 2,
    bedrooms: 1,
    beds: 1,
    about_this:
     "Spend a luxurious night aboard the Hogwarts Express.  Meet at platform 9 3/4  at 11:00 AM.  If you don't know how to get there, you don't belong.  Please do not spread this listing to muggles.  ",
    title: "All aboard the Hogwarts Express!!",
    house_rules:
     "Please respect that this is primarily a means of transportation for little witches and wizards.  Appropriate language and spells are much appreciated.  ")

   Dwelling.create(  owner_id: User.third.id,
     location: "Azkaban Prison",
     price: 70,
     image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487024585/Azkaban_concept_art_zbhoaz.png",
     description: "Shared",
     guest_limit: 2,
     bedrooms: 1,
     beds: 1,
     about_this: "This is a once in a lifetime opportunity to share walls with some of the most notorious witches and wizards alive.  You will be given a short tour and lunch and dinner will be provided.  ",
     title: "Be a prisoner for a night!",
     house_rules:
      "Do not taunt the prisoners.  Proceed at your own risk")

  Dwelling.create(  owner_id: User.fourth.id,
    location: "London",
    price: 50,
    image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487022726/maxresdefault_aesucc.jpg",
    description: "Private Room",
    guest_limit: 2,
    bedrooms: 1,
    beds: 1,
    about_this: "Experience ground zero of the famed Order of the Phoenix, the group of wizards that defeated Lord Voldemort.",
    title: "Undisclosed location on Grimmauld Place",
    house_rules:
     "Please respect the heros that are no longer with us.")

   Dwelling.create(  owner_id: User.fifth.id,
     location: "Hogwarts",
     price: 80,
     image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1487027866/a_kjk7643_edmsjr.jpg",
     description: "Entire Home",
     guest_limit: 2,
     bedrooms: 1,
     beds: 1,
     about_this: "Make yourselves at home in my humble shack.  Very convenient to get to the castle.  Since there is no apparating
      on site, you can take the train from Hogsmeade or enter through the Shrieking Shack.  ",
     title: "Shack up near Hogwarts!",
     house_rules:
      "You may notice some of my gentle creatures around the grounds.  You can find detailed instructions on greeting and handling by the door.")
        Review.create(guest_id: User.find_by_fname("Harry").id,
          dwelling_id: Dwelling.find_by_title("Shack up near Hogwarts!").id,
          rating: 5,
          body: "My favorite half giant.")

    Dwelling.create(  owner_id: User.fourth.id,
     location: "TBD",
     price: 70,
     image_url: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1486404746/tv1k3jm47fxtrtlfeuma.jpg",
     description: "Entire Home",
     guest_limit: 3,
     bedrooms: 1,
     beds: 2,
     about_this: "Spacious tent equipped witth invisibility charms.   Great for friends and lovers alike.  Dancing is encouraged.",
     title: "Charming tent off the grid",
     house_rules: "If  you insist on entering with a horcrux, please DO NOT  destroy it inside.")


     Booking.create(  guest_id: User.third.id,
       dwelling_id: Dwelling.all[6].id,
       start_date: Date.new(2017, 4, 6),
       end_date: Date.new(2017, 4, 10),
       guest_number: 1)

     Booking.create(  guest_id: User.third.id,
       dwelling_id: Dwelling.all[5].id,
       start_date: Date.new(2017, 5, 7),
       end_date: Date.new(2017, 5, 8),
       guest_number: 2)

    Booking.create(  guest_id: User.third.id,
      dwelling_id: Dwelling.all[9].id,
      start_date: Date.new(2017, 6, 3),
      end_date: Date.new(2017, 6, 8),
      guest_number: 2)

    Booking.create(  guest_id: User.third.id,
      dwelling_id: Dwelling.last.id,
      start_date: Date.new(2017, 9, 12),
      end_date: Date.new(2017, 9, 14),
      guest_number: 2)
