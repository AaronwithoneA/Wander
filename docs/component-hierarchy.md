# Components

- HeaderContainer
  -AuthModal
    - AuthFormContainer
      - AuthForm
  - SearchContainer
    - Search

- SearchResultContainer
  - Search
    - DwellingIndex
      - Dwellings
    - DwellingMapContainer
      - DwellingMap

- HomeContainer
  - Home
  - DwellingsContainer
    - Dwellings

- DwellingContainer
  - Dwelling
  - BookingFormContainer
    - BookingForm
  - ReviewsContainer
    - Review
    - ReviewForm

- Bookings Container
  - Bookings

#
# Routes

| Path | Component |
| --- | --- |
| "/" | "HeaderContainer |
| "/Home" | "HomeContainer" |
| "/search" | "SearchResultsContainer |
| "/dwellings/:dwellingId" | "DwellingContainer" |
| "/bookings" | "BookingsContainer" |
