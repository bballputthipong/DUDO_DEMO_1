# DUDO PRD MVP V2

Product Requirement Document สำหรับแปลง Prototype ปัจจุบันเป็น MVP ที่ Dev สามารถแตกงานต่อได้ทันที  
วันที่: 2026-06-20  
Platform MVP: iPhone first, Apple Health first  
สถานะ: Product + Dev handoff draft

---

## 1. Product Definition

DUDO คือ marketplace สำหรับ fitness, wellness และ social activity booking ที่ให้ผู้ใช้ค้นหา จอง จ่ายเงิน/ใช้ credits เช็กอิน และแชร์กิจกรรมที่ทำจริงได้ใน community

MVP นี้ต้องโฟกัส 4 แกน:

1. Booking marketplace: ผู้ใช้ค้นหาและจอง class, court/facility, pass ได้
2. Payment model 2 แบบ: subscription credits หรือ direct cash payment
3. Verified activity loop: booking -> check-in -> completed activity -> review/share -> community
4. Apple Health visualization: ดึงข้อมูลสุขภาพจาก Apple Health มาแสดงในแอป ไม่ทำ live sport tracking เองใน MVP

สิ่งที่ MVP ต้องทำให้ได้จริง:

- User บน iPhone เปิดแอปแล้วหาสถานที่หรือกิจกรรมได้
- User จองด้วย credits จาก subscription ได้
- User จองด้วย cash/direct payment ได้
- ถ้า partner ไม่รับ booking ต้อง full refund ทันที
- Partner จัดการ class, court/facility, pass ได้จาก portal
- User เห็น activity ที่จอง/เช็กอิน/ทำเสร็จแล้ว
- User เชื่อม Apple Health และเห็น visual summary ได้
- User share post, comment, save place, และกดกลับไป place จาก post/review ได้

---

## 2. Prototype Exploration Summary

Prototype ปัจจุบันอยู่ใน `Demo application` เป็น React/Vite app ที่ใช้ state-driven navigation ใน `App.jsx` แทน router จริง มี main tabs 5 หน้าและ sub-flow จำนวนมาก

### 2.1 Main Tabs ใน Prototype

| Tab | File | บทบาทใน MVP |
|---|---|---|
| Home | `src/pages/Home.jsx` | Landing dashboard, credits, next booking, recommendation |
| Discovery | `src/pages/Discovery.jsx` | Main discovery, nearby map/community, explore editorial |
| Activity | `src/pages/Activity.jsx` | Upcoming, check-in, Apple Health summary, activity history |
| Community | `src/pages/Community.jsx` | Feed, share, comment, save place, book similar |
| Profile | `src/pages/Profile.jsx` | Credits, subscription, payment, Apple Health/privacy settings |

### 2.2 Sub-Flows ใน Prototype

| Flow | Files | MVP Decision |
|---|---|---|
| Onboarding | `Onboarding.jsx` | Keep but reduce/reshape for MVP |
| Studio detail | `StudioDetail.jsx` | Convert to unified Place Detail |
| Class detail | `ClassDetail.jsx` | Keep as service detail for scheduled class |
| Gallery | `StudioGallery.jsx`, `GallerySection.jsx` | Keep as place media reference |
| Review | `StudioReview.jsx`, `RatingReviewModal.jsx` | Keep, connect to verified booking |
| Booking | `ReservationTimeSpot.jsx`, `ReservationReviewConfirm.jsx`, `BookingConfirmed.jsx` | Expand to credits + cash + partner approval + refund |
| Check-in | `CheckInQR.jsx`, `CheckInSuccess.jsx` | Keep, secure with expiring QR token |
| Activity tracking | `TrackingStart.jsx`, `LiveTracking.jsx` | Do not build live tracking in MVP; replace with Apple Health connect/summary |
| Post/share | `ActivityPostFlow.jsx`, `SnapShareStudio.jsx` | Keep concept, simplify to source activity -> compose -> publish |
| Subscription | `SubscriptionPlans.jsx`, `SubscriptionAddOns.jsx`, `SubscriptionCheckout.jsx`, `SubscriptionPayment.jsx`, `SubscriptionSuccess.jsx` | Keep plans/checkout; remove add-ons from MVP |

### 2.3 Product Gap จาก Prototype

Prototype ตอนนี้ยังเป็น mock data และยังไม่มี:

- backend API
- auth persistence
- router/deep link
- real booking inventory
- real payment
- credit ledger
- partner approval
- refund flow
- partner portal
- Apple Health integration
- community comment persistence
- saved places persistence
- admin discovery configuration

PRD นี้จึงต้องไม่ให้ Dev copy prototype ตรง ๆ แต่ให้ใช้ prototype เป็น visual/interaction reference แล้วสร้าง production architecture ใหม่

---

## 3. Visual Reference Board

ภาพทั้งหมดถูกเก็บไว้ใน `Dev/assets/prd/` เพื่อใช้เป็น PRD reference

### 3.1 Prototype Captures

| Area | Reference |
|---|---|
| Onboarding splash | ![Onboarding Splash](assets/prd/app/01_onboarding_splash.png) |
| Onboarding welcome | ![Onboarding Welcome](assets/prd/app/02_onboarding_welcome.png) |
| Home | ![Home](assets/prd/app/03_home.png) |
| Discovery Main | ![Discovery Main](assets/prd/app/04_discovery_main.png) |
| Nearby Map | ![Nearby Map](assets/prd/app/05_nearby_map.png) |
| Nearby Community | ![Nearby Community](assets/prd/app/06_nearby_community.png) |
| Explore | ![Explore](assets/prd/app/07_explore.png) |
| Filter Sheet | ![Filter Sheet](assets/prd/app/08_filter_sheet.png) |
| Place/Studio Detail | ![Studio Detail](assets/prd/app/09_studio_detail.png) |
| Schedule/Gallery area | ![Studio Schedule Gallery](assets/prd/app/10_studio_schedule_gallery.png) |
| Class Detail | ![Class Detail](assets/prd/app/11_class_detail.png) |
| Class Schedule | ![Class Schedule](assets/prd/app/12_class_schedule.png) |
| Reservation Sheet | ![Reservation Sheet](assets/prd/app/13_reservation_sheet.png) |
| Select Time | ![Reservation Time Spot](assets/prd/app/14_reservation_time_spot.png) |
| Review Confirm | ![Review Confirm](assets/prd/app/15_reservation_review_confirm.png) |
| Booking Confirmed | ![Booking Confirmed](assets/prd/app/16_booking_confirmed.png) |
| Activity | ![Activity](assets/prd/app/17_activity.png) |
| Check-in QR | ![Check In QR](assets/prd/app/18_checkin_qr.png) |
| Check-in Success | ![Check In Success](assets/prd/app/19_checkin_success.png) |
| Snap Share | ![Snap Share](assets/prd/app/20_snap_share.png) |
| Community after share | ![Community Share](assets/prd/app/21_community_after_share.png) |
| Profile | ![Profile](assets/prd/app/22_profile.png) |
| Subscription Plans | ![Subscription Plans](assets/prd/app/23_subscription_plans.png) |

### 3.2 Inspiration References

| Area | Reference |
|---|---|
| Onboarding flow | ![Onboarding Flow](assets/prd/inspiration/onboarding_flow.png) |
| Subscription flow | ![Subscription Flow](assets/prd/inspiration/subscription_flow.png) |
| Activity + Post flow | ![Activity Post Flow](assets/prd/inspiration/activity_post_flow.png) |
| Home UI | ![Home Inspiration](assets/prd/inspiration/home_ui.png) |
| Discovery Main | ![Discovery Main Inspiration](assets/prd/inspiration/discovery_main_wireframe.png) |
| Explore | ![Explore Inspiration](assets/prd/inspiration/discovery_explore_wireframe.png) |
| Activity | ![Activity Inspiration](assets/prd/inspiration/activity_ui.png) |
| Activity History | ![Activity History Inspiration](assets/prd/inspiration/activity_history_ui.png) |
| Personal Dashboard | ![Dashboard Inspiration](assets/prd/inspiration/personal_dashboard_ui.png) |
| Community Feed | ![Community Inspiration](assets/prd/inspiration/community_feed_wireframe.png) |
| Filter Sheet | ![Filter Inspiration](assets/prd/inspiration/filter_sheet_ui.png) |
| Gallery All | ![Gallery All Inspiration](assets/prd/inspiration/gallery_all_ui.png) |
| Gallery Section | ![Gallery Section Inspiration](assets/prd/inspiration/gallery_section_ui.png) |
| Review | ![Review Inspiration](assets/prd/inspiration/rating_review_wireframe.png) |
| Vertical List | ![Vertical List Inspiration](assets/prd/inspiration/vertical_list_ui.png) |

---

## 4. MVP Boundary

### 4.1 In Scope

User App:

- iPhone-first onboarding
- Home dashboard
- Discovery Main
- Nearby Map
- Nearby Community
- Explore Editorial
- Filter system
- Place Detail
- Scheduled Class booking
- Court/Facility booking
- Pass purchase/redemption
- Subscription credits
- Direct cash payment
- Refund on partner rejection/failure
- Activity page
- Apple Health connect and visualization
- QR check-in
- Review after verified/completed activity
- Create/share activity post
- Community feed
- Comment
- Save place
- Profile

Partner Portal:

- Partner login
- Place profile management
- Scheduled class inventory
- Court/facility resource calendar
- Pass product management
- Booking inbox
- Accept/reject booking
- QR/manual check-in verification
- Basic settlement/refund view

Admin:

- Partner approval
- Category/filter config
- Discovery shelf config
- Community/location/workout club collection config
- Booking/refund monitoring
- Basic content moderation

