import { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav.jsx";
import FilterSheet from "./components/FilterSheet.jsx";
import RatingReviewModal from "./components/RatingReviewModal.jsx";
import SnapShareStudio from "./components/SnapShareStudio.jsx";
import Toast from "./components/Toast.jsx";
import StatusBar from "./components/StatusBar.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Home from "./pages/Home.jsx";
import Discovery from "./pages/Discovery.jsx";
import Activity from "./pages/Activity.jsx";
import ActivityHistory from "./pages/ActivityHistory.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import PersonalDashboard from "./pages/PersonalDashboard.jsx";
import TrackingStart from "./pages/TrackingStart.jsx";
import LiveTracking from "./pages/LiveTracking.jsx";
import ActivityPostFlow from "./pages/ActivityPostFlow.jsx";
import Community from "./pages/Community.jsx";
import Profile from "./pages/Profile.jsx";
import StudioDetail from "./pages/StudioDetail.jsx";
import StudioReview from "./pages/StudioReview.jsx";
import StudioGallery from "./pages/StudioGallery.jsx";
import GallerySection from "./pages/GallerySection.jsx";
import ClassDetail from "./pages/ClassDetail.jsx";
import VerticalListPage from "./pages/VerticalListPage.jsx";
import ReservationTimeSpot from "./pages/ReservationTimeSpot.jsx";
import ReservationReviewConfirm from "./pages/ReservationReviewConfirm.jsx";
import BookingConfirmed from "./pages/BookingConfirmed.jsx";
import CheckInQR from "./pages/CheckInQR.jsx";
import CheckInSuccess from "./pages/CheckInSuccess.jsx";
import UserReviewArticle from "./pages/UserReviewArticle.jsx";
import SubscriptionPlans from "./pages/SubscriptionPlans.jsx";
import SubscriptionAddOns from "./pages/SubscriptionAddOns.jsx";
import SubscriptionCheckout from "./pages/SubscriptionCheckout.jsx";
import SubscriptionPayment from "./pages/SubscriptionPayment.jsx";
import SubscriptionSuccess from "./pages/SubscriptionSuccess.jsx";
import { discoveryEditorials, gallerySections, initialCommunityPosts, studios, subscriptionPlans } from "./data/mockData.js";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [credits, setCredits] = useState(18);
  const [activeBooking, setActiveBooking] = useState(null);
  const [checkInStatus, setCheckInStatus] = useState("idle");
  const [favorites, setFavorites] = useState(["hotel-republic", "coastal-retreat"]);
  const [posts, setPosts] = useState(initialCommunityPosts);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [snapOpen, setSnapOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [studioFlowPage, setStudioFlowPage] = useState(null);
  const [selectedStudio, setSelectedStudio] = useState(studios[0]);
  const [selectedClass, setSelectedClass] = useState({ studio: studios[0], className: studios[0].classes[0] });
  const [selectedGallerySection, setSelectedGallerySection] = useState(gallerySections[0]);
  const [verticalListTitle, setVerticalListTitle] = useState("Available Classes");
  const [verticalListBackPage, setVerticalListBackPage] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(discoveryEditorials[0]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [reservationDraft, setReservationDraft] = useState(null);
  const [subscriptionPlan, setSubscriptionPlan] = useState(subscriptionPlans[0]);
  const [subscriptionAddOns, setSubscriptionAddOns] = useState([]);
  const [subscriptionCheckout, setSubscriptionCheckout] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [toast, setToast] = useState("");
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [swipeStart, setSwipeStart] = useState(null);
  const [swipingBack, setSwipingBack] = useState(false);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(window.__dudoToast);
    window.__dudoToast = window.setTimeout(() => setToast(""), 2600);
  };

  const handleFavorite = (id) => {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const handleNavigate = (tab) => {
    setStudioFlowPage(null);
    setActiveTab(tab);
  };

  const goBackFromFlow = () => {
    const backMap = {
      detail: null,
      "class-detail": "detail",
      review: "detail",
      gallery: "detail",
      "gallery-section": "gallery",
      "vertical-list": verticalListBackPage,
      time: "detail",
      confirm: "time",
      booked: null,
      checkin: null,
      success: null,
      article: null,
      "subs-plans": null,
      "subs-addons": "subs-plans",
      "subs-checkout": "subs-addons",
      "subs-payment": "subs-checkout",
      "subs-success": null,
      "activity-history": null,
      "activity-detail": "activity-history",
      "personal-dashboard": null,
      "tracking-start": null,
      "live-tracking": "tracking-start",
      "activity-post": null
    };
    const target = backMap[studioFlowPage];
    if (studioFlowPage === "checkin" || studioFlowPage === "success") {
      setActiveTab("Activity");
    }
    setStudioFlowPage(target ?? null);
  };

  const handleTouchStart = (event) => {
    if (!studioFlowPage || filterOpen || reviewOpen || snapOpen) return;
    const touch = event.touches[0];
    setSwipeStart({ x: touch.clientX, y: touch.clientY, t: Date.now() });
  };

  const handleTouchMove = (event) => {
    if (!swipeStart || swipeStart.x > 32) return;
    const touch = event.touches[0];
    const dx = touch.clientX - swipeStart.x;
    const dy = Math.abs(touch.clientY - swipeStart.y);
    setSwipingBack(dx > 24 && dy < 42);
  };

  const handleTouchEnd = (event) => {
    if (!swipeStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - swipeStart.x;
    const dy = Math.abs(touch.clientY - swipeStart.y);
    const elapsed = Date.now() - swipeStart.t;
    setSwipeStart(null);
    setSwipingBack(false);
    if (swipeStart.x <= 32 && dx > 82 && dy < 58 && elapsed < 700) {
      navigator.vibrate?.(8);
      goBackFromFlow();
    }
  };

  const handleOpenStudio = (studio) => {
    setSelectedStudio(studio);
    setStudioFlowPage("detail");
  };

  const handleOpenClass = (studio, className = studio.classes[0]) => {
    setSelectedStudio(studio);
    setSelectedClass({ studio, className });
    setStudioFlowPage("class-detail");
  };

  const handleOpenGallery = (section = null) => {
    if (section?.id) setSelectedGallerySection(section);
    setStudioFlowPage("gallery");
  };

  const handleOpenGallerySection = (section) => {
    setSelectedGallerySection(section);
    setStudioFlowPage("gallery-section");
  };

  const handleOpenVerticalList = (title = "Available Classes", backPage = studioFlowPage) => {
    setVerticalListTitle(title);
    setVerticalListBackPage(backPage);
    setStudioFlowPage("vertical-list");
  };

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setStudioFlowPage("article");
  };

  const handleOpenSubscription = () => {
    setStudioFlowPage("subs-plans");
  };

  const handleStartReservation = (selection) => {
    const studio = selection.studio || selection;
    setSelectedStudio(studio);
    setReservationDraft({
      studio,
      className: selection.className || studio.classes[0],
      dateLabel: selection.dateLabel || selection.selectedDate || "Tue, Aug 12, 2025",
      time: selection.time || selection.selectedTime || "6:00 PM - 7:30 PM",
      level: selection.level || "Intermediate",
      instructor: selection.instructor || "Ben Parker"
    });
    setStudioFlowPage("time");
  };

  const handleConfirmReservation = () => {
    const booking = reservationDraft || {
      studio: selectedStudio,
      className: selectedStudio.classes[0],
      dateLabel: "Tue, Aug 12, 2025",
      time: "6:00 PM - 7:30 PM",
      level: "Intermediate",
      instructor: "Ben Parker"
    };
    const activityBooking = {
      ...booking.studio,
      className: booking.className,
      selectedDate: booking.dateLabel,
      selectedTime: booking.time,
      level: booking.level,
      instructor: booking.instructor,
      reservation: booking
    };
    setReservationDraft(booking);
    setActiveBooking(activityBooking);
    setCredits((current) => Math.max(0, current - booking.studio.credits));
    setCheckInStatus("reserved");
    setStudioFlowPage("booked");
    showToast("Reservation confirmed. E-ticket is ready.");
  };

  const handleReviewSubmit = () => {
    setReviewOpen(false);
    setSnapOpen(true);
    showToast("Review saved. Create your verified flex.");
  };

  const handleShare = ({ image, sticker, caption, booking }) => {
    const newPost = {
      id: `post-${Date.now()}`,
      user: "Ed Wellness",
      status: "DUDO FLEX",
      headline: caption,
      meta: `${booking.name} · Just now`,
      image,
      stats: [sticker, `${booking.credits} credits`, "Verified"],
      liked: false,
      saved: false
    };
    setPosts((current) => [newPost, ...current]);
    setSnapOpen(false);
    setActiveTab("Community");
    showToast("Shared to Community. Flywheel loop complete.");
  };

  const handlePublishActivityPost = (booking, caption) => {
    const newPost = {
      id: `post-${Date.now()}`,
      user: "Ed Wellness",
      status: "TRACKED",
      headline: caption,
      meta: `${booking.name || booking.studio?.name || "DUDO Activity"} · Just now`,
      image: booking.image || booking.studio?.image || studios[1].image,
      stats: ["5.21 km", "5'42 pace", "Verified"],
      liked: false,
      saved: false
    };
    setPosts((current) => [newPost, ...current]);
    setStudioFlowPage(null);
    setActiveTab("Community");
    showToast("Post published to Community.");
  };

  const handleCompleteOnboarding = (tab = "Home") => {
    setOnboardingDone(true);
    setActiveTab(tab);
    setStudioFlowPage(null);
    showToast("Welcome to DUDO.");
  };

  const bookingForModals = activeBooking || studios[0];
  const showStudioFlow = Boolean(studioFlowPage);
  const screenKey = studioFlowPage || activeTab;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [screenKey]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && studioFlowPage && !filterOpen && !reviewOpen && !snapOpen) {
        goBackFromFlow();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [studioFlowPage, filterOpen, reviewOpen, snapOpen, verticalListBackPage]);

  return (
    <div className="h-[100dvh] bg-[#F9FAFB] sm:bg-[#06074A] flex justify-center overflow-hidden">
      <div className="app-shell mx-auto bg-[#F9FAFB] shadow-sys-lg relative">
        <StatusBar />
        {!onboardingDone && (
          <div className="app-screen">
            <Onboarding onComplete={handleCompleteOnboarding} />
          </div>
        )}
        {onboardingDone && (
        <div
          key={screenKey}
          className={`app-screen ${swipingBack ? "is-edge-swiping" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
        {showStudioFlow && <div className="edge-swipe-affordance" aria-hidden="true"><span></span></div>}
        {studioFlowPage === "detail" && (
          <StudioDetail
            studio={selectedStudio}
            onBack={() => setStudioFlowPage(null)}
            onStartReservation={handleStartReservation}
            onOpenClass={handleOpenClass}
            onOpenReview={() => setStudioFlowPage("review")}
            onOpenGallery={handleOpenGallery}
            onOpenGallerySection={handleOpenGallerySection}
            onOpenVerticalList={handleOpenVerticalList}
            onOpenStudio={handleOpenStudio}
            favorite={favorites.includes(selectedStudio.id)}
            onFavorite={handleFavorite}
          />
        )}
        {studioFlowPage === "class-detail" && (
          <ClassDetail
            studio={selectedClass.studio}
            className={selectedClass.className}
            onBack={() => setStudioFlowPage("detail")}
            onStartReservation={handleStartReservation}
            onOpenStudio={handleOpenStudio}
            onOpenReview={() => setStudioFlowPage("review")}
            onOpenGallery={handleOpenGallery}
            onOpenGallerySection={handleOpenGallerySection}
            onOpenVerticalList={handleOpenVerticalList}
          />
        )}
        {studioFlowPage === "review" && (
          <StudioReview
            studio={selectedStudio}
            onBack={() => setStudioFlowPage("detail")}
          />
        )}
        {studioFlowPage === "gallery" && (
          <StudioGallery
            studio={selectedStudio}
            onBack={() => setStudioFlowPage("detail")}
            onOpenReview={() => setStudioFlowPage("review")}
            onOpenSection={handleOpenGallerySection}
          />
        )}
        {studioFlowPage === "gallery-section" && (
          <GallerySection
            studio={selectedStudio}
            section={selectedGallerySection}
            onBack={() => setStudioFlowPage("gallery")}
          />
        )}
        {studioFlowPage === "vertical-list" && (
          <VerticalListPage
            title={verticalListTitle}
            studios={studios}
            favorites={favorites}
            onFavorite={handleFavorite}
            onBack={() => setStudioFlowPage(verticalListBackPage)}
            onOpenStudio={handleOpenStudio}
            onOpenClass={handleOpenClass}
            onOpenFilter={() => setFilterOpen(true)}
          />
        )}
        {studioFlowPage === "activity-history" && (
          <ActivityHistory
            onBack={() => setStudioFlowPage(null)}
            onOpenDetail={(activity) => {
              setSelectedActivity(activity);
              setStudioFlowPage("activity-detail");
            }}
          />
        )}
        {studioFlowPage === "activity-detail" && (
          <ActivityDetail
            activity={selectedActivity}
            onBack={() => setStudioFlowPage("activity-history")}
            onOpenVerticalList={(title) => handleOpenVerticalList(title, "activity-detail")}
          />
        )}
        {studioFlowPage === "personal-dashboard" && (
          <PersonalDashboard
            onBack={() => setStudioFlowPage(null)}
            onOpenStudio={handleOpenStudio}
            onOpenVerticalList={(title) => handleOpenVerticalList(title, "personal-dashboard")}
          />
        )}
        {studioFlowPage === "tracking-start" && (
          <TrackingStart
            onBack={() => setStudioFlowPage(null)}
            onStartSport={() => setStudioFlowPage("live-tracking")}
            onBookedCheckIn={() => setStudioFlowPage("checkin")}
            onRecoveryLogged={() => {
              setCheckInStatus("completed");
              setStudioFlowPage("activity-detail");
              showToast("Recovery logged.");
            }}
          />
        )}
        {studioFlowPage === "live-tracking" && (
          <LiveTracking
            onBack={() => setStudioFlowPage("tracking-start")}
            onComplete={() => {
              setCheckInStatus("completed");
              setStudioFlowPage("activity-detail");
              showToast("Workout tracked and saved.");
            }}
          />
        )}
        {studioFlowPage === "activity-post" && (
          <ActivityPostFlow
            booking={activeBooking || selectedStudio}
            onBack={() => setStudioFlowPage(null)}
            onPublish={handlePublishActivityPost}
          />
        )}
        {studioFlowPage === "time" && (
          <ReservationTimeSpot
            studio={selectedStudio}
            draft={reservationDraft || {}}
            onBack={() => setStudioFlowPage("detail")}
            onContinue={(draft) => {
              setReservationDraft(draft);
              setStudioFlowPage("confirm");
            }}
          />
        )}
        {studioFlowPage === "confirm" && (
          <ReservationReviewConfirm
            booking={reservationDraft}
            credits={credits}
            onBack={() => setStudioFlowPage("time")}
            onConfirm={handleConfirmReservation}
          />
        )}
        {studioFlowPage === "booked" && (
          <BookingConfirmed
            booking={reservationDraft}
            onViewActivity={() => {
              setStudioFlowPage(null);
              setActiveTab("Activity");
            }}
            onAddCalendar={() => showToast("Calendar hold added for this demo.")}
          />
        )}
        {studioFlowPage === "checkin" && (
          <CheckInQR
            booking={reservationDraft || activeBooking?.reservation || {
              studio: selectedStudio,
              className: selectedStudio.classes[0],
              dateLabel: "Tue, Aug 12, 2025",
              time: "6:00 PM - 7:30 PM"
            }}
            onBack={() => {
              setStudioFlowPage(null);
              setActiveTab("Activity");
            }}
            onVerified={() => {
              setCheckInStatus("completed");
              setStudioFlowPage("success");
            }}
          />
        )}
        {studioFlowPage === "success" && (
          <CheckInSuccess
            booking={reservationDraft || activeBooking?.reservation}
            onViewActivity={() => {
              setStudioFlowPage(null);
              setActiveTab("Activity");
            }}
            onShareFlex={() => {
              setStudioFlowPage(null);
              setSnapOpen(true);
            }}
          />
        )}
        {studioFlowPage === "article" && (
          <UserReviewArticle
            article={selectedArticle}
            onBack={() => setStudioFlowPage(null)}
            onOpenStudio={handleOpenStudio}
            onBook={handleOpenStudio}
          />
        )}
        {studioFlowPage === "subs-plans" && (
          <SubscriptionPlans
            currentPlan={subscriptionPlan}
            onBack={() => setStudioFlowPage(null)}
            onContinue={(plan) => {
              setSubscriptionPlan(plan);
              setStudioFlowPage("subs-addons");
            }}
          />
        )}
        {studioFlowPage === "subs-addons" && (
          <SubscriptionAddOns
            selectedPlan={subscriptionPlan}
            selectedAddOns={subscriptionAddOns}
            onBack={() => setStudioFlowPage("subs-plans")}
            onContinue={(addons) => {
              setSubscriptionAddOns(addons);
              setStudioFlowPage("subs-checkout");
            }}
          />
        )}
        {studioFlowPage === "subs-checkout" && (
          <SubscriptionCheckout
            plan={subscriptionPlan}
            addOns={subscriptionAddOns}
            onBack={() => setStudioFlowPage("subs-addons")}
            onProceed={(checkout) => {
              setSubscriptionCheckout(checkout);
              setStudioFlowPage("subs-payment");
            }}
          />
        )}
        {studioFlowPage === "subs-payment" && (
          <SubscriptionPayment
            plan={subscriptionPlan}
            addOns={subscriptionAddOns}
            checkout={subscriptionCheckout}
            onBack={() => setStudioFlowPage("subs-checkout")}
            onComplete={() => {
              setSubscription({ active: true, plan: subscriptionPlan, addOns: subscriptionAddOns, checkout: subscriptionCheckout });
              setCredits((current) => Math.max(current, subscriptionPlan.credits));
              setStudioFlowPage("subs-success");
              showToast("Subscription activated.");
            }}
          />
        )}
        {studioFlowPage === "subs-success" && (
          <SubscriptionSuccess
            plan={subscriptionPlan}
            addOns={subscriptionAddOns}
            checkout={subscriptionCheckout}
            onGoHome={() => {
              setStudioFlowPage(null);
              setActiveTab("Home");
            }}
          />
        )}
        {!showStudioFlow && activeTab === "Home" && (
          <Home
            credits={credits}
            activeBooking={activeBooking}
            onNavigate={handleNavigate}
            onBook={handleOpenStudio}
            onOpenStudio={handleOpenStudio}
            onOpenClass={handleOpenClass}
            onOpenVerticalList={(title) => handleOpenVerticalList(title, null)}
            onOpenFilter={() => setFilterOpen(true)}
            onFavorite={handleFavorite}
            favorites={favorites}
          />
        )}
        {!showStudioFlow && activeTab === "Discovery" && (
          <Discovery
            onBook={handleOpenStudio}
            onNavigate={handleNavigate}
            onOpenStudio={handleOpenStudio}
            onOpenArticle={handleOpenArticle}
            onOpenVerticalList={(title) => handleOpenVerticalList(title, null)}
            onOpenFilter={() => setFilterOpen(true)}
            favorites={favorites}
            onFavorite={handleFavorite}
          />
        )}
        {!showStudioFlow && activeTab === "Activity" && (
          <Activity
            activeBooking={activeBooking}
            checkInStatus={checkInStatus}
            setCheckInStatus={setCheckInStatus}
            onOpenReview={() => setReviewOpen(true)}
            onOpenSnap={() => setSnapOpen(true)}
            onOpenCheckIn={() => setStudioFlowPage("checkin")}
            onOpenHistory={() => setStudioFlowPage("activity-history")}
            onOpenDashboard={() => setStudioFlowPage("personal-dashboard")}
            onOpenTrack={() => setStudioFlowPage("tracking-start")}
            onOpenPost={() => setStudioFlowPage("activity-post")}
            onOpenVerticalList={(title) => handleOpenVerticalList(title, null)}
            onNavigate={handleNavigate}
          />
        )}
        {!showStudioFlow && activeTab === "Community" && <Community posts={posts} setPosts={setPosts} onBook={handleOpenStudio} />}
        {!showStudioFlow && activeTab === "Profile" && (
          <Profile
            credits={credits}
            setCredits={setCredits}
            subscription={subscription}
            onOpenSubscription={handleOpenSubscription}
          />
        )}
        </div>
        )}
      </div>
      {onboardingDone && !showStudioFlow && <BottomNav activeTab={activeTab} setActiveTab={handleNavigate} />}
      <FilterSheet
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={() => showToast("Filters applied to this view.")}
      />
      {reviewOpen && <RatingReviewModal booking={bookingForModals} onClose={() => setReviewOpen(false)} onSubmit={handleReviewSubmit} />}
      {snapOpen && <SnapShareStudio booking={bookingForModals} onClose={() => setSnapOpen(false)} onShare={handleShare} />}
      <Toast message={toast} />
      <div className="home-indicator" aria-hidden="true"></div>
    </div>
  );
}
