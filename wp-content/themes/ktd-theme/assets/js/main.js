function survey_click_func() {
	jQuery(".textz_block").hide(), jQuery(".textz_show").show(), setTimeout((function() {
		window.location.href = "https://www.khaleejtimes.com"
	}), 1e3)
}
jQuery.noConflict(),
	function(e) {
		window.navigator.userAgent.match(/MSIE|Trident/) && e("body").addClass("isIE"), e(document).ready((function() {
			var t = e("body").height() - e(".wrapper").height() + 55;
			t > 400 && (t = 55), e(".nav-overlay-nf").css({
				top: t
			}), header = document.querySelector(".header-row.secondary-bg"), stickyElem = document.querySelector(".sticky-div"), mega = document.querySelector(".nav-overlay-nf"), null != header && null != stickyElem && null != mega && (stickyElemBottom = stickyElem.getBoundingClientRect().bottom, stickyElemPos = stickyElem.getBoundingClientRect().bottom + window.pageYOffset, currStickyPos = header.getBoundingClientRect().bottom + window.pageYOffset + 50, window.onscroll = function() {
				stickyElemPos2 = stickyElem.getBoundingClientRect().bottom + window.pageYOffset, stickyElemPos3 = stickyElem.getBoundingClientRect().bottom, window.pageYOffset < currStickyPos && window.pageYOffset > stickyElemBottom ? mega.style.top = "-" + stickyElemPos2 + "px" : mega.style.top = stickyElemPos3 + "px", window.pageYOffset > currStickyPos ? (stickyElem.classList.add("is-sticky"), stickyElem.classList.add("shadow-sm"), mega.classList.add("is-sticky-enabled")) : (stickyElem.classList.remove("is-sticky"), stickyElem.classList.remove("shadow-sm"), mega.classList.remove("is-sticky-enabled"))
			})
		}));
		var t = {
			navBarTravelling: !1,
			navBarTravelDirection: "",
			navBarTravelDistance: 150
		};
		document.documentElement.classList.remove("no-js"), document.documentElement.classList.add("js");
		var n = document.getElementById("pnAdvancerLeft"),
			i = document.getElementById("pnAdvancerRight"),
			a = document.getElementById("pnProductNav"),
			o = document.getElementById("pnProductNavContents");
		if(null != a && null != o) {
			a.setAttribute("data-overflowing", s(o, a));
			var r = !1;
			a.addEventListener("scroll", (function() {
				window.scrollY, r || window.requestAnimationFrame((function() {
					a.setAttribute("data-overflowing", s(o, a)), r = !1
				})), r = !0
			}))
		}

		function s(e, t) {
			var n = t.getBoundingClientRect(),
				i = Math.floor(n.right),
				a = Math.floor(n.left),
				o = e.getBoundingClientRect(),
				r = Math.floor(o.right),
				s = Math.floor(o.left);
			return a > s && i < r ? "both" : s < a ? "left" : r > i ? "right" : "none"
		}
		null != n && n.addEventListener("click", (function() {
			if(!0 !== t.navBarTravelling) {
				if("left" === s(o, a) || "both" === s(o, a)) {
					var e = a.scrollLeft;
					e < 2 * t.navBarTravelDistance ? o.style.transform = "translateX(" + e + "px)" : o.style.transform = "translateX(" + t.navBarTravelDistance + "px)", o.classList.remove("pn-ProductNav_Contents-no-transition"), t.navBarTravelDirection = "left", t.navBarTravelling = !0
				}
				a.setAttribute("data-overflowing", s(o, a))
			}
		})), null != i && i.addEventListener("click", (function() {
			if(!0 !== t.navBarTravelling) {
				if("right" === s(o, a) || "both" === s(o, a)) {
					var e = Math.floor(o.getBoundingClientRect().right - a.getBoundingClientRect().right);
					e < 2 * t.navBarTravelDistance ? o.style.transform = "translateX(-" + e + "px)" : o.style.transform = "translateX(-" + t.navBarTravelDistance + "px)", o.classList.remove("pn-ProductNav_Contents-no-transition"), t.navBarTravelDirection = "right", t.navBarTravelling = !0
				}
				a.setAttribute("data-overflowing", s(o, a))
			}
		})), o.addEventListener("transitionend", (function() {
			var e = window.getComputedStyle(o, null),
				n = Math.abs(parseInt((e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform")).split(",")[4]) || 0);
			o.style.transform = "none", o.classList.add("pn-ProductNav_Contents-no-transition"), "left" === t.navBarTravelDirection ? a.scrollLeft = a.scrollLeft - n : a.scrollLeft = a.scrollLeft + n, t.navBarTravelling = !1
		}), !1), o.addEventListener("click", (function(e) {
			[].slice.call(document.querySelectorAll(".pn-ProductNav_Link")).forEach((function(e) {
				e.setAttribute("aria-selected", "false")
			})), e.target.setAttribute("aria-selected", "true")
		}));
		var l = e(".video-player"),
			c = e(".video-player video"),
			d = e(".movie-preview iframe"),
			u = l.width(),
			h = e(".movie-preview").width();
		c.width(u).height(.5625 * u), d.width(h).height(.5625 * h), e(".tracks").height(l.height()), e(window).resize((function() {
			u = l.width(), niframewidth = e(".movie-preview").width(), d.width(niframewidth).height(.5625 * niframewidth), c.width(u).height(.5625 * u), e(".tracks").height(l.height())
		})).resize();
		var f = e(".takeover"),
			m = e(".takeover article"),
			g = 0,
			v = 0;
		e.fn.isInViewport = function() {
			var t = (e(window).width() - e(this).parent().outerWidth()) / 2,
				n = e(this);
			if(0 != g) {
				var i = old_width - n.parent().width();
				v = n.parent().width() + t - i
			} else g = n.parent().width(), v = n.parent().width() + t, old_width = g;
			var a = n.offset().left,
				o = a + n.width();
			return 0 <= a && o <= v
		}, e(".image-slider").length && new Swiper(".image-slider", {
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar"
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		}), e(document).ready((function() {
			e(".sub-menu").each((function() {
				var t = e(this),
					n = t.parent().height(),
					i = t.data("id"),
					a = 0;
				992 > e(window).width() && (e("#" + i).css({
					top: n + "px"
				}), t.find("li").each((function() {
					e(this).isInViewport() || (e(this).detach().appendTo("#" + i), a++)
				})), e("#" + i).css({
					top: n + "px"
				}), t.find(".toggle-mobile-sub-menu").length || a > 0 && e('<span class="toggle-mobile-sub-menu"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></span>').appendTo(t))
			})), e(document).on("click", ".cinema-location-filter", (function(t) {
				t.preventDefault();
				var n = e(this).data("target");
				e(".cinema-location-filter").removeClass("active"), e(this).addClass("active"), e(".cinema-location").hide(), n ? e('.cinema-location[data-location="' + n + '"]').fadeIn(1e3) : e(".cinema-location").fadeIn(1e3)
			})), e(document).on("click", ".movie-language-filter", (function(t) {
				t.preventDefault();
				var n = e("#movie-listings"),
					i = n.find(".loader"),
					a = e(this).attr("href");
				e(".movie-language-filter").removeClass("active"), e(this).addClass("active"), jQuery.ajax({
					url: a,
					type: "POST",
					beforeSend: function() {
						i && i.show()
					},
					complete: function() {
						i && i.hide()
					},
					success: function(e) {
						e && e.data && n.fadeOut(200, (function() {
							n.html(e.data.html), n.fadeIn(1e3)
						}))
					}
				})
			})), e(document).on("click", "#movie-listings a.page-link", (function(t) {
				t.preventDefault();
				var n = e(".movie-language-filter.active").data("target"),
					i = e("#movie-listings"),
					a = i.find(".loader"),
					o = e(this).attr("href");
				jQuery.ajax({
					url: o,
					type: "POST",
					data: {
						language: n
					},
					beforeSend: function() {
						a && a.show()
					},
					complete: function() {
						a && a.hide()
					},
					success: function(e) {
						e && e.data && i.fadeOut(200, (function() {
							i.html(e.data.html), i.fadeIn(1e3)
						}))
					}
				})
			})), e(document).on("click", ".photo-gallery .image-nav a", (function(t) {
				t.preventDefault();
				var n = e(this),
					i = e(".photo-gallery .image-thumbnail img"),
					a = n.data("target-img");
				n.parent().parent().find(".fps-item-single img"), i.length && (i.animate({
					opacity: 0
				}, (function() {
					i.attr("src", a)
				})), i.animate({
					opacity: 1
				}, 300))
			}))
		})), e(window).resize((function() {
			var e = f.width();
			m.width(e).height(.75 * e), jQuery(".sub-menu").each((function() {
				var e = 0,
					t = jQuery(".sub-menu").width();
				jQuery(".sub-menu li").each((function() {
					e += parseInt(jQuery(this).outerWidth(), 10)
				})), console.log(t + " => " + e);
				var n = jQuery(this),
					i = n.parent().height(),
					a = n.data("id");
				t < e && (1024 > jQuery(window).width() && jQuery("#" + a).css({
					top: i + "px"
				}), n.find("li").each((function() {
					var e = jQuery(this);
					e.isInViewport() || e.detach().appendTo("#" + a)
				})), n.find(".toggle-mobile-sub-menu").length || jQuery('<span class="toggle-mobile-sub-menu"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></span>').appendTo(n))
			}))
		})), e(document).on("click", ".toggle-mobile-sub-menu", (function() {
			var t = e(this).parent().parent().find(".mobile-sub-menu");
			e(t).fadeToggle(200, (function() {}))
		})), e("#ifrm").length && (document.getElementById("ifrm").onload = function() {
			var e, t, n, i, a, o;
			e = this.id, t = document.getElementById(e), console.log(t.contentWindow), n = t.contentWindow.document ? t.contentWindow.document : t.contentDocument, t.style.visibility = "hidden", t.style.height = "10px", t.style.height = (a = (i = (i = n) || document).body, o = i.documentElement, Math.max(a.scrollHeight, a.offsetHeight, o.clientHeight, o.scrollHeight, o.offsetHeight) + 4 + "px"), t.style.visibility = "visible"
		});
		var p = Math.floor(jQuery(".article-paragraph-wrapper").find("p").length / 2.5);
		jQuery.each(jQuery(".article-paragraph-wrapper p"), (function(e, t) {
			e == p && jQuery(t).after()
		}))
	}(jQuery), jQuery(window).on("load", (function() {
		jQuery(".sub-menu").each((function() {
			var e = 0,
				t = jQuery(".sub-menu").width();
			jQuery(".sub-menu li").each((function() {
				e += parseInt(jQuery(this).outerWidth(), 10)
			})), console.log(t + " => " + e);
			var n = jQuery(this),
				i = n.parent().height(),
				a = n.data("id");
			t < e && (1024 > jQuery(window).width() && jQuery("#" + a).css({
				top: i + "px"
			}), n.find("li").each((function(e) {
				var t = jQuery(this);
				t.isInViewport() || t.detach().appendTo("#" + a)
			})), n.find(".toggle-mobile-sub-menu").length || jQuery('<span class="toggle-mobile-sub-menu"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></span>').appendTo(n))
		}))
	}));