### 4.2 Out of Scope

Do not build in MVP:

- Promotion/coupon engine
- Subscription add-ons
- DUDO live GPS sport tracking
- Android
- Full desktop product
- Complex AI recommendations
- Insurance/nutrition/personal training add-ons
- Dynamic pricing
- Advanced challenge system
- Full workout club CRM
- Staff payroll or partner accounting beyond basic settlement summary

### 4.3 Prototype Elements To Reinterpret

| Prototype Element | MVP Treatment |
|---|---|
| Coupon section in Discovery | Remove from MVP; replace with configurable shelves |
| Track sport / LiveTracking | Replace with Apple Health connect/summary |
| Subscription AddOns | Remove from MVP |
| Low Credits shelf | Keep, but must be admin-configurable rule |
| Studio-only model | Expand to Place with class/court/pass services |
| Booking only credits | Expand to credits or cash |
| Confirm immediately | Some inventory auto-confirm, some partner approval |

---

## 5. Information Architecture

```mermaid
flowchart TD
  App[DUDO iPhone App] --> Onboarding
  App --> Home
  App --> Discovery
  App --> Activity
  App --> Community
  App --> Profile

  Discovery --> DiscoveryMain[Main]
  Discovery --> Nearby
  Discovery --> Explore
  Nearby --> MapMode[Map]
  Nearby --> NearbyCommunity[Community]

  DiscoveryMain --> Search
  DiscoveryMain --> Filters
  DiscoveryMain --> ConfigShelves[Configurable Shelves]
  DiscoveryMain --> ResultList[Vertical Result List]

  MapMode --> PartnerPins
  MapMode --> MapBottomSheet
  NearbyCommunity --> LocationClusters
  NearbyCommunity --> SegmentCollections
  NearbyCommunity --> WorkoutClubCollections
  Explore --> EditorialFeed

  ResultList --> PlaceDetail
  PartnerPins --> PlaceDetail
  EditorialFeed --> ArticleDetail
  ArticleDetail --> PlaceDetail

  PlaceDetail --> ClassService
  PlaceDetail --> CourtService
  PlaceDetail --> PassService
  ClassService --> BookingFlow
  CourtService --> BookingFlow
  PassService --> BookingFlow

  BookingFlow --> PaymentMethod
  PaymentMethod --> Credits
  PaymentMethod --> Cash
  Credits --> BookingStatus
  Cash --> BookingStatus
  BookingStatus --> Confirmed
  BookingStatus --> PendingPartner
  PendingPartner --> Accepted
  PendingPartner --> RejectedRefunded

  Confirmed --> Activity
  Activity --> CheckIn
  CheckIn --> ActivityCompleted
  ActivityCompleted --> Review
  ActivityCompleted --> SharePost
  SharePost --> Community
  Community --> SavePlace
  Community --> PlaceDetail

  Profile --> Subscription
  Profile --> SavedPlaces
  Profile --> AppleHealthSettings
```

---

## 6. Purchase and Payment Model

MVP ต้องรองรับ 2 วิธีซื้อเท่านั้น

### 6.1 Method A: Subscription Credits

User สมัคร subscription เพื่อรับ credits ต่อรอบบิล แล้วใช้ credits เพื่อจอง service ที่รองรับ credits

Service ต้องประกาศว่าใช้ credits ได้หรือไม่ได้:

- `credits_only`
- `credits_or_cash`
- `cash_only`

Credit rules:

- Credits ต้องมี ledger
- ห้ามแก้ balance ตรง ๆ โดยไม่มี ledger entry
- Credits ที่ใช้จองต้อง reserve ก่อน confirm หรือ deduct ตอน confirm ตาม booking mode
- ถ้า partner reject ต้องคืน credits เต็มจำนวน
- Credit grant จาก subscription ต้องเกิดหลัง payment success เท่านั้น

Ledger event types:

- `subscription_grant`
- `booking_credit_reserve`
- `booking_credit_capture`
- `booking_credit_release`
- `booking_credit_refund`
- `manual_adjustment`

### 6.2 Method B: Direct Cash Payment

User สามารถจ่ายเงินจริงสำหรับ booking นั้นโดยไม่ต้องสมัคร subscription

Cash booking ใช้กับ:

- User ไม่มี subscription
- Credits ไม่พอ
- User อยากจ่ายเงินสดมากกว่าใช้ credits
- Partner/service รับ cash only
- Pass หรือ court บางประเภทที่ business กำหนด cash only

Cash payment state:

```mermaid
stateDiagram-v2
  [*] --> PaymentDraft
  PaymentDraft --> RequiresPartnerApproval
  PaymentDraft --> AutoConfirm
  RequiresPartnerApproval --> Authorized: authorize payment
  AutoConfirm --> Captured: capture payment
  Authorized --> PartnerAccepted
  Authorized --> PartnerRejected
  PartnerAccepted --> Captured
  Captured --> BookingConfirmed
  PartnerRejected --> VoidOrRefund
  VoidOrRefund --> BookingRejectedRefunded
```

Implementation preference:

- ถ้า payment provider รองรับ authorization/capture ให้ authorize ก่อนสำหรับ partner approval booking
- Capture หลัง partner accept
- ถ้า provider ต้อง capture ก่อน ต้องสร้าง refund ทันทีเมื่อ reject

### 6.3 Full Refund Rule

Rule:

ถ้า partner ไม่รับ booking, reject booking, slot/resource/pass ไม่พร้อมจริง, หรือ booking fail จากฝั่ง partner หลัง user จ่ายแล้ว ต้อง full refund ทันที

Refund must handle:

- Cash payment: refund/void payment เต็มจำนวน
- Credits: release/refund credits เต็มจำนวน
- Mixed payment: not MVP แต่ data model ต้องไม่ปิดทาง

User-facing copy:

- Pending: "Waiting for partner confirmation. If the partner cannot accept this booking, you will receive a full refund automatically."
- Rejected: "The partner could not accept this booking. Your full refund has been issued."
- Refund processing: "Your refund is being processed."
- Refund complete: "Refund completed."

Backend requirements:

- Refund job must be idempotent
- Partner reject endpoint must trigger refund job server-side
- Refund state must be visible in booking detail and Activity
- If refund provider fails, booking state must show `refund_failed` for ops follow-up

---

## 7. Inventory Model

MVP inventory มี 3 แบบ: Scheduled Class, Court/Facility, Pass

### 7.1 Inventory Type 1: Scheduled Class

ใช้สำหรับ service ที่มีเวลาเริ่ม-จบ, instructor, capacity, spots left

Examples:

- Pilates class
- Yoga class
- Muay Thai
- Climbing lesson
- HIIT
- Recovery class

Required fields:

| Field | Required | Notes |
|---|---|---|
| place_id | Yes | สถานที่เจ้าของ service |
| service_id | Yes | class template |
| class_name | Yes | ชื่อคลาส |
| activity_category | Yes | เช่น Pilates, Yoga |
| level | Yes | Beginner/Intermediate/Advanced/All levels |
| instructor | Optional MVP | แสดงถ้ามี |
| description | Yes | ใช้ใน class detail |
| duration_minutes | Yes | เช่น 60, 90 |
| starts_at / ends_at | Yes | timezone aware |
| capacity | Yes | จำนวนรับทั้งหมด |
| spots_left | Yes | calculated |
| credit_price | Conditional | required if accepts credits |
| cash_price | Conditional | required if accepts cash |
| confirmation_mode | Yes | auto_confirm หรือ partner_approval |
| cancellation_policy | Yes | default from place if not set |

Class booking flow:

1. User เปิด Place Detail
2. เลือก Classes tab
3. เลือกวันที่
4. เลือก class/time slot
5. App แสดง Reservation Sheet
6. User tap Schedule
7. App เปิด Booking Draft
8. User เลือก payment method
9. User review summary
10. User confirm
11. Backend lock slot
12. Backend reserve/capture payment
13. Booking confirmed หรือ pending partner approval
14. Activity upcoming สร้าง/อัปเดต

### 7.2 Inventory Type 2: Court / Facility

ใช้สำหรับ resource ที่จองเป็นช่วงเวลา เช่น court, room, bay, lane

Examples:

- Padel court
- Tennis court
- Badminton court
- Basketball court
- Golf simulator bay
- Recovery room
- Sauna/private room

Required concept:

- `facility_service`: สิ่งที่ขาย เช่น Padel Court Booking
- `resource`: court/unit จริง เช่น Court A, Court B
- `availability_block`: ช่วงเวลาของ resource ที่ว่าง/ถูกจอง/ถูก block

Required fields:

| Field | Required | Notes |
|---|---|---|
| place_id | Yes | สถานที่ |
| service_id | Yes | facility service |
| resource_id | Yes after assignment | Court A/B |
| resource_type | Yes | padel_court, tennis_court |
| booking_interval | Yes | 30/60/90/120 min |
| min_duration | Yes | เช่น 60 min |
| max_duration | Yes | เช่น 180 min |
| starts_at / ends_at | Yes | selected block |
| cash_price | Conditional | อาจเป็นต่อ block |
| credit_price | Conditional | อาจเป็นต่อ block |
| capacity | Optional | จำนวนผู้เล่น |
| confirmation_mode | Yes | auto or partner approval |

Court/facility availability behavior:

- Calendar ต้องตรวจ resource-level availability
- ถ้า user เลือก 10:00-11:00 และ Court A/B ว่างทั้งคู่ ระบบ assign อันใดอันหนึ่งได้
- ถ้า user ต้องเลือก court เอง ก็ให้ UI แสดง resource selector
- MVP แนะนำให้ระบบ auto assign ก่อน เพื่อจองง่าย
- หลัง confirm ต้องมี resource_id ชัดเจน

