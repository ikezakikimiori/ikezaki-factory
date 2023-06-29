$(function () {
// -----------------------------------------

// footer
    $(document).ready(function() {
    let windowHeight = $(window).height(); // ウィンドウの高さ
    
    // フッターの初期設定（非表示）
    $('.footer').hide();

    // スクロールイベントの監視
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(); // 現在のスクロール位置

        // スクロール位置が100vhを超えた場合にフッターを表示
        if (scrollTop > windowHeight) {
            $('.footer').show();
        } else {
            $('.footer').hide();
        }
    });



    $(document).ready(function() {
    let headerHeight = $('.header').height(); // ヘッダーの高さ
    
    // ヘッダーの初期設定（透明）
    $('.header').css('opacity', 0);

    // スクロールイベントの監視
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(); // 現在のスクロール位置

        // スクロール位置がヘッダーの高さを超えた場合にヘッダーをふわっと表示
        if (scrollTop > headerHeight) {
            $('.header').css('opacity', 1);
        } else {
            $('.header').css('opacity', 0);
        }
    });
});

// -------------------------------------------
// トップページボタン
    
    // フッターの初期設定（非表示）
    $('.page-top').hide();

    // スクロールイベントの監視
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(); // 現在のスクロール位置

        // スクロール位置が100vhを超えた場合にフッターを表示
        if (scrollTop > windowHeight) {
            $('.page-top').show();
        } else {
            $('.page-top').hide();
        }
    });
});
// ------------------------------------------------
// hrader
$(document).ready(function() {
    let header = $('header'); // ヘッダー要素を取得
    let sectionOffset = $('#section-contact').offset().top; // <section id="contact">の位置を取得
    
        $(window).scroll(function() {
        if ($(this).scrollTop() >= sectionOffset) { // スクロール位置が<section id="contact">の位置を超えた場合
            header.hide(); // ヘッダーを非表示にする
        } else {
            header.show(); // ヘッダーを表示する
        }
        });
    });

// ------------------------------------------
// font awsome
    $('.fa-line').hover(function() {
        $(this).addClass('fa-flip');
    }, function() {
        $(this).removeClass('fa-flip');
    });

    $('.fa-twitter').hover(function() {
        $(this).addClass('fa-bounce');
    }, function() {
        $(this).removeClass('fa-bounce');
    });

    $('.fa-instagram').hover(function() {
        $(this).addClass(' fa-spin');
    }, function() {
        $(this).removeClass('fa-spin');
    });

    $('.fa-envelope').hover(function() {
        $(this).addClass(' fa-shake');
    }, function() {
        $(this).removeClass('fa-shake');
    });
    
});

// ここからGSAPアニメーション
//----------------
// top
gsap. fromTo(
    ".main-visual--title", 1,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".main-visual--title",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".top-nav--menu__aguri", 1.2,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".top-nav--menu__aguri",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".top-nav--menu__food", 1.4,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".top-nav--menu__food",
            start: "top bottom",
            // markers: true
        }
    }
);
gsap. fromTo(
    ".top-nav--menu__web", 1.6,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".top-nav--menu__web",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".top-nav--menu__contact", 1.8,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".top-nav--menu__contact",
            start: "top bottom",
            // markers: true
        }
    }
);
// aguri----------------------
gsap. fromTo(
    ".title-aguri", 1,
    {
    x: 25,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".title-aguri",
            start: "top center",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".aguri-article__text", 1,
    {
    x: 25,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".aguri-article__text",
            start: "top center",
            // markers: true
        }
    }
);



// food------------------------

gsap. fromTo(
    ".title-food", 1,
    {
    x: 25,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".title-food",
            start: "top center",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".food-article__text", 1,
    {
    x: 25,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".food-article__text",
            start: "top center",
            // markers: true
        }
    }
);

// gsap. fromTo(
//     ".", 1,
//     {
//     x: -25,
//     opacity: 0,
//     },
//     {x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".",
//             start: "top center",
//             markers: true
//         }
//     }
// );

// gsap. fromTo(
//     ".", 1,
//     {
//     x: -25,
//     opacity: 0,
//     },
//     {x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".",
//             start: "top center",
//             markers: true
//         }
//     }
// );

 //web---------------------
gsap. fromTo(
    ".title-web", 1,
    {
    x: 25,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".title-web",
            start: "top center",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".web-article__text", 1,
    {
    x: 25,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".web-article__text",
            start: "top center",
            // markers: true
        }
    }
);

// gsap. fromTo(
//     ".", 1,
//     {
//     x: -25,
//     opacity: 0,
//     },
//     {x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".",
//             start: "top center",
//             markers: true
//         }
//     }
// );

// gsap. fromTo(
//     ".", 1,
//     {
//     x: -25,
//     opacity: 0,
//     },
//     {x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".",
//             start: "top center",
//             markers: true
//         }
//     }
// );

// contact------------------
gsap. fromTo(
    ".title-contact", 1,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".title-contact",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-company01", 1.2,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-company01",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-company02", 1.4,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-company02",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-company03", 1.6,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-company03",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-mname", 1.8,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-mname",
            start: "top bottom",
            // markers: true
        }
    }
);



gsap. fromTo(
    ".gsap-from", 2,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-from",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-time", 2.2,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-time",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-address", 2.4,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-address",
            start: "top bottom",
            // markers: true
        }
    }
);

gsap. fromTo(
    ".gsap-mail", 2.6,
    {
    x: 100,
    opacity: 0,
    },
    {x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".gsap-mail",
            start: "top bottom",
            // markers: true
        }
    }
);



// let mm = gsap.matchMedia();

// mm.add("(min-width: 1025px)", () => {
//     // 1025px以上の大きさのたｍんまつだけ
//     gsap. fromTo(
//         ".concept-primary .colum-first", 2,
//        {
//         x: -100,
//         opcity: 0,
//        },
//        {
//         x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".concept-primary .colum-first",
//             start: "top center",
//             markers: true
//         },
//     }
//     );

// })

// // 599px以下の大きさの端末の時だけアニメーションが有効
// mm.add("(max-width: 599px)", () => {

//     gsap. fromTo(
//         ".concept-primary .colum-first", 2,
//        {
//         x: -100,
//         opcity: 0,
//        },
//        {
//         x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".concept-primary .colum-first",
//             start: "top center",
//             markers: true
//         },
//     }
//     );
// });

