console.log("V1.125");

//----PAGE TRANSITION FUNCTIONALITY----

/// Initialize Swup
const swup = new Swup();

// Listen for content replaced event
swup.hooks.on('content:replace', () => {
  // Get the current pathname of the URL
  const pathname = window.location.pathname;

  showCal();
  // Check if the pathname should have a transparent background
  if (isTransparentBg(pathname)) {
    // Run your function here
    navTransparent();
  } else {
    navWhite();
  }
});



//----NAVIGATION FUNCTIONALITY----

// Function to check if the current URL should have a transparent background
function isTransparentBg(pathname) {
  const transparentSlugs = ['/', '', '/about/beliefs']; // Add more slugs here as needed
  return transparentSlugs.includes(pathname);
}

// Function to apply the transparent navigation styles
function navTransparent() {
  // Select the elements
  const containerBlurs = document.querySelectorAll('.container__blur');
  const mainContainerBlurs = document.querySelectorAll('.container__blur.is--main');
  const buttons = document.querySelectorAll('.button.is--nav');
  const logoLarge = document.querySelectorAll('.logo.is--large');
  const logoWhite = document.querySelectorAll('.logo.is--white');
  const dropdownTexts = document.querySelectorAll('.button--text.is--dropdown');
  const bannerContainers = document.querySelectorAll('.banner__container.is--default');
  const bannerContents = document.querySelectorAll('.banner__content');
  const menuIcons = document.querySelectorAll('.menu__icon');

  // Apply filter styles to invert colors
  if (containerBlurs) {
    containerBlurs.forEach((containerBlur) => {
      containerBlur.style.filter = 'invert(93%)';
    });
  }

  // Apply opacity styles with a slight delay
  if (mainContainerBlurs) {
    mainContainerBlurs.forEach((containerBlur) => {
      if (isTransparentBg(window.location.pathname)) {
        containerBlur.style.transition = 'none';
        containerBlur.style.opacity = '0';
      } else {
        containerBlur.style.transition = 'opacity 0.2s ease';
        setTimeout(() => {
          containerBlur.style.opacity = '0';
        }, 10);
      }
    });
  }

  // Hide the large logo and show the white logo using CSS classes
  if (logoLarge) {
    logoLarge.forEach((logo) => {
      logo.classList.add('hidden');
      logo.classList.remove('visible');
    });
  }

  if (logoWhite) {
    logoWhite.forEach((logo) => {
      logo.classList.add('visible');
      logo.classList.remove('hidden');
    });
  }

  // Invert and increase brightness of buttons
  if (buttons) {
    buttons.forEach((button) => {
      button.style.transition = isTransparentBg(window.location.pathname) ? 'none' : 'filter 0.2s ease';
      button.style.filter = 'invert(100%) brightness(200%)';
    });
  }

  // Invert and increase brightness of dropdown texts
  if (dropdownTexts) {
    dropdownTexts.forEach((dropdownText) => {
      dropdownText.style.transition = isTransparentBg(window.location.pathname) ? 'none' : 'filter 0.2s ease';
      dropdownText.style.filter = 'invert(100%)';
    });
  }

  // Invert banner container with transition
  if (bannerContainers) {
    bannerContainers.forEach((bannerContainer) => {
      bannerContainer.style.transition = 'filter 0.3s ease';
      bannerContainer.style.filter = 'invert(95%)';
    });
  }

  // Decrease brightness of banner content with transition
  if (bannerContents) {
    bannerContents.forEach((bannerContent) => {
      bannerContent.style.transition = 'filter 0.3s ease';
      bannerContent.style.filter = 'brightness(0%)';
    });
  }

  // Invert menu icons with transition
  if (menuIcons) {
    menuIcons.forEach((menuIcon) => {
      menuIcon.style.transition = 'filter 0.3s ease';
      menuIcon.style.filter = 'invert(100%)';
    });
  }
}