Court booking flow:

1. User เปิด Place Detail
2. เลือก Courts/Facilities tab
3. เลือก facility type
4. เลือกวันที่
5. เลือก duration
6. App ดึง available blocks
7. User เลือก time block
8. Backend hold resource block
9. User เลือก credits/cash
10. Confirm booking
11. Backend assign resource
12. Activity upcoming แสดง court/facility booking

Edge cases:

- Resource ถูกจองไปก่อน confirm
- Partner block resource หลัง user เปิดหน้าแล้ว
- Court maintenance
- User เลือก duration ที่ไม่มี block ต่อเนื่องพอ

### 7.3 Inventory Type 3: Pass

Pass คือสิทธิ์เข้าใช้บริการที่ไม่ผูกกับ scheduled class เดียว

Examples:

- Day pass
- 3-pass
- 5-pass
- Open gym pass
- Recovery day pass
- Court day access pass

Required fields:

| Field | Required | Notes |
|---|---|---|
| pass_id | Yes | product id |
| place_id | Yes | place ที่ redeem ได้ |
| pass_name | Yes | เช่น Gym Day Pass |
| pass_type | Yes | day_pass, multi_pass |
| uses_total | Yes | 1, 3, 5, unlimited_day |
| validity_type | Yes | fixed_date, days_after_purchase, date_range |
| validity_days | Conditional | สำหรับ multi-pass |
| redeem_method | Yes | QR/manual |
| credit_price | Conditional | ถ้ารับ credits |
| cash_price | Conditional | ถ้ารับ cash |
| inventory_limit | Optional | จำกัดจำนวน pass ต่อวัน |

Pass purchase flow:

1. User เปิด Place Detail
2. เลือก Passes tab
3. เลือก pass
4. เลือกวันที่ใช้งานถ้าเป็น day pass
5. เลือก payment method
6. Confirm purchase
7. Pass ticket ถูกสร้าง
8. Pass ไปอยู่ใน Activity/Wallet
9. User แสดง QR เพื่อ redeem
10. Staff verify
11. uses_remaining ลดลง

Pass states:

- `active`
- `not_yet_valid`
- `redeemed`
- `partially_used`
- `used`
- `expired`
- `refunded`

---

## 8. Feature PRD: Onboarding

Reference:

![Onboarding Flow](assets/prd/inspiration/onboarding_flow.png)

![Prototype Onboarding](assets/prd/app/02_onboarding_welcome.png)

### 8.1 Goal

Onboarding ต้องทำให้ user เข้าใจว่า DUDO ใช้ทำอะไร และเก็บข้อมูลขั้นต่ำเพื่อ personalize Discovery โดยไม่ยาวเกินไป

### 8.2 MVP Screens

1. Splash/Brand
2. Product intro: Discover, Book, Check-in, Share
3. Choose interests
4. Choose preferred areas
5. Apple Health education optional
6. Login/signup
7. Permission education for location and notification

### 8.3 Data To Capture

- auth provider
- display name
- preferred categories
- preferred areas
- location permission status
- notification permission status
- Apple Health connection status
- onboarding_completed_at

### 8.4 Behind The Scenes

Backend:

- Create user profile after auth
- Store onboarding preferences
- Store consent state separately from preference
- Return personalization seed for Discovery

Frontend:

- Onboarding can be skipped, but must set default preferences
- Onboarding completion must persist
- User should not see onboarding again unless reset

### 8.5 Acceptance Criteria

- New user can complete onboarding and land on Home
- Existing user bypasses onboarding
- Skip creates user with default preference
- Apple Health can be skipped without blocking app

---

## 9. Feature PRD: Home

Reference:

![Home Prototype](assets/prd/app/03_home.png)

![Home Inspiration](assets/prd/inspiration/home_ui.png)

### 9.1 Goal

Home เป็น dashboard สำหรับ user ที่กลับมาใช้แอป เห็น credits, next booking, Apple Health summary และ recommendation ที่กดต่อไป booking ได้

### 9.2 UI Sections

1. User header
   - avatar/profile shortcut
   - membership badge
   - greeting
2. Quick actions
   - Wallet/Credits
   - Recommended
   - Recovery
   - Check-in
   - Saved
   - Community
3. Credits balance card
4. Next booking card
5. Apple Health mini summary
   - steps today
   - active energy
   - last synced
6. Recommended services shelves
7. Saved places shortcut

Remove from MVP:

- promotion challenge section
- coupon section
- complex streak challenge

### 9.3 Data Requirements

Home API should return:

```json
{
  "user": {},
  "credits_balance": 18,
  "subscription": {},
  "next_booking": {},
  "health_summary": {},
  "recommendation_shelves": [],
  "saved_places_preview": []
}
```

### 9.4 Behind The Scenes

- Credits balance from ledger aggregate
- Next booking from confirmed/pending bookings sorted by starts_at
- Health summary from local Apple Health sync or backend cached summary
- Recommendation from Discovery service, not hardcoded

### 9.5 Acceptance Criteria

- If no booking, show CTA to Discovery
- If booking pending partner, show pending state
- If booking refunded, show refunded state until dismissed/viewed
- Health summary hidden or empty if Apple Health not connected
- No promotion UI in MVP

---

## 10. Feature PRD: Discovery Main

Reference:

![Discovery Prototype](assets/prd/app/04_discovery_main.png)

![Discovery Main Inspiration](assets/prd/inspiration/discovery_main_wireframe.png)

### 10.1 Goal

Discovery Main คือหน้า browse/search หลักที่ user ใช้หา activity/place/service โดยใช้ category, location, availability, price และ configurable shelves

### 10.2 UI Sections

1. Top segmented tabs
   - Main
   - Nearby
   - Explore
2. Search entry
3. Category grid
4. Configurable shelves
5. Active filter chips
6. Vertical result list

No Coupon section in MVP.

### 10.3 Category Taxonomy MVP

Initial categories:

- Pilates
- Yoga
- Gym / Strength
- Boxing / Muay Thai
- Climbing
- Court Sports
- Running / Outdoor
- Recovery
- Swimming
- Dance

Backend must own taxonomy:

- category_id
- label
- icon
- parent_category_id
- supported_inventory_types
- active
- sort_order

Frontend must not hardcode categories except fallback.

### 10.4 Configurable Shelves

Shelves replace prototype coupon/recommended/low-credit hardcoding

Initial shelf examples:

- Recommended for you
- Available today
- Near you
- Popular in your area
- Low credit
- Court available now
- Day pass
- New partners
- Community picks

Low Credit shelf behavior:

Low Credit must be admin-configurable. It is not a fixed UI rule.

Example config:

```json
{
  "key": "low_credit",
  "title": "Low Credit",
  "enabled": true,
  "max_credit_price": 4,
  "inventory_types": ["class", "court", "pass"],
  "must_have_availability": true,
  "sort": ["credit_price_asc", "rating_desc", "distance_asc"]
}
```

Admin can:

- enable/disable shelf
- rename shelf
- set credit threshold
- restrict category
- restrict area
- pin service/place
- reorder shelves

### 10.5 Result Card Requirements

Every result card must show:

- image
- place name
- service name if card is service-level
- area/distance
- rating/review count
- inventory type badge: Class, Court, Pass
- price display:
  - credits
  - cash
  - both if available
- availability:
  - class: next time, spots left
  - court: next available block
  - pass: valid today/uses
- save place icon
- primary CTA

### 10.6 User Flow

1. User opens Discovery Main
2. App loads categories and shelf config
3. App loads default personalized shelves
4. User selects category
5. Results refresh
6. User opens filter
7. User applies filter
8. Results refresh with active filter chips
9. User taps card
10. Route:
    - place card -> Place Detail
    - class card -> Class Detail
    - court card -> Court Detail section in Place Detail
    - pass card -> Pass Detail/Place Detail Pass tab

### 10.7 Behind The Scenes

Services required:

- Discovery Config Service
- Search Service
- Availability Service
- Pricing Service
- Saved Place Service
- Recommendation fallback logic

### 10.8 Acceptance Criteria

- Category list can change without app release
- Shelves can change without app release
- User can see cash and credit price clearly
- No promotion/coupon module appears
- Empty state has reset filters CTA

---

## 11. Feature PRD: Filter

Reference:

![Filter Prototype](assets/prd/app/08_filter_sheet.png)

![Filter Inspiration](assets/prd/inspiration/filter_sheet_ui.png)

### 11.1 Goal

Filter helps user narrow results by location, service type, payment method, price, time, availability, rating, amenities

### 11.2 Filter Groups

Common:

- Area
- Distance
- Inventory Type: Class, Court/Facility, Pass
- Payment Type: credits, cash, credits or cash
- Date
- Time of day
- Open now
- Rating
- Saved only

Price:

- credit range
- cash price range

Class:

- category
- level
- duration
- instructor optional
- spots left

Court/Facility:

- facility type
- duration
- number of players
- indoor/outdoor
- available now

Pass:

- pass type
- valid today
- number of uses
- validity

Amenities:

- shower
- locker
- parking
- towel
- rental equipment
- cafe
- sauna
- ice bath

### 11.3 Flow

1. Open filter sheet
2. Show current filter state
3. User changes values
4. Optional result count preview
5. Apply
6. Query refreshes
7. Active filter chips appear
8. User can remove chip or clear all

### 11.4 Backend Requirements

- Filter taxonomy must come from config
- Search endpoint accepts filter object
- Search endpoint returns applied filters and available filter counts if possible
- Invalid filter values should be ignored safely, not crash

### 11.5 Acceptance Criteria

- Filter state persists when user opens detail and goes back
- Clear all resets to default
- Filter sheet works from Discovery, Nearby Community, Vertical List
- Credit and cash filters can be used independently

