/**
* Template Name: Yummy
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  // flower();

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  let infoItems = document.getElementsByClassName('info-item');
  // infoItems.forEach(item => {
  //   let targetLink = "";
  //   console.log(item);
  // })
    for(let i = 0; i < infoItems.length; i++) {
      let item = infoItems[i];
      let target = item.getAttribute('target');
      if(target) {
        item.addEventListener('click', () => {
          window.open(target, "_blank");
        })
      }
    }

  function aos_init() {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


const flower = () => {
  const branchesRandomOrder = $('[id^=BranchGroup]').toArray().sort(function(){return 0.5-Math.random()});
const branchesRandomOrderLeft = $('[id^=BranchGroup-left]').toArray().sort(function(){return 0.5-Math.random()});
const branchesRandomOrderRight = $('[id^=BranchGroup-right]').toArray().sort(function(){return 0.5-Math.random()});
const branchesRandomOrderBottom = $('[id^=BranchGroup-bottom]').toArray().sort(function(){return 0.5-Math.random()});

// MASTER TIMELINE
const master = new TimelineMax();
master
.add(mainSetUp)
.add(branchMaster);


function mainSetUp() {
  const tl = new TimelineMax();
  tl
  .set('[id^=petal-]', { fill: "#e5d081" })
  .set(['[id^=flower-]', '[id^=bud-]', '[id^=bloom-]'], {scale: 0,  transformOrigin: 'center center'})
  .set(branchesRandomOrderLeft, {transformOrigin: 'bottom left'})
  .set(branchesRandomOrderRight, {transformOrigin: 'bottom right'})
  .set(branchesRandomOrderBottom, {transformOrigin: 'bottom center'})
  .set('#BranchGroup-left-1', {transformOrigin: '0% 20%'})
  .set('#BranchGroup-right-16', {transformOrigin: '100% 20%'})
  .set(branchesRandomOrder, {scale: 0})
  .set(".blossom-container", {autoAlpha: 1});
  
  return tl;
}

function branchMaster() {
  const tl = new TimelineMax();
  tl
    .add(wholeBranchGrowIn)
    .add(smallBranchesSway);
  
  return tl;
}

function wholeBranchGrowIn() {
  const tl = new TimelineMax();
  tl.staggerTo(branchesRandomOrder, 3, {scale: 1, ease: Power1.easeOut, onStart: flowersBloom, onComplete: currentBranchSwaying }, 0.25);
 
  return tl;
}

function flowersBloom() {
  const tl = new TimelineMax({delay: 1.5});
  const currentBranch = $(this.target);
  const petals = currentBranch.find('[id^=petal-]');
  const flowers = currentBranch.find('[id^=flower-]');
  const buds = currentBranch.find('[id^=bud-]');
  const blooms = currentBranch.find('[id^=bloom-]');

  tl
    .staggerTo([flowers, buds, blooms], 2,{ scale: 1, ease: Back.easeOut.config(2) }, 0.5, 0)
    .to(flowers, 3, { rotation: 45, ease: Sine.easeOut }, 0)
    .to(petals, 1, { fill: "#fff" }, 0)

  return tl;
}

function currentBranchSwaying() {
  const tl = new TimelineMax({yoyo: true, repeat: -1});
  const currentBranch = $(this.target);
  var currentBranchRotation = (currentBranch.data('position') === "left") ? -10 : 
  (currentBranch.data('position') === "right") ? 5 : 10;
  
  tl.staggerTo(currentBranch, 2 + Math.random(), {rotation: currentBranchRotation, ease: Sine.easeInOut}, Math.random() / 1.2);

  return tl;  
}


function smallBranchesSway() {
  const smallBranches = $('[id^=smallbranch-group]').toArray();
  const tl = new TimelineMax({yoyo: true, repeat: -1});
  
  tl
  .staggerTo(smallBranches, 2 + Math.random(), { rotation: 5, ease: Sine.easeInOut}, Math.random() / 1.2, 'smallBranchSway')
  .to('#smallbranch-group-3-B, #smallbranch-group-8-A', 1 + Math.random(), {rotation: -5, transformOrigin: '100% 50%'}, 'smallBranchSway')
  .to('#smallbranch-group-5-A', 2 + Math.random(), {rotation: -5, transformOrigin: '50% 100%'}, 'smallBranchSway')
  .to('#smallbranch-group-2-C, #smallbranch-group-A, #smallbranch-group-12-A', 2 + Math.random(), {rotation: -5, transformOrigin: '100% 100%'}, 'smallBranchSway');
  
  return tl;
}

}