// Function to change nav back to default white
function navWhite() {
  // Select the elements
  const containerBlurs = document.querySelectorAll('.container__blur');
  const mainContainerBlurs = document.querySelectorAll('.container__blur.is--main');
  const buttons = document.querySelectorAll('.button.is--nav');
  const logoLarge = document.querySelectorAll('.logo.is--large');
  const logoWhite = document.querySelectorAll('.logo.is--white');
  const dropdownTexts = document.querySelectorAll('.button--text.is--dropdown');
  const bannerContainers = document.querySelectorAll('.banner__container.is--default');
  const bannerContents = document.querySelectorAll('.banner__content');
  const menuIcons = document.querySelectorAll('.menu__icon');

  // Reset filter styles
  if (containerBlurs) {
    containerBlurs.forEach((containerBlur) => {
      containerBlur.style.filter = 'invert(0)';
    });
  }

  // Reset opacity styles
  if (mainContainerBlurs) {
    mainContainerBlurs.forEach((containerBlur) => {
      containerBlur.style.transition = 'opacity 0.2s ease';

      // Delay opacity reset by 0.1 seconds
      setTimeout(() => {
        containerBlur.style.opacity = '1';
      }, 50);
    });
  }

  // Show the large logo and hide the white logo using CSS classes
  if (logoLarge) {
    logoLarge.forEach((logo) => {
      logo.classList.add('visible');
      logo.classList.remove('hidden');
    });
  }

  if (logoWhite) {
    logoWhite.forEach((logo) => {
      logo.classList.add('hidden');
      logo.classList.remove('visible');
    });
  }

  // Reset buttons
  if (buttons) {
    buttons.forEach((button) => {
      button.style.transition = 'filter 0.2s ease';
      button.style.filter = 'invert(0) brightness(100%)';
    });
  }

  // Reset dropdown texts
  if (dropdownTexts) {
    dropdownTexts.forEach((dropdownText) => {
      dropdownText.style.transition = 'filter 0.2s ease';
      dropdownText.style.filter = 'invert(0) brightness(100%)';
    });
  }

  // Reset banner container with transition
  if (bannerContainers) {
    bannerContainers.forEach((bannerContainer) => {
      bannerContainer.style.transition = 'filter 0.3s ease';
      bannerContainer.style.filter = 'invert(0)';
    });
  }

  // Reset brightness of banner content with transition
  if (bannerContents) {
    bannerContents.forEach((bannerContent) => {
      bannerContent.style.transition = 'filter 0.3s ease';
      bannerContent.style.filter = 'brightness(100%)';
    });
  }

  // Reset menu icons with transition
  if (menuIcons) {
    menuIcons.forEach((menuIcon) => {
      menuIcon.style.transition = 'filter 0.3s ease';
      menuIcon.style.filter = 'invert(0)';
    });
  }
}

// Function to shrink the navigation
function navShrink() {
  // Select the elements
  const primaryContainers = document.querySelectorAll('.primary__container');
  const navBanners = document.querySelectorAll('.nav__banner');
  const logoLarge = document.querySelectorAll('.logo__large');
  const logoSmall = document.querySelectorAll('.logo__small');

  // Decrease height of primary container on devices greater than 479px
  if (primaryContainers) {
    primaryContainers.forEach((container) => {
      if (window.innerWidth > 479) {
        container.style.height = '70px';
        container.style.transition = 'height 0.3s ease';
      }
    });
  }

  // Decrease height of nav banner
  if (navBanners) {
    navBanners.forEach((banner) => {
      banner.style.height = '0px';
      banner.style.transition = 'height 0.3s ease';
    });
  }

  // Hide large logos and show small logos using CSS classes
  if (logoLarge) {
    logoLarge.forEach((logo) => {
      logo.classList.add('hidden');
      logo.classList.remove('visible');
    });
  }

  if (logoSmall) {
    logoSmall.forEach((logo) => {
      logo.classList.add('visible');
      logo.classList.remove('hidden');
    });
  }

  // If homepage, fire navWhite() when scrolled past 200px
  if (isTransparentBg(window.location.pathname)) {
    navWhite();
  }
}

// Function to expand the navigation
function navExpand() {
  // Select the elements
  const primaryContainers = document.querySelectorAll('.primary__container');
  const navBanners = document.querySelectorAll('.nav__banner');
  const logoLarge = document.querySelectorAll('.logo__large');
  const logoSmall = document.querySelectorAll('.logo__small');

  // Increase height of primary container on devices greater than 479px
  if (primaryContainers) {
    primaryContainers.forEach((container) => {
      if (window.innerWidth > 479) {
        container.style.height = '100px';
        container.style.transition = 'height 0.3s ease';
      }
    });
  }

  // Increase height of nav banner
  if (navBanners) {
    navBanners.forEach((banner) => {
      banner.style.height = '40px';
      banner.style.transition = 'height 0.3s ease';
    });
  }

  // Show large logos and hide small logos using CSS classes
  if (logoLarge) {
    logoLarge.forEach((logo) => {
      logo.classList.add('visible');
      logo.classList.remove('hidden');
    });
  }

  if (logoSmall) {
    logoSmall.forEach((logo) => {
      logo.classList.add('hidden');
      logo.classList.remove('visible');
    });
  }

  // If homepage, fire navTransparent() when scrolled less than 200px
  if (isTransparentBg(window.location.pathname)) {
    navTransparent();
  }
}

