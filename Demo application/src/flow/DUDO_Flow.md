# DUDO Demo Folder Hierarchy and Flow

## Folder hierarchy

```text
Demo application/
  index.html
  package.json
  src/
    App.jsx
    main.jsx
    components/
      BookingSummaryCard.jsx
      BottomNav.jsx
      ClassScheduler.jsx
      Icon.jsx
      Pill.jsx
      ProgressionChart.jsx
      QRTicket.jsx
      RatingReviewModal.jsx
      SectionHeader.jsx
      SnapShareStudio.jsx
      StudioCard.jsx
      Toast.jsx
      ToggleRow.jsx
      VerticalStudioList.jsx
    data/
      mockData.js
    flow/
      DUDO_Flow.md
    pages/
      Activity.jsx
      BookingConfirmed.jsx
      CheckInQR.jsx
      CheckInSuccess.jsx
      Community.jsx
      Discovery.jsx
      Home.jsx
      Profile.jsx
      ReservationReviewConfirm.jsx
      ReservationTimeSpot.jsx
      ClassDetail.jsx
      GallerySection.jsx
      StudioDetail.jsx
      StudioGallery.jsx
      StudioReview.jsx
      SubscriptionAddOns.jsx
      SubscriptionCheckout.jsx
      SubscriptionPayment.jsx
      SubscriptionPlans.jsx
      SubscriptionSuccess.jsx
      UserReviewArticle.jsx
      VerticalListPage.jsx
    styles/
      app.css
```

## Main tab navigation

The app uses React state instead of a router package:

```jsx
const [activeTab, setActiveTab] = useState("Home");
```

`BottomNav.jsx` updates `activeTab`, and `App.jsx` conditionally renders one of the five main pages:

- Home
- Discovery
- Activity
- Community
- Profile

## DUDO flywheel state flow

```text
Discovery -> Studio Main
  handleOpenStudio(studio)
  - stores selectedStudio
  - opens StudioDetail Main
  - user chooses a class/time before reservation starts

Studio Main / Class Detail -> Schedule
  handleStartReservation(selection)
  - stores reservationDraft from selected class, date, time, instructor, credits
  - opens ReservationTimeSpot
  - continues to ReservationReviewConfirm
  - confirms into BookingConfirmed

Activity -> Check-in / Track
  Action Console button
  - first tap reveals ticket
  - second tap sets checkInStatus = "checked-in"
  - third tap sets checkInStatus = "completed"
  - opens RatingReviewModal

Rating & Review -> Submit
  handleReviewSubmit()
  - closes review modal
  - opens SnapShareStudio

Snap & Share -> Create Flex
  SnapShareStudio
  - gallery section selection
  - data sticker selection
  - caption editing

Share -> Community
  handleShare()
  - creates new verified community post
  - prepends post to feed
  - navigates to Community
```

## Studio information sub-flow

```text
Home / Discovery / Community / Article -> Click studio card
  handleOpenStudio(studio)
  - stores selectedStudio
  - opens StudioDetail Main

StudioDetail Main
  - hero and Main/Detail toggle
  - class schedule cards
  - date and class filters
  - gallery preview
  - rating and review preview
  - related studio shelf
  - no reservation sheet until a time slot is selected

StudioDetail Main -> Select class time
  setSelectedSlot(selection)
  - opens animated bottom reservation sheet
  - Schedule button opens ReservationTimeSpot

StudioDetail Detail
  - studio facts, open/close time, contact, address, map
  - gallery section
  - rating and review
  - relevant classes

StudioDetail -> Class Detail
  handleOpenClass(studio, className)
  - opens ClassDetail
  - shows class description, studio link, gallery, time slots, reviews
  - bottom reservation sheet appears only after a time is selected

StudioDetail / ClassDetail -> Gallery All
  setStudioFlowPage("gallery")
  - renders StudioGallery using the 00_Others/Gallary inspiration

StudioGallery -> Gallery Section
  setStudioFlowPage("gallery-section")
  - renders GallerySection for the chosen gallery category

StudioDetail -> Review
  setStudioFlowPage("review")
  - renders StudioReview using the 00_Others/Rating & Review inspiration

See all / arrow from class sections
  setStudioFlowPage("vertical-list")
  - renders VerticalListPage using the 00_Others/Vertical List inspiration

Reservation continuation
  setStudioFlowPage("time")
  - opens ReservationTimeSpot
  - continues to ReservationReviewConfirm
  - confirms into BookingConfirmed
  - View My Activity opens Activity
  - Activity Verified Check-in opens CheckInQR
  - verified QR opens CheckInSuccess
```

## Discovery information architecture

```text
Discovery
  Main
    - marketing credit banner
    - category grid
    - coupon carousel
    - recommended / recent / low-credit studio shelves
    - vertical studio list

  Nearby
    Map
      - current-location landing
      - Apple Maps-ready surface with demo fallback
      - nearby activity pins
      - bottom sheet with friends nearby and schedulable studio cards

    Commu
      - search by target location or neighbourhood
      - location shelves
      - community shelves
      - schedulable vertical results

  Explore
    - editorial masonry feed
    - article cards open UserReviewArticle

UserReviewArticle
  - user-authored review story
  - related class scheduler
  - related class cards
  - similar review feed
```

## Subscription flow

```text
Profile -> Subscription
  setStudioFlowPage("subs-plans")

SubscriptionPlans -> Continue
  - choose DUDO PRO / PLUS / LITE
  - stores subscriptionPlan
  - opens SubscriptionAddOns

SubscriptionAddOns -> Continue
  - optional add-ons
  - stores subscriptionAddOns
  - opens SubscriptionCheckout

SubscriptionCheckout -> Proceed to Payment
  - payment method selection
  - subtotal / discount / total
  - opens SubscriptionPayment

SubscriptionPayment -> Open K PLUS
  - simulated K PLUS redirect
  - activates subscription
  - opens SubscriptionSuccess

SubscriptionSuccess -> Go to Home
  - returns to Home
  - profile now shows active plan
```

## Design system binding

The required DUDO tokens are configured in `index.html` Tailwind runtime config and reinforced in component classes:

- Primary: `#4D54F8`
- Accent: `#AAF980`
- Sand background: `#E5D9CB`
- Dark text: `#111827`
- Deep primary: `#06074A`

Glassmorphism utilities live in `src/styles/app.css`:

- `.glass-light`
- `.glass-dark`
- `.glass-brand`
