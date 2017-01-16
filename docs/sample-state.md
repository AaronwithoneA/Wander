{
  session: {
    currentUser: {
      id: 1,
      username: "IWannaBeLikeHarry"
    },
    errors: [],  
  },
  dwellings: {
    1: {
      id: 1,
      price: 45,
      image_url: "HagridShack.jpeg",
      about_this: "Hagrid's shack.  Close to forbidden forest.   Beautiful view of Hogwarts.",
      house_rules: "Be kind to the beasts",
      location: "Hogwarts School of Witchcraft and Wizardry"
      rating: 4,
      // other_details: "",
      reviews: {
        id: 1
        author: "Grawp",
        body: "Grawp love Hagrid.  Hagrid Grawp brother.  Grawp thirsty"
      }
    }
    2 : {
      id: 2,
      price: 1200,
      image_url: "",
      about_this: "Malfoy manor",
      house_rules: "Magical blood only.  No muggles of mudbloods allowed.",
      rating: 2,
      // other_details: "",
      reviews: {
        id: 2
        author: "Arthur Weasley",
        body: "Muggles have a lot to offer, like the interweb and microwavers"
      }
    }
  },
  bookings: {
    1: {
      id: 1,
      image_url: "dsdf.jpeg",
      dwelling_name: "meh",
      location: "Shanghai",
      rating: 5,
      description: "stuff"
      start_date: 1,
      end_date: 3,
    },
    2: {
      id: 2,
      image_url: "ROR.jpeg",
      dwelling_name: "Room of requirements",
      location: "Hogwarts",
      rating: 5,
      description: "Your mind is the limit"
      start_date: 1,
      end_date: 3,
    }
  },
  user_detail: {
    name: "Neville Longbottom",
    profile_img_url: "",
    description: "",
    other_details: ""
    }
  },
}