// Event listener to handle scroll event
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    navShrink();
  } else {
    navExpand();
  }
});

// Ensure navTransparent is called on initial load if it's the homepage
document.addEventListener('DOMContentLoaded', function () {
  if (isTransparentBg(window.location.pathname)) {
    navTransparent();
  }
});

// Scroll Enable/Disable

let scrollPos = 0;

function scrollDisable() {
  document.body.classList.add('scroll--disabled');
  scrollPos = window.scrollY;
}

function scrollEnable() {
  document.body.classList.remove('scroll--disabled');
  window.scrollTo(0, scrollPos);
}

document.getElementById('menu-open').addEventListener('click', function () {
  scrollDisable();
});

document.getElementById('menu-close').addEventListener('click', function () {
  scrollEnable();
  setTimeout(function () {
    document.getElementById('subpage-1').scrollTop = 0;
    document.getElementById('subpage-2').scrollTop = 0;
  }, 500);
});

document.getElementById('return-1').addEventListener('click', function () {
  setTimeout(function () {
    document.getElementById('subpage-1').scrollTop = 0;
  }, 250);
});

document.getElementById('return-2').addEventListener('click', function () {
  setTimeout(function () {
    document.getElementById('subpage-2').scrollTop = 0;
  }, 250);
});

// Close nav menu if device width is greater than 479px

var previousWindowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

window.addEventListener('resize', function () {
  var currentWindowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (previousWindowWidth < 479 && currentWindowWidth >= 479) {
    document.getElementById('menu-close').click();
  }

  // Update the previous window width
  previousWindowWidth = currentWindowWidth;
});










//----ACCORDION FUNCTIONALITY----

document.addEventListener('DOMContentLoaded', () => {
  const initializeAccordions = () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion__item');

      items.forEach(item => {
        const title = item.querySelector('.accordion__title');
        const content = item.querySelector('.accordion__content');
        const plusIcon = item.querySelector('.accordion__plus');
        const minusIcon = item.querySelector('.accordion__minus');

        // Initially hide all content and show plus icons
        content.style.height = '0';
        content.style.overflow = 'hidden';
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';

        // Add click event to the title
        title.addEventListener('click', () => {
          // Close all other items
          items.forEach(otherItem => {
            if (otherItem !== item) {
              const otherContent = otherItem.querySelector('.accordion__content');
              const otherPlusIcon = otherItem.querySelector('.accordion__plus');
              const otherMinusIcon = otherItem.querySelector('.accordion__minus');

              // Trigger the height transition for closing
              if (otherContent.style.height !== '0px') {
                otherContent.style.height = otherContent.scrollHeight + 'px'; // Set to scrollHeight to trigger the transition
                setTimeout(() => {
                  otherContent.style.height = '0';
                }, 10); // Slight delay to ensure the height change is registered
                otherPlusIcon.style.display = 'block';
                otherMinusIcon.style.display = 'none';
              }
            }
          });

          // Toggle the clicked item
          if (content.style.height === '0px' || content.style.height === '') {
            content.style.height = content.scrollHeight + 'px';
            content.addEventListener('transitionend', () => {
              if (content.style.height !== '0px') {
                content.style.height = 'auto';
              }
            }, { once: true });
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
          } else {
            content.style.height = content.scrollHeight + 'px'; // Set to scrollHeight to trigger the transition
            setTimeout(() => {
              content.style.height = '0';
            }, 10); // Slight delay to ensure the height change is registered
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
          }
        });
      });
    });
  };

  // Initialize accordions on DOMContentLoaded
  initializeAccordions();

  // Swup event listener to reinitialize accordions on page transition
  swup.hooks.on('content:replace', initializeAccordions);
});




//----CALENDAR INTEGRATION----
let calendars = []; // Array to store multiple calendar instances

