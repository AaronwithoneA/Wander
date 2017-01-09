# API Endpoints

## HTML API

### Root
  - `GET /` - Loads initial React page

## JSON API

### Users

- `POST /api/users` - Creates user
- `PATCH /api/users` - Edits user profile

### Session

- `POST /api/session` -Login
- `DELETE /api/session` -Logout

### Dwellings
- `GET /api/places` - Retrieves all dwellings
- `POST /api/places`- Creates new dwelling
- `GET /api/places/:id` - Individual dwelling data
- `PATCH /api/places/:id` - Edit dwelling data
- `DELETE /api/places/:id` - Remove dwelling

### Bookings
- `GET /api/bookings` - All bookings
- `POST /api/bookings` - Schedule new booking
- `GET /api/bookings/:id` - Single booking data
- `PATCH /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### REVIEWS
- `GET /api/reviews` - All reviews
- `POST /api/reviews` - New review
- `GET /api/reviews/:id` - show single review data
- `PATCH /api/reviews/:id` - Edit review
- `DELETE /api/reviews/:id` - Remove review