---

## 12. Feature PRD: Nearby Map

Reference:

![Nearby Map Prototype](assets/prd/app/05_nearby_map.png)

### 12.1 Goal

Map mode shows DUDO partners around the user and lets user inspect available activities through a draggable bottom sheet

### 12.2 UI Requirements

- Full-screen map surface
- Current location pill
- Partner pins
- Availability badges on pins where useful
- Draggable bottom sheet:
  - collapsed
  - half
  - expanded
- Category chips in sheet
- Service cards in sheet

### 12.3 Pin Types

- Standard partner
- Available today
- Court available
- Pass available
- Club event later

### 12.4 Flow

1. User opens Discovery > Nearby > Map
2. App asks for location permission if not already handled
3. If allowed: center map on user
4. If denied: center on default Bangkok area or selected area
5. Load partners within radius
6. User taps pin
7. Bottom sheet focuses selected partner
8. User taps service card
9. Navigate to Place Detail or booking selection

### 12.5 Behind The Scenes

- Location permission service
- Map provider integration, preferably Apple MapKit for iPhone-first
- Geospatial partner search
- Availability summary per partner
- Cached fallback if map fails

### 12.6 Acceptance Criteria

- Map works without location permission
- Bottom sheet state persists while moving map
- Tapping pin opens correct partner
- Partner without availability can still open Place Detail

---

## 13. Feature PRD: Nearby Community

Reference:

![Nearby Community Prototype](assets/prd/app/06_nearby_community.png)

### 13.1 Goal

Nearby Community is not the main social feed. It is a discovery mode based on location clusters, lifestyle/community segments, and workout club partnerships

### 13.2 Content Groups

Location clusters:

- Thonglor
- Silom
- Asoke
- Sathorn
- Ari
- Phrom Phong
- Phra Khanong

Segment collections:

- Gen Z
- Young Professionals
- High Energy Crowd
- Recovery Club
- Beginner Friendly
- Social Sports

Workout club collections:

- Run Club
- Hyrox Club
- Climbing Crew
- Yoga Community
- Padel Group

### 13.3 Location Cluster Flow

1. User selects location
2. App opens area collection
3. Show partners in area
4. Show activities available in area
5. Show community posts/reviews from area
6. User taps service/place

### 13.4 Workout Club Flow

1. User selects club
2. Club detail opens
3. Show upcoming club events
4. Event may link to partner venue
5. If event requires booking:
   - show related service slot
   - user books class/court/pass
6. If event is free:
   - user taps Join/Interested
7. After attending, user can share post

### 13.5 Admin Config

Community collections must be admin-configurable:

- collection_id
- type: location, segment, club
- title
- description
- image
- linked areas
- linked partners
- linked services
- enabled
- sort_order

### 13.6 Acceptance Criteria

- Section can be hidden if not ready
- Location collections route to filtered results
- Club collection can link to bookable service
- Segment collection does not require complex personalization in MVP

---

## 14. Feature PRD: Explore Editorial

Reference:

![Explore Prototype](assets/prd/app/07_explore.png)

![Explore Inspiration](assets/prd/inspiration/discovery_explore_wireframe.png)

### 14.1 Goal

Explore is a magazine/editorial discovery surface for users who do not know where to go yet

### 14.2 Content Types

- User review article
- Beginner guide
- City guide
- Studio/place spotlight
- Court sport guide
- Recovery guide
- Workout club story

### 14.3 Article Detail Must Include

- hero image
- title
- subtitle
- author
- views
- tags
- body
- linked place
- linked service
- save place CTA
- book CTA
- similar reviews/articles

### 14.4 Flow

1. User opens Explore
2. User sees editorial cards
3. User taps article
4. Article detail opens
5. User can save linked place
6. User can open place
7. User can book related service

### 14.5 Backend/Admin Requirements

- CMS-like editorial table
- author profile
- related_place_id
- related_service_id
- publish status
- featured flag
- image/media storage

### 14.6 Acceptance Criteria

- Article without related service can still link to place
- Article with review context must show place link
- Unpublished article never appears in app

---

## 15. Feature PRD: Place Detail

Reference:

![Place Detail Prototype](assets/prd/app/09_studio_detail.png)

![Schedule Gallery Prototype](assets/prd/app/10_studio_schedule_gallery.png)

### 15.1 Goal

Place Detail is the central page for partner location. It must support class, court/facility, and pass services in one place

### 15.2 Header

Must show:

- hero image
- back button
- gallery button
- save/unsave button
- place name
- area
- distance
- short vibe/description
- rating
- review count
- starting price summary

### 15.3 Main Tabs

Tabs:

- Main
- Detail

Service tabs inside Main:

- Classes
- Courts/Facilities
- Passes

If a place does not offer one type, hide that tab

### 15.4 Classes Section

Fields:

- class name
- level
- instructor
- duration
- available time slots
- spots left
- credits/cash price
- book CTA

### 15.5 Courts/Facilities Section

Fields:

- facility type
- available date
- duration selector
- available blocks
- resource assignment after selection
- credits/cash price
- book CTA

### 15.6 Passes Section

Fields:

- pass name
- pass type
- validity
- uses
- redemption method
- credits/cash price
- buy CTA

### 15.7 Detail Tab

Must show:

- About
- Amenities
- Opening hours
- Address
- Map
- Contact
- Cancellation/refund policy
- Gallery preview
- Reviews preview

### 15.8 Behind The Scenes

APIs:

- `GET /places/:id`
- `GET /places/:id/services`
- `GET /places/:id/availability`
- `POST /places/:id/save`
- `DELETE /places/:id/save`

State:

- selected service tab
- selected date
- selected slot/block/pass
- saved state
- availability loading/error

### 15.9 Acceptance Criteria

- Place can have only class, only court, only pass, or mixed services
- Save state persists
- Price shows credits/cash correctly
- Availability refreshes when date changes
- If no availability, show clear empty state

---

## 16. Feature PRD: Class Detail

Reference:

![Class Detail Prototype](assets/prd/app/11_class_detail.png)

![Class Schedule Prototype](assets/prd/app/12_class_schedule.png)

### 16.1 Goal

Class Detail gives enough information for user to decide and select a specific time slot

### 16.2 UI Requirements

- hero image
- class name
- place link
- duration
- level
- credits/cash price
- gallery strip
- date chips
- time slots
- spots left
- rating/review shortcut
- about this class
- relevant classes
- reservation bottom sheet after time selection

### 16.3 Flow

1. User opens class detail
2. User reviews info
3. User selects date
4. App loads slots
5. User taps time slot
6. Reservation sheet opens
7. User taps Schedule
8. Booking draft starts

### 16.4 Backend Requirements

- Slot availability should be real-time enough to avoid overbooking
- Slot should be revalidated before payment
- Slot lock TTL required during checkout

### 16.5 Acceptance Criteria

- Full slot cannot be selected
- Expired slot cannot be selected
- If selected slot becomes unavailable, show choose another time
- Class detail links back to place

---

## 17. Feature PRD: Booking Flow

Reference:

![Reservation Sheet](assets/prd/app/13_reservation_sheet.png)

![Select Time](assets/prd/app/14_reservation_time_spot.png)

![Review Confirm](assets/prd/app/15_reservation_review_confirm.png)

![Booking Confirmed](assets/prd/app/16_booking_confirmed.png)

### 17.1 Goal

Booking flow must work for all inventory types and support credits or cash payment

### 17.2 Unified Booking Steps

1. Service selected
2. Date/time/pass validity selected
3. Booking draft created
4. Inventory lock/hold created
5. Payment method selected
6. Review summary
7. Confirm
8. Result:
   - confirmed
   - pending partner approval
   - rejected/refunded
   - failed

### 17.3 Payment Method Screen

If service supports both:

- Card 1: Use credits
  - show required credits
  - show current balance
  - if insufficient, disabled with subscribe CTA
- Card 2: Pay cash
  - show amount in THB
  - show payment provider method

If credits only:

- Show credits only

If cash only:

- Show cash only

### 17.4 Review Summary

Class summary:

- place
- class
- date/time
- level
- instructor
- duration
- payment method
- credit/cash amount
- cancellation policy

Court summary:

- place
- facility
- date/time
- duration
- resource if assigned
- participants optional
- payment method
- cancellation policy

Pass summary:

- place
- pass name
- validity
- uses
- payment method
- redemption method
- refund policy

### 17.5 Booking State Machine

```mermaid
stateDiagram-v2
  [*] --> Draft
  Draft --> InventoryHeld
  InventoryHeld --> PaymentSelected
  PaymentSelected --> CreditsReserved
  PaymentSelected --> CashAuthorized
  CreditsReserved --> AutoConfirm
  CashAuthorized --> AutoConfirm
  CreditsReserved --> PendingPartner
  CashAuthorized --> PendingPartner
  AutoConfirm --> Confirmed
  PendingPartner --> Confirmed: partner accepts
  PendingPartner --> Rejected: partner rejects
  Rejected --> RefundProcessing
  RefundProcessing --> Refunded
  Confirmed --> CheckInEligible
  CheckInEligible --> CheckedIn
  CheckedIn --> Completed
```

### 17.6 API Requirements

- `POST /booking-drafts`
- `POST /booking-drafts/:id/hold`
- `POST /booking-drafts/:id/payment-method`
- `POST /booking-drafts/:id/confirm`
- `GET /bookings/:id`
- `POST /bookings/:id/cancel`

### 17.7 Backend Requirements

- Inventory hold TTL, e.g. 5 minutes
- Idempotency key on confirm
- Transaction boundary:
  - validate inventory
  - reserve/capture payment
  - create booking
  - create activity stub