function showCal() {
  console.log("showCal called");

  var calendarEls = document.querySelectorAll('.calendar'); // Use a class selector to get all calendar elements
  console.log("Found calendar elements: ", calendarEls.length);

  calendars.forEach(calendar => calendar.destroy()); // Destroy any existing calendars
  calendars = []; // Reset the calendar instances array

  const events = getEvents();
  console.log({ events });

  calendarEls.forEach(calendarEl => {
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'listThreeMonth', // Set the custom 3-month list view as the default
      headerToolbar: {
        left: 'listThreeMonth,dayGridMonth', // List and Calendar buttons are left aligned
        center: 'title', // Title is centered
        right: 'prev,next today' // Navigation buttons are right aligned
      },
      views: {
        listThreeMonth: {
          type: 'list',
          duration: { months: 3 }, // Set the duration to 3 months
          buttonText: 'List View'
        },
        dayGridMonth: {
          buttonText: 'Calendar'
        }
      },
      height: 'auto', // Adjust the calendar height based on the content
      events: events,
      eventTimeFormat: { // Specify time format for events
        hour: '2-digit',
        minute: '2-digit',
        meridiem: 'short' // Use 12-hour format with AM/PM
      },
      eventClick: function (data) {
        alert(`User clicked the event ${data.event.title}`);
      }
    });

    calendar.render();
    calendars.push(calendar); // Store the calendar instance
    console.log("Calendar initialized and rendered");
  });
}

// Function to get events from the Webflow CMS
function getEvents() {
  const scripts = document.querySelectorAll('[data-element="event-data"]');
  const events = Array.prototype.slice.call(scripts).map(function (script) {
    try {
      const event = JSON.parse(script.textContent.trim());
      event.start = new Date(event.start); // Ensure start time is parsed as a Date object
      event.end = new Date(event.end); // Ensure end time is parsed as a Date object

      console.log("Parsed event start:", event.start);
      console.log("Parsed event end:", event.end);

      // Set event color based on the type
      switch (event.type) {
        case 'Regular or recurring':
          event.color = '#F4C449';
          break;
        case 'Special on-site':
          event.color = '#24C150';
          break;
        case 'Special off-site':
          event.color = '#9974C9';
          break;
        default:
          event.color = '#3788d8'; // Default color if type is not recognized
      }

      return event;
    } catch (error) {
      console.error('Error parsing event data:', script.textContent, error);
      return null; // or handle error appropriately
    }
  }).filter(event => event !== null); // Filter out null values resulting from parse errors

  return events;
}

// Initial call to render the calendars on first page load
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded event fired");
  showCal(); 
});

// Use Swup hooks to re-initialize the calendars after content is replaced
swup.hooks.on('content:replace', function() {
  console.log("Swup content replaced");
  showCal();
});






//----ARROW FUNCTIONALITY FOR MINISTRY NAV BAR----

// Function to initialize the scroll arrows and scroll to current page link
function initializeScrollArrowsAndScrollToCurrent() {
  const ministryNav = document.querySelector(".ministry__nav");
  const ministryContainer = document.querySelector(".ministry__container");
  const ministryOptions = document.querySelector(".ministry__options");
  const currentNavLink = document.querySelector(".ministry__options .current"); // Adjust this selector as per your HTML structure
  const leftArrow = document.querySelector(".ministry__arrows.is--left");
  const rightArrow = document.querySelector(".ministry__arrows.is--right");

  // Function to calculate scroll amount based on screen width
  function getScrollAmount() {
    return window.innerWidth >= 768 ? ministryContainer.offsetWidth * 2 : 75; // Adjust breakpoint and scroll amounts as needed
  }

  function updateArrows() {
    const containerWidth = ministryContainer.offsetWidth;
    const optionsWidth = ministryOptions.scrollWidth;
    const scrollLeft = ministryContainer.scrollLeft;

    if (containerWidth < optionsWidth) {
      rightArrow.style.display = "flex"; // Display as flex
      if (scrollLeft > 0) {
        leftArrow.style.display = "flex"; // Display as flex
      } else {
        leftArrow.style.display = "none";
      }

      // Check if scrolled to the end
      if (scrollLeft + containerWidth >= optionsWidth) {
        // Use CSS transition for fade effect
        rightArrow.style.opacity = 0;
        rightArrow.style.pointerEvents = "none"; // Disable click events
      } else {
        rightArrow.style.opacity = 1;
        rightArrow.style.pointerEvents = "auto"; // Enable click events
      }
    } else {
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
    }
  }

  function scrollContainer(direction) {
    const currentScrollLeft = ministryContainer.scrollLeft;
    const scrollAmount = getScrollAmount();

    let newScrollLeft;

    if (direction === 'left') {
      newScrollLeft = Math.max(0, currentScrollLeft - scrollAmount);
    } else {
      newScrollLeft = Math.min(ministryContainer.scrollWidth, currentScrollLeft + scrollAmount);
    }

    ministryContainer.scrollTo({
      top: 0,
      left: newScrollLeft,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }

  // Function to scroll to current nav link
  function scrollToCurrentNavLink() {
    if (currentNavLink) {
      const navLinkRect = currentNavLink.getBoundingClientRect();
      const navContainerRect = ministryContainer.getBoundingClientRect();
      const scrollLeft = ministryContainer.scrollLeft;

      // Check if current nav link is outside the view to the right
      if (navLinkRect.right > navContainerRect.right) {
        ministryContainer.scrollTo({
          left: scrollLeft + (navLinkRect.right - navContainerRect.right),
          behavior: 'smooth'
        });
      } else if (navLinkRect.left < navContainerRect.left) {
        // Check if current nav link is outside the view to the left
        ministryContainer.scrollTo({
          left: scrollLeft - (navContainerRect.left - navLinkRect.left),
          behavior: 'smooth'
        });
      }
    }
  }

  leftArrow.addEventListener("click", function() {
    scrollContainer('left');
  });

  rightArrow.addEventListener("click", function() {
    scrollContainer('right');
  });

  // Update arrows on container scroll
  ministryContainer.addEventListener("scroll", updateArrows);

  // Initial check
  updateArrows();

  // Scroll to current nav link after page load or swup navigation
  scrollToCurrentNavLink();
}

// Initialize scroll arrows and scroll to current nav link when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  initializeScrollArrowsAndScrollToCurrent();
});

