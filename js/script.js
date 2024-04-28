// ハンバーガーメニュー
jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// jQuery(".drawer-content__link").on("click", function() {
//   jQuery("#js-drawer-icon").removeClass("is-checked");
//   jQuery("#js-drawer-content").removeClass("is-checked");
// });


// Q&Aのaccordion
jQuery(".js-accordion").on("click", function(e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }

});

// swiper
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 85,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// aboutのモーダルウィンドウ
jQuery(".js-modal-open").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-about-modal")[0].showModal();
});

jQuery(".js-modal-close").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-about-modal")[0].close();
});

// スムーススクロール
jQuery('a[href^="#"]').on("click", function(e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or linear
  );
});

// ドロワーメニュー（スマホサイズ時）のスムーススクロール
jQuery('#js-drawer-content a[href^="#"]').on("click", function(e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// トップへ戻るボタンが少しスクロールされるとフワッと表示される
jQuery(window).on("scroll", function() {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

// スクロールした時、要素をフワッと浮かび上がらせ表示させるアニメーション（ライブラリ不使用）
// IntersectionObserver実装例

// 1回表示されたらアニメーション終わりバージョン
const intersectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // その表示領域に入ったら繰り返しアニメーションさせたい時は下記を追加する
      // entry.target.classList.remove("is-in-view");
    }
  })
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem) {
  intersectionObserver.observe(inViewItem);
});