- If any step fails, release hold and reverse payment if needed

### 17.8 Acceptance Criteria

- User can book class with credits
- User can book class with cash
- User can book court with cash or credits
- User can buy pass
- Pending partner booking clearly explains refund
- Rejected booking refunds fully
- Duplicate confirm does not double charge

---

## 18. Feature PRD: Partner Portal

### 18.1 Goal

Partner Portal lets providers manage their DUDO presence, inventory, bookings, and check-ins

Detailed Partner Portal requirements are maintained in `Dev/DUDO_PARTNER_PORTAL_PRD.md`. Use that file as the implementation source of truth for partner login, dashboard, create/edit sections, reservation management, session cancellation, booking-level accept/cancel/reject, internal/external calendar, task management, and user app synchronization.

### 18.2 Roles

| Role | Permissions |
|---|---|
| Owner | all modules, payout, staff, settings |
| Manager | inventory, calendar, booking inbox |
| Front Desk | booking list, accept/reject, check-in |
| Instructor | class roster only |

### 18.3 Portal Navigation

1. Dashboard
2. Place Profile
3. Inventory
4. Calendar
5. Booking Inbox
6. Check-in
7. Reviews
8. Settlement
9. Settings

### 18.4 Place Profile Module

Partner can edit:

- place name
- branch name
- description
- category
- address/map pin
- contact
- opening hours
- amenities
- gallery
- cancellation policy
- service payment mode defaults

Admin approval required for:

- name
- address
- legal entity
- payout bank account
- high-risk payment policy change

### 18.5 Inventory Module

Partner chooses inventory type:

- Scheduled Class
- Court/Facility
- Pass

Scheduled Class actions:

- create class template
- create schedule
- set recurring schedule
- set capacity
- set instructor
- set price credits/cash
- set confirmation mode
- cancel class
- close booking

Court/Facility actions:

- create resources, e.g. Court A, Court B
- set opening hours
- set booking interval
- block time
- set duration rules
- set price per block
- view occupancy calendar

Pass actions:

- create pass product
- set validity
- set number of uses
- set price
- pause sales
- view redemptions

### 18.6 Booking Inbox

Required for services with partner approval

Booking card shows:

- user name
- service
- inventory type
- date/time
- payment type
- amount
- request time
- expiration time
- accept button
- reject button

Reject requires reason:

- slot unavailable
- facility maintenance
- staff unavailable
- duplicate
- other

Backend effect:

- Accept -> confirm booking and capture payment if needed
- Reject -> trigger full refund/release credits

### 18.7 Calendar Module

Calendar must support:

- Class roster
- Court resource grid
- Pass expected redemption list
- Filter by inventory type
- Day view MVP
- Week view P1

### 18.8 Check-in Module

Methods:

- QR scan
- Manual code
- Search booking

Check-in result:

- valid -> mark checked-in
- expired -> show expired
- wrong date -> show not eligible
- refunded/cancelled -> show invalid

### 18.9 Settlement Module MVP

Show:

- confirmed bookings
- attended bookings
- cash amount
- credits consumed
- refunds
- estimated payout

No complex accounting in MVP

---

## 19. Feature PRD: Activity Page

Reference:

![Activity Prototype](assets/prd/app/17_activity.png)

![Activity Inspiration](assets/prd/inspiration/activity_ui.png)

### 19.1 Goal

Activity combines upcoming bookings, check-in, completed activity history, Apple Health visualization, and post entry

### 19.2 Top Actions

Track:

- MVP meaning: Apple Health summary
- If Apple Health not connected -> Apple Health education/connect
- If connected -> Health Summary
- Do not open live GPS tracking in MVP

Check-in:

- Opens next eligible booking QR
- If no eligible booking, show upcoming booking list or empty state

Post:

- Opens create post with selectable completed/checked-in activity

### 19.3 Sections

- Upcoming Schedule
- Apple Health summary card
- Calendar/streak basic
- Activity History
- Booking History
- Saved Places shortcut

### 19.4 Activity Sources

- DUDO class booking
- DUDO court booking
- DUDO pass redemption
- Apple Health workout summary optional

Every activity must show source:

- DUDO verified
- DUDO booking
- Apple Health

### 19.5 Acceptance Criteria

- Track does not start GPS in MVP
- Apple Health disconnected state is clear
- Check-in button is visible only when useful
- Refunded booking appears with refunded status
- Completed activity can be shared

---

## 20. Feature PRD: Apple Health

Reference:

![Dashboard Inspiration](assets/prd/inspiration/personal_dashboard_ui.png)

### 20.1 Goal

Use Apple Health as MVP health data source. DUDO visualizes data but does not act as medical advisor

### 20.2 Permission Flow

1. User taps Track or Health Summary
2. Show education screen
3. User taps Connect Apple Health
4. iOS Health permission opens
5. User selects data
6. App syncs local summary
7. App shows visual cards

### 20.3 MVP Data Types

Must have:

- steps
- active energy
- workouts summary if available

Nice to have:

- heart rate summary
- sleep summary

### 20.4 UI Cards

- Today steps
- Active energy today
- Weekly activity bar
- Workouts this week
- Last synced
- Connected/disconnected state

### 20.5 Privacy

- Raw Apple Health data private by default
- Community post only includes metrics user explicitly selects
- User can disconnect Apple Health
- User can hide metrics from profile

### 20.6 Acceptance Criteria

- Denied permission does not block app
- No medical claims
- Last synced time appears
- User can open settings to disconnect

---

## 21. Feature PRD: Check-in

Reference:

![Check In QR](assets/prd/app/18_checkin_qr.png)

![Check In Success](assets/prd/app/19_checkin_success.png)

### 21.1 Goal

Check-in verifies that user actually attended booking/pass, enabling verified activity, review, and share

### 21.2 Eligibility

Booking is check-in eligible if:

- status is confirmed
- current time is within check-in window
- booking not cancelled/refunded
- pass valid and has uses remaining

Default check-in window:

- configurable by service/place
- fallback: 30 minutes before start to 30 minutes after start for classes/courts
- pass: valid on selected date or within validity period

### 21.3 QR Requirements

QR must contain short-lived token, not raw booking id

Server token fields:

- token_id
- booking_id
- user_id
- expires_at
- used_at
- status

### 21.4 Flow

1. User opens Activity
2. Tap Check-in
3. App finds eligible booking
4. App requests QR token
5. User shows QR
6. Partner scans in portal
7. Backend verifies token
8. Booking status -> checked_in
9. Activity status -> completed or checked_in
10. User sees success
11. CTA: View Activity, Share

### 21.5 Acceptance Criteria

- Expired QR can refresh
- Reused QR is rejected
- Cancelled/refunded booking cannot check in
- Manual code fallback works
- Successful check-in creates verified activity

---

## 22. Feature PRD: Review

Reference:

![Review Inspiration](assets/prd/inspiration/rating_review_wireframe.png)

### 22.1 Goal

Reviews must be tied to verified/completed activities where possible, so place reputation is trustworthy

### 22.2 Review Form

Fields:

- rating 1 to 5
- tags
- text
- optional image later
- service attended

Rules:

- User can review only completed/checked-in DUDO booking
- One review per booking
- Review appears on place and optionally community
- Review must link back to place

### 22.3 Backend Requirements

- Review table
- Moderation status
- Aggregate rating update
- Review-place-service relationship

### 22.4 Acceptance Criteria

- User cannot review refunded booking
- Review displays verified badge
- Review post can route to place

---

## 23. Feature PRD: Share / Create Post

Reference:

![Snap Share Prototype](assets/prd/app/20_snap_share.png)

![Activity Post Flow](assets/prd/inspiration/activity_post_flow.png)

### 23.1 Goal

Let user create a community post from:

1. verified/completed DUDO booking
2. Apple Health workout or health summary selected by user
3. review written after a completed booking

Share flow is the bridge between Activity and Community. It must feel lightweight, but the backend must preserve trust, privacy, and place routing.

### 23.2 Flow

Entry points:

- Activity page upcoming/history card: `Share`
- Check-in success screen: `Share`
- Review submitted success: `Share review`
- Community tab: floating/create button
- Place detail after completed booking: `Share your visit`

Main flow:

1. User taps Share / Post
2. App opens Source Picker
3. User selects source:
   - completed booking
   - Apple Health workout
   - review
4. App opens Compose screen
5. User selects visual:
   - place gallery image
   - default activity image
   - user photo upload if enabled
6. User selects stickers/metrics
7. User writes caption
8. User confirms place attachment
9. User selects visibility
10. Preview
11. Publish
12. Navigate to created post detail or Community feed with new post highlighted

If publish fails:

- keep local draft
- show retry CTA
- do not duplicate post on retry

### 23.2.1 Source Picker Requirements

Source card must show:

- source type: DUDO booking / Apple Health / Review
- place name if available
- service/class name if available
- completed date
- verification badge if source is checked-in DUDO booking
- available metrics count

Rules:

- Refunded booking cannot be shared as verified activity
- Cancelled/no-show booking cannot be shared as verified activity
- Apple Health source cannot show DUDO verified badge
- Review source must link to `review_id` and `place_id`
- User can skip metric sharing and publish caption + image only

### 23.2.2 Compose Screen Requirements

Compose screen sections:

1. Preview card
2. Image selector
3. Data sticker selector
4. Caption input
5. Place attachment selector
6. Visibility selector
7. Publish CTA

Preview card must match Community post card enough that user understands final output.

Required validations:

- caption max 500 characters
- at least one of image, caption, or sticker must be present
- if post has `place_id`, place attachment must be visible in preview
- if Apple Health metric is selected, show privacy confirmation text
- block publish if media upload is still running