// Initialize scroll arrows and scroll to current nav link after swup.js page transition
swup.hooks.on('content:replace', function() {
  initializeScrollArrowsAndScrollToCurrent();
});






//---UPDATE CALENDAR EVENT COUNT ON MINISTRY PAGES---

function updateEventCount() {
  // Get the number of elements with class "calendar__item"
  var numberOfEvents = document.getElementsByClassName('calendar__item').length;

  // Create a new div element for displaying the count
  var countElement = document.createElement('div');
  countElement.classList.add('subtitle', 'is--2');

  // Update text content based on number of events
  if (numberOfEvents === 1) {
      countElement.textContent = "1 upcoming event";
  } else {
      countElement.textContent = numberOfEvents + " upcoming events";
  }

  // Select the .ministry__events container
  var ministryEventsContainer = document.querySelector('.ministry__events');

  // Remove any existing count elements (if any)
  var existingCountElement = ministryEventsContainer.querySelector('.subtitle.is--2');
  if (existingCountElement) {
      ministryEventsContainer.removeChild(existingCountElement);
  }

  // Append the count element to the ministryEventsContainer
  ministryEventsContainer.appendChild(countElement);
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initial update on page load
  updateEventCount();
});

// Initialize scroll arrows and scroll to current nav link after swup.js page transition
swup.hooks.on('content:replace', function() {
  updateEventCount();
});



//---ANNOUNCEMENT IMAGE SLIDER---

document.addEventListener("DOMContentLoaded", function() {
  const initSlider = (sliderContainer) => {
    let currentIndex = 0;
    const items = sliderContainer.querySelectorAll('.anc__item');
    const totalItems = items.length;
    const dotsContainer = sliderContainer.querySelector('.anc__dots');
    const nextArrow = sliderContainer.querySelector('.arrow.is--next');
    const prevArrow = sliderContainer.querySelector('.arrow.is--prev');

    function showItem(index) {
      items.forEach((item, i) => {
        item.style.opacity = i === index ? '1' : '0';
        item.style.transition = 'opacity 0.5s ease-in-out';
      });

      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('is--current');
        } else {
          dot.classList.remove('is--current');
        }
      });
    }

    function nextItem() {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    }

    function prevItem() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showItem(currentIndex);
    }

    // Generate dots based on the number of items
    if (totalItems > 1) {
      for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('is--current'); // Make the first dot active
        dotsContainer.appendChild(dot);
      }
    }

    const dots = dotsContainer.querySelectorAll('.dot');

    // Add event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showItem(currentIndex);
      });
    });

    if (nextArrow) nextArrow.addEventListener('click', nextItem);
    if (prevArrow) prevArrow.addEventListener('click', prevItem);

    // Initially show the first item
    showItem(currentIndex);

    // Only show dots and arrows if there is more than one image
    if (totalItems <= 1) {
      dotsContainer.style.display = 'none';
      if (nextArrow) nextArrow.style.display = 'none';
      if (prevArrow) prevArrow.style.display = 'none';
    }
  };

  const initializeSliders = () => {
    const sliderContainers = document.querySelectorAll('.anc__slider');
    sliderContainers.forEach((sliderContainer) => {
      initSlider(sliderContainer);
    });
  };

  // Initialize sliders on initial load
  initializeSliders();

  // Reinitialize sliders on every Swup content replacement
  swup.hooks.on('content:replace', function() {
    initializeSliders();
  });
});