### 23.3 Allowed Stickers MVP

DUDO booking:

- verified
- class/service name
- place name
- credits used
- cash paid optional and hidden by default
- date
- checked-in time optional
- streak optional if already available

Apple Health:

- steps
- active energy
- duration
- distance if workout has it
- workout type if available

Review:

- rating
- review tags
- verified visit

### 23.4 Privacy Rule

No metric is shared unless user explicitly selects it.

Default:

- DUDO verified badge can be shown for checked-in booking
- place name can be attached if source booking has place
- health metrics are off
- cash amount is off
- exact check-in time is off unless user selects it

Visibility MVP:

- `public`: visible in DUDO Community
- `profile_only`: visible on user's profile but not ranking into feed

Post-MVP:

- followers only
- private draft
- close friends

### 23.5 Backend Requirements

- Post create endpoint
- Draft-safe idempotency key
- Media upload/session endpoint
- Media reference
- Shared metrics array
- Moderation status
- Link to place/activity
- Link to booking/review/health source
- Privacy/visibility field
- Post deletion endpoint
- Feed invalidation or re-ranking after publish

### 23.6 Acceptance Criteria

- Post from checked-in booking appears as verified
- User can publish without Apple Health metrics
- Failed publish keeps draft
- User can delete own post
- Post from review opens the related place and review
- Post with place attachment can be saved as place from Community
- Cash amount is never shared unless user explicitly enables it

---

## 24. Feature PRD: Community

Reference:

![Community Prototype](assets/prd/app/21_community_after_share.png)

![Community Inspiration](assets/prd/inspiration/community_feed_wireframe.png)

### 24.1 Goal

Community is the social proof and place discovery layer of DUDO.

It must let users:

- see what other people actually did
- discover places through activity posts and reviews
- comment on posts
- save places from posts/reviews
- open reviewed places
- book similar or book the attached place when inventory exists

Community is not just a generic feed. Every post should ideally connect back to a place, activity, review, club, or bookable service.

### 24.1.1 MVP Product Principles

1. **Verified beats viral**  
   Checked-in DUDO activities and verified reviews should rank higher than generic posts.

2. **Community drives booking**  
   Post cards must have a route to Place Detail, saved place, or similar booking flow.

3. **User controls shared metrics**  
   Apple Health or payment-related data is never shared automatically.

4. **Non-partner places must be honest**  
   If a reviewed/saved place is not a DUDO partner, show `View place` / `Save place`, not `Book`.

5. **MVP keeps social simple**  
   No DM, no complex follow graph, no algorithmic creator tools, no reels/video-first feed.

### 24.2 Feed Tabs MVP

MVP tabs:

| Tab | Backend `feed_type` | MVP behavior |
|---|---|---|
| For You | `for_you` | Mixed verified posts, reviews, nearby places, partner/bookable content |
| Nearby | `nearby` | Posts/reviews around selected area or current location |
| Following | `following` | Posts from followed users/clubs; if no graph, show empty state and suggested clubs |
| Clubs | `clubs` | Workout club/community activity posts and event posts |

Prototype labels such as `Silom`, `Friend`, `Following`, `For you` can be refined, but backend must support `feed_type`.

Feed tab rules:

- Default tab: `For You`
- User's last selected tab persists locally
- Nearby tab requires either current location permission or manually selected area
- Following tab can launch with empty state if follow graph is not ready
- Clubs tab can be powered by admin-configured club collections

### 24.3 Post Card Requirements

Post must show:

- user avatar/name
- timestamp
- post source badge:
  - `DUDO verified`
  - `Apple Health`
  - `Review`
  - `Club event`
- place/service attachment when available
- caption
- image or visual card
- selected stickers/metrics
- comment count
- save place action if `place_id` exists
- view place action if `place_id` exists
- book CTA only if attached place/service is bookable
- report/hide menu
- moderation/visibility state for owner if relevant

Post card anatomy:

```text
User Row
  avatar, name, area/club/source, timestamp, more menu

Content
  headline/caption
  media
  stickers/metrics overlay

Place Attachment
  place name, area, partner badge, rating/review count, save button

Actions
  like/reaction, comment, share, save place

CTA
  View place / Book this class / Book similar
```

### 24.3.1 Post Types

MVP must support these post types:

| Type | Description | Required Link |
|---|---|---|
| `activity_post` | Shared from completed booking or Apple Health activity | `activity_id` or `booking_id` or `health_activity_id` |
| `review_post` | Review surfaced into feed | `review_id`, `place_id` |
| `place_post` | User/community recommendation for a place | `place_id` |
| `club_event_post` | Workout club event or community activity | `club_id`, optional `service_id` or `place_id` |

Post-MVP:

- video post
- challenge post
- story-only content
- threaded discussion post

### 24.3.2 Place Attachment Requirements

If post has `place_id`, card must show a place attachment block.

Place attachment fields:

- place name
- area
- thumbnail
- partner status:
  - `DUDO Partner`
  - `Community reviewed`
  - `Not bookable yet`
- rating if available
- saved state
- primary action

Primary action logic:

| Place state | CTA |
|---|---|
| Partner with active inventory | `Book` or `View availability` |
| Partner but no current slot | `View place` |
| Community reviewed but not partner | `View place` |
| Missing/removed place | Hide CTA and show muted unavailable state |

### 24.3.3 Review Routing

If a post is created from a review:

- tapping rating/review area opens review detail or Place Detail review section
- Place Detail must highlight the related review if route includes `review_id`
- review must show `Verified visit` when linked to checked-in booking
- user can save the reviewed place from the post
- user can book if the reviewed place has active partner inventory

### 24.3.4 Book Similar Logic

`Book similar` is shown when:

- post has activity category but no direct bookable service
- post comes from Apple Health activity
- attached place is not partner
- original service is unavailable/full

Book similar target:

- open Discovery/Vertical List with prefilled filters:
  - activity category
  - area if available
  - time preference if available
  - price/credit filters not prefilled unless explicit

### 24.4 Required Actions MVP

Share:

- create post from activity

Comment:

- add text comment
- list comments
- delete own comment
- report comment
- comment count updates immediately

Save Place:

- if post has place_id, user can save it
- saved place appears in Profile > Saved Places
- saved state persists across Discovery, Place Detail, Community

View Place:

- tapping place opens Place Detail

Book Similar:

- opens filtered service list or place detail

Hide / Report:

- user can hide a post from their feed
- user can report post with reason
- hidden/reported post should not reappear for that user

Delete Own Post:

- owner can delete post
- deleted post no longer appears in feed
- comments/reactions remain in database for audit but hidden from normal feed

### 24.5 Comment Requirements

Comment MVP behavior:

- flat comments only, no threaded replies
- max 300 characters
- newest or oldest sort configurable; default oldest first in detail view
- feed card shows first 1-2 comment previews
- post detail shows full comment list
- comment input fixed at bottom of post detail
- user can delete own comment
- admin can hide comment

Validation:

- empty comment cannot submit
- blocked/reported user interaction rules can be added later
- comments on deleted/hidden posts are disabled

### 24.6 Search and Discovery Within Community

Community top search MVP:

- search posts by place name, class name, area, club name, caption keywords
- first MVP can search server-side posts and places together

Search result sections:

1. Places
2. Posts
3. Clubs

If search is too heavy for first build, keep UI but implement place/post keyword search only.

### 24.7 Empty States

For You empty:

- title: `No community posts yet`
- CTA: `Share your first activity`

Nearby empty:

- title: `No posts around this area yet`
- CTA: `Explore nearby places`

Following empty:

- title: `Follow clubs and people to build your feed`
- CTA: `Browse clubs`

Clubs empty:

- title: `No club activities yet`
- CTA: `Explore partner places`

### 24.8 Moderation and Safety

MVP moderation states:

- `published`
- `hidden_by_user`
- `reported`
- `under_review`
- `removed`

Rules:

- newly created posts default to `published` unless blocked by automated checks
- reported content remains hidden for reporter immediately
- admin can remove post/comment
- removed post returns 404 or unavailable state
- sensitive health/payment data must not be displayed unless selected and stored as shared metric

### 24.9 Feed Ranking MVP

Feed ranking does not need complex AI in MVP. Use deterministic scoring:

Score inputs:

- verified DUDO activity boost
- review post boost
- nearby area match boost
- partner/bookable place boost
- recent post boost
- club collection boost if viewing Clubs tab
- hidden/reported exclusion

Recommended scoring:

```text
score =
  recency_score
  + verified_boost
  + nearby_boost
  + bookable_place_boost
  + review_boost
  + club_boost
```

Rules:

- do not show posts user hid/reported
- do not show removed posts
- do not rank non-partner place above partner place only because it has no inventory; trust and relevance matter
- cursor pagination must remain stable even if new posts arrive

### 24.10 Backend Requirements

- Feed endpoint with pagination
- Post endpoint
- Post detail endpoint
- Post delete endpoint
- Reaction endpoint if likes are kept
- Comment endpoint
- Saved place endpoint
- Report endpoint
- Moderation status
- Feed ranking service
- Place attachment resolver
- Book-similar filter resolver
- Notification hook for new comment, optional for MVP

### 24.11 API Request/Response Notes

Feed request:

```http
GET /community/feed?feed_type=for_you&area_id=area_thonglor&cursor=cursor_123&limit=20
```

Feed item must include denormalized display data to avoid client doing many calls:

```json
{
  "id": "post_123",
  "type": "activity_post",
  "source_type": "dudo_booking",
  "status": "published",
  "visibility": "public",
  "created_at": "2026-06-20T09:30:00+07:00",
  "author": {
    "id": "user_123",
    "display_name": "Maya",
    "avatar_url": ""
  },
  "caption": "Solid reformer session today.",
  "media": [
    {
      "id": "media_123",
      "type": "image",
      "url": "https://..."
    }
  ],
  "stickers": [
    {
      "type": "verified",
      "label": "DUDO verified"
    },
    {
      "type": "metric",
      "label": "45 min"
    }
  ],
  "place": {
    "id": "place_123",
    "name": "Absolute You Thonglor",
    "area": "Thonglor",
    "thumbnail_url": "https://...",
    "partner_status": "partner",
    "is_saved": false,
    "primary_cta": "book"
  },
  "engagement": {
    "reaction_count": 12,
    "comment_count": 3,
    "viewer_has_reacted": false
  }
}
```

Create post request:

```json
{
  "source_type": "dudo_booking",
  "source_id": "booking_123",
  "caption": "Solid reformer session today.",
  "media_ids": ["media_123"],
  "place_id": "place_123",
  "visibility": "public",
  "shared_metrics": [
    {
      "type": "verified",
      "enabled": true
    },
    {
      "type": "duration",
      "value": 45,
      "unit": "min"
    }
  ],
  "idempotency_key": "uuid-from-client"
}
```

### 24.12 Acceptance Criteria

- Comment persists
- Save place persists
- Review/post routes to place
- Hidden/reported post does not keep showing to same user after action
- Post card shows partner vs community-reviewed place correctly
- Non-partner place does not show booking CTA
- Book similar opens filtered list with category/area prefilled
- Review post opens Place Detail with review context
- Deleted own post disappears from feed
- Reported post is hidden for reporter immediately
- Feed pagination does not duplicate posts
- Health metrics do not appear unless user selected them
- Saved place state is consistent across Community, Profile, Place Detail, and Discovery

---

## 25. Feature PRD: Profile

Reference:

![Profile Prototype](assets/prd/app/22_profile.png)

### 25.1 Goal

Profile manages identity, credits, subscription, payments, saved places, Apple Health, privacy

### 25.2 Sections

- user profile
- credits balance
- subscription status
- payment methods
- saved places
- Apple Health status
- privacy settings
- notifications

### 25.3 Saved Places

Sources:

- place detail save
- community post save place
- review save place

Saved place card:

- image
- name
- area
- categories
- latest availability optional

### 25.4 Acceptance Criteria

- Credit balance matches ledger
- Subscription active state displays
- Apple Health connection state displays
- Saved place list opens

---

## 26. Feature PRD: Subscription

Reference:

![Subscription Prototype](assets/prd/app/23_subscription_plans.png)

![Subscription Inspiration](assets/prd/inspiration/subscription_flow.png)

### 26.1 Goal

Subscription sells monthly credits

### 26.2 MVP Flow

1. User opens Profile
2. Tap Subscription
3. View plans
4. Select plan
5. Checkout
6. Payment
7. Success
8. Credits granted
9. Profile shows active plan

### 26.3 Remove From MVP

- add-ons
- insurance
- nutrition
- extra credit add-on
- promotion discount

### 26.4 Plan Config

Backend-configurable:

- plan_id
- name
- price
- credits_per_cycle
- billing_cycle
- benefits
- active
- sort_order

### 26.5 Acceptance Criteria

- Payment success creates subscription
- Credits granted through ledger
- Duplicate webhook does not grant twice
- User sees active plan

---

## 27. Admin Portal Requirements

Admin portal is for DUDO internal team

### 27.1 Modules

- Partner Management
- Place Approval
- Category Management
- Filter Taxonomy
- Discovery Shelf Config
- Nearby Community Config
- Workout Club Collections
- Editorial CMS
- Booking Monitoring
- Refund Monitoring
- Content Moderation

### 27.2 Discovery Shelf Config

Admin can create shelf:

- title
- enabled
- placement order
- rule
- pinned places/services
- category restriction
- area restriction
- inventory type restriction

### 27.3 Refund Monitoring

Admin can see:

- refund pending
- refund completed
- refund failed
- booking id
- partner
- reason
- payment id
- amount

### 27.4 Acceptance Criteria

- Product can adjust Discovery without app release
- Ops can find failed refunds
- Admin can disable partner/service

---

## 28. Data Model MVP

### 28.1 User

```json
{
  "id": "user_123",
  "display_name": "Aom Dudo",
  "avatar_url": "",
  "onboarding_completed_at": "2026-06-20T00:00:00Z",
  "preferred_categories": ["pilates", "recovery"],
  "preferred_areas": ["thonglor", "silom"],
  "apple_health_connected": true
}
```

### 28.2 Place

```json
{
  "id": "place_123",
  "name": "The Hotel Republic",
  "area": "Silom",
  "address": "Silom, Bangkok",
  "lat": 13.0,
  "lng": 100.0,
  "description": "",
  "rating": 4.8,
  "review_count": 1233,
  "categories": ["pilates", "yoga"],
  "amenities": ["shower", "locker"],
  "status": "active"
}
```

### 28.3 Service

```json
{
  "id": "service_123",
  "place_id": "place_123",
  "inventory_type": "class",
  "name": "Reformer Flow",
  "category": "pilates",
  "payment_mode": "credits_or_cash",
  "credit_price": 4,
  "cash_price": 450,
  "confirmation_mode": "auto_confirm",
  "status": "active"
}
```

### 28.4 Class Slot

```json
{
  "id": "slot_123",
  "service_id": "service_123",
  "starts_at": "2026-08-12T18:00:00+07:00",
  "ends_at": "2026-08-12T19:30:00+07:00",
  "capacity": 12,
  "spots_left": 3,
  "level": "Intermediate",
  "instructor": "Ben Parker",
  "status": "available"
}
```

### 28.5 Facility Resource

```json
{
  "id": "resource_123",
  "place_id": "place_123",
  "service_id": "service_456",
  "name": "Court A",
  "resource_type": "padel_court",
  "status": "active"
}
```

### 28.6 Resource Availability

```json
{
  "id": "block_123",
  "resource_id": "resource_123",
  "starts_at": "2026-08-12T10:00:00+07:00",
  "ends_at": "2026-08-12T11:00:00+07:00",
  "credit_price": 6,
  "cash_price": 800,
  "status": "available"
}
```

### 28.7 Pass

```json
{
  "id": "pass_123",
  "service_id": "service_789",
  "pass_type": "multi_pass",
  "uses_total": 3,
  "validity_days": 30,
  "credit_price": 10,
  "cash_price": 1200,
  "status": "active"
}
```

### 28.8 Booking

```json
{
  "id": "booking_123",
  "user_id": "user_123",
  "place_id": "place_123",
  "service_id": "service_123",
  "inventory_type": "class",
  "slot_id": "slot_123",
  "resource_id": null,
  "pass_id": null,
  "status": "confirmed",
  "payment_method": "credits",
  "credit_amount": 4,
  "cash_amount": 0,
  "refund_status": null
}
```

### 28.9 Credit Ledger

```json
{
  "id": "ledger_123",
  "user_id": "user_123",
  "booking_id": "booking_123",
  "type": "booking_credit_capture",
  "amount": -4,
  "balance_after": 14,
  "created_at": "2026-06-20T00:00:00Z"
}
```

### 28.10 Payment

```json
{
  "id": "payment_123",
  "booking_id": "booking_123",
  "amount": 450,
  "currency": "THB",
  "status": "captured",
  "provider": "payment_provider",
  "provider_transaction_id": "txn_123"
}
```

### 28.11 Refund

```json
{
  "id": "refund_123",
  "booking_id": "booking_123",
  "payment_id": "payment_123",
  "amount": 450,
  "currency": "THB",
  "reason": "partner_rejected",
  "status": "completed"
}
```

### 28.12 Community Post

```json
{
  "id": "post_123",
  "user_id": "user_123",
  "type": "activity_post",
  "source_type": "dudo_booking",
  "source_id": "booking_123",
  "activity_id": "activity_123",
  "booking_id": "booking_123",
  "review_id": null,
  "health_activity_id": null,
  "place_id": "place_123",
  "caption": "Great session today",
  "media": [
    {
      "id": "media_123",
      "type": "image",
      "url": "https://..."
    }
  ],
  "shared_metrics": [
    {
      "type": "verified",
      "enabled": true
    },
    {
      "type": "duration",
      "value": 45,
      "unit": "min"
    }
  ],
  "visibility": "public",
  "status": "published",
  "moderation_status": "approved",
  "created_at": "2026-06-20T09:30:00+07:00",
  "updated_at": "2026-06-20T09:30:00+07:00",
  "deleted_at": null
}
```

Required indexes:

- `(status, visibility, created_at)`
- `(place_id, created_at)`
- `(user_id, created_at)`
- `(source_type, source_id)`
- `(review_id)`

### 28.13 Community Comment

```json
{
  "id": "comment_123",
  "post_id": "post_123",
  "user_id": "user_456",
  "body": "Need to try this place next week.",
  "status": "published",
  "moderation_status": "approved",
  "created_at": "2026-06-20T10:12:00+07:00",
  "updated_at": "2026-06-20T10:12:00+07:00",
  "deleted_at": null
}
```

Rules:

- flat comments only in MVP
- max 300 characters
- user can delete own comment
- admin can hide/remove comment

Required indexes:

- `(post_id, created_at)`
- `(user_id, created_at)`
- `(status, moderation_status)`

### 28.14 Community Reaction

```json
{
  "id": "reaction_123",
  "post_id": "post_123",
  "user_id": "user_456",
  "reaction_type": "like",
  "created_at": "2026-06-20T10:13:00+07:00"
}
```

Rules:

- one active reaction per user per post for MVP
- reaction can be toggled off
- reaction is lower priority than comment/save place

Required unique constraint:

- `(post_id, user_id)`

### 28.15 Saved Place

```json
{
  "id": "saved_place_123",
  "user_id": "user_123",
  "place_id": "place_123",
  "source_type": "community_post",
  "source_id": "post_123",
  "created_at": "2026-06-20T10:14:00+07:00"
}
```

Source types:

- `discovery`
- `place_detail`
- `community_post`
- `review`
- `nearby_map`
- `editorial`

Rules:

- user can save a place once
- saved state must sync across Discovery, Community, Place Detail, Profile
- deleting a post must not delete saved place
- if place is removed/unpublished, saved place card shows unavailable state

Required unique constraint:

- `(user_id, place_id)`

### 28.16 Community Report / Hidden Content

```json
{
  "id": "report_123",
  "user_id": "user_456",
  "target_type": "post",
  "target_id": "post_123",
  "reason": "spam",
  "note": "",
  "status": "submitted",
  "created_at": "2026-06-20T10:15:00+07:00"
}
```

Also store hidden content:

```json
{
  "id": "hidden_123",
  "user_id": "user_456",
  "target_type": "post",
  "target_id": "post_123",
  "reason": "reported",
  "created_at": "2026-06-20T10:15:00+07:00"
}
```

---

## 29. API MVP

### 29.1 User

- `GET /me`
- `PATCH /me/preferences`
- `PATCH /me/privacy`
- `GET /me/credits`
- `GET /me/saved-places`

### 29.2 Discovery

- `GET /discovery/config`
- `GET /categories`
- `GET /places`
- `GET /places/:placeId`
- `GET /places/:placeId/services`
- `GET /services/:serviceId`
- `GET /services/:serviceId/availability`
- `GET /editorials`
- `GET /editorials/:id`

### 29.3 Booking

- `POST /booking-drafts`
- `POST /booking-drafts/:id/hold`
- `POST /booking-drafts/:id/payment-method`
- `POST /booking-drafts/:id/confirm`
- `GET /bookings`
- `GET /bookings/:id`
- `POST /bookings/:id/cancel`

### 29.4 Partner

- `GET /partner/places`
- `PATCH /partner/places/:id`
- `POST /partner/services`
- `PATCH /partner/services/:id`
- `GET /partner/bookings`
- `POST /partner/bookings/:id/accept`
- `POST /partner/bookings/:id/reject`
- `POST /partner/checkins/verify`

### 29.5 Community

Feed:

- `GET /community/feed?feed_type=for_you|nearby|following|clubs&area_id=&club_id=&cursor=&limit=`
- `GET /community/search?q=&area_id=&cursor=&limit=`

Posts:

- `POST /community/posts`
- `GET /community/posts/:id`
- `DELETE /community/posts/:id`
- `POST /community/posts/:id/hide`
- `POST /community/posts/:id/report`

Reactions:

- `POST /community/posts/:id/reactions`
- `DELETE /community/posts/:id/reactions/me`

Comments:

- `GET /community/posts/:id/comments?cursor=&limit=`
- `POST /community/posts/:id/comments`
- `DELETE /community/comments/:commentId`
- `POST /community/comments/:commentId/report`

Saved places:

- `POST /places/:id/save`
- `DELETE /places/:id/save`
- `GET /me/saved-places`

Media:

- `POST /community/media/uploads`
- `POST /community/media/uploads/:id/complete`

Book similar:

- `GET /community/posts/:id/book-similar`

### 29.6 Subscription

- `GET /subscription/plans`
- `POST /subscription/checkout`
- `POST /subscription/payment`
- `GET /subscription/current`

### 29.7 Health

Apple Health data starts on-device. Backend stores summary only if required:

- `POST /health/summaries`
- `GET /health/summaries`
- `DELETE /health/connection`

---

## 30. Analytics

Must track:

- `onboarding_completed`
- `home_viewed`
- `discovery_viewed`
- `category_selected`
- `filter_applied`
- `place_viewed`
- `service_selected`
- `booking_started`
- `payment_method_selected`
- `booking_confirm_clicked`
- `booking_confirmed`
- `booking_pending_partner`
- `partner_booking_accepted`
- `partner_booking_rejected`
- `refund_initiated`
- `refund_completed`
- `checkin_opened`
- `checkin_verified`
- `apple_health_connect_clicked`
- `apple_health_connected`
- `apple_health_denied`
- `community_feed_viewed`
- `community_tab_selected`
- `community_search_submitted`
- `community_post_opened`
- `community_place_attachment_clicked`
- `community_book_similar_clicked`
- `post_composer_opened`
- `post_source_selected`
- `post_metric_selected`
- `post_visibility_selected`
- `post_publish_clicked`
- `post_published`
- `post_publish_failed`
- `post_deleted`
- `post_reported`
- `post_hidden`
- `comment_created`
- `comment_deleted`
- `comment_reported`
- `place_saved`
- `place_unsaved`
- `review_post_opened`
- `club_feed_viewed`
- `subscription_paid`

Base event properties:

- user_id
- session_id
- platform
- app_version
- source_screen
- place_id
- service_id
- booking_id
- post_id
- comment_id
- review_id
- club_id
- area_id
- feed_type
- post_type
- source_type
- visibility
- inventory_type
- payment_method
- credit_amount
- cash_amount

Community-specific event notes:

| Event | Required extra properties |
|---|---|
| `community_feed_viewed` | `feed_type`, `area_id`, `cursor_loaded_count` |
| `post_composer_opened` | `source_screen`, `source_type` |
| `post_published` | `post_id`, `post_type`, `source_type`, `place_id`, `shared_metric_count`, `visibility` |
| `comment_created` | `post_id`, `comment_id`, `post_type` |
| `place_saved` | `place_id`, `source_type`, `source_id` |
| `community_book_similar_clicked` | `post_id`, `activity_category`, `area_id` |
| `post_reported` | `post_id`, `reason` |

---

## 31. QA Checklist

### 31.1 Credits Booking

- User has credits
- Select class
- Select credits payment
- Confirm booking
- Credits ledger updates
- Booking appears in Activity

### 31.2 Cash Booking

- User selects cash payment
- Payment success
- Booking confirmed or pending
- Payment record created

### 31.3 Partner Reject Refund

- Booking requires approval
- Partner rejects
- Refund job runs
- Booking shows rejected/refunded
- User balance/payment status correct

### 31.4 Court Booking

- Partner creates Court A/B
- Court A blocked
- User sees available Court B time
- Booking assigns resource

### 31.5 Pass Purchase

- User buys 3-pass
- Pass appears active
- Staff redeems once
- Remaining uses decreases

### 31.6 Apple Health

- User connects Apple Health
- Summary appears
- User denies permission
- Empty state appears

### 31.7 Community

Create post from DUDO booking:

- User completes/checks in booking
- User taps Share
- Composer opens with booking source
- Verified badge is available
- User publishes post
- Post appears in For You feed
- Post opens as detail

Create post from Apple Health:

- User connects Apple Health
- User selects workout/summary
- Health metrics are off by default
- User selects one metric
- Published post shows only selected metric
- Post does not show DUDO verified badge

Comments:

- Another user opens post detail
- User submits comment
- Comment count updates
- Comment persists after app reload
- User can delete own comment
- User cannot delete someone else's comment

Save place:

- Post has `place_id`
- User taps save place
- Saved state updates on post card
- Same place appears saved in Place Detail
- Same place appears in Profile > Saved Places
- User unsaves place and state updates across surfaces

Review routing:

- User creates review from completed booking
- Review appears as review post
- Tapping review opens Place Detail review section
- Review shows verified visit
- Save place works from review post

Partner vs non-partner place:

- Partner place post shows Book/View availability CTA
- Non-partner reviewed place shows View place/Save only
- Non-partner place never shows fake booking CTA

Book similar:

- Apple Health post has running/yoga/pilates category
- User taps Book similar
- Discovery opens with category and area prefilled
- Results do not include unavailable/full-only inventory unless filter allows it

Report/hide:

- User reports a post
- Post hides immediately for reporter
- Post does not reappear after refresh
- Admin can see report in moderation queue

Pagination:

- Feed loads first page
- User scrolls for next page
- No duplicate posts
- Deleted/removed post does not appear in subsequent pages

---

## 32. Build Priority

### P0

- Auth/user profile
- Place/service/inventory data model
- Discovery Main
- Filter config
- Place Detail
- Scheduled class booking
- Credits ledger
- Cash payment
- Refund on partner rejection
- Activity upcoming/history
- Check-in QR
- Community feed
- Community create post from completed booking
- Community comment
- Community save place
- Community post/review route to Place Detail
- Subscription credits
- Partner booking accept/reject
- Apple Health summary

### P1

- Nearby Map
- Nearby Community
- Explore Editorial
- Court resource calendar
- Pass wallet polish
- Partner settlement summary
- Community create post from Apple Health
- Community search
- Community report/hide moderation
- Clubs feed with admin-configured collections

### P2

- Workout club partnerships
- Segment personalization
- Advanced dashboard
- Live tracking
- Promotions
- Add-ons
- Following graph polish
- Video/community stories
- Threaded comments

---

## 33. Final MVP Acceptance

MVP is accepted when:

1. User can discover a place/service
2. User can book class with credits
3. User can book with cash
4. User can receive full refund when partner rejects
5. User can book court/facility availability
6. User can buy/redeem pass
7. User can check in with QR
8. User can see Activity history
9. User can connect Apple Health and see summary
10. User can share activity post
11. User can comment
12. User can save place
13. User can open place from post/review
14. Partner can manage class/court/pass
15. Partner can accept/reject booking
16. Admin can configure categories, filters, and Discovery shelves

End of PRD.
