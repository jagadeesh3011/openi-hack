/* global jQuery */ // Add this line to inform ESLint about the global jQuery variable

(function ($) {

    var rtsJs = {
        m: function () {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function () {
            this._window = $(window);
            this._document = $(document);
            this._body = $('body');
            this._html = $('html');
        },
        methods: function () {
            rtsJs.sideCollups();
            rtsJs.niceSelect();
            rtsJs.newTab();
            rtsJs.darkLightSwitcher();
            rtsJs.stickySearch();
        },
        sideCollups: function () {
            // Toggle classes on button click
            $('#collups-left').on('click', function (e) {
                console.log('#collups-left clicked'); // Debugging log
                $('#collups-left').toggleClass('collapsed');
                $('.left-side-bar').toggleClass('collapsed');
                $('.main-center-content-m-left').toggleClass('collapsed');
            });

            // Popup Toggle
            $(".single_action__haeader svg, .avatar").on('click', function (e) {
                e.preventDefault();
                var $popup = $(this).siblings('.slide-down__click');
                console.log('Popup clicked'); // Debugging log
                $popup.slideToggle();
                $(".slide-down__click").not($popup).slideUp(0);
            });

            // Popup Toggle
            $(".single_action__haeader").on('click', function (e) {
                console.log('.single_action__haeader clicked'); // Debugging log
                $(this).toggleClass('active');
            });

            $(".right-side-open-clouse").on('click', function (e) {
                console.log('.right-side-open-clouse clicked'); // Debugging log
                $(this).parent().toggleClass('close-right');
                $('.main-center-content-m-left').toggleClass('close-right-sidebar');
            });
        },

        niceSelect: function(){
            $('.nice-select').each(function() {
                var select = $(this),
                    name = select.attr('name');
                
                select.hide();
                
                select.wrap('<div class="nice-select-wrap"></div>');
                
                var parent = select.parent('.nice-select-wrap');
                
                parent.append('<ul id=' + name + ' style="display:none"></ul>');
                
                select.find('option').each(function() {
                    var option = $(this),
                        value = option.attr('value'),
                        label = option.text();
                    
                    if (option.is(":first-child")) {
                        $('<a href="#" class="drop">' + label + '</a>').insertBefore(parent.find('ul'));
                    } else {
                        parent.find('ul').append('<li><a href="#" id="' + value + '">' + label + '</a></li>');
                    }
                });
                
                parent.find('a').on('click', function(e) {
                    parent.toggleClass('down').find('ul').slideToggle(300);
                    e.preventDefault();
                });
                
                parent.find('ul a').on('click', function(e) {
                    var niceOption = $(this),
                        value = niceOption.attr('id'),
                        text = niceOption.text();
                    
                    select.val(value);
                    parent.find('.drop').text(text);
                    e.preventDefault();
                });
            });
        },

        newTab: function(){
            $(document).ready(function(){
                $('.new-chat-option').on('click', function(){
                    $('.question_answer__wrapper__chatbot').hide(5);
                });
                $('.new-chat-option').on('click', function(){
                    $('.copyright-area-bottom').hide(5);
                });
                $('.chat-history-area-start .single-history').on('click', function(){
                    $('.question_answer__wrapper__chatbot').hide(5).show(5);
                });
                $('.chat-history-area-start .single-history').on('click', function(){
                    $('.copyright-area-bottom').show(5);
                });
            });
        },

        darkLightSwitcher: function(e){
            $(document).ready(function() {
                var toggle = document.getElementById("rts-data-toggle");
                
                // Check if user has already set a theme preference
                var storedTheme = localStorage.getItem('intellactai');

                // If no preference is found, default to dark mode
                if (!storedTheme) {
                    storedTheme = "dark";
                    localStorage.setItem('intellactai', storedTheme);
                }

                document.documentElement.setAttribute('data-theme', storedTheme);
                
                toggle.onclick = function() {
                    var currentTheme = document.documentElement.getAttribute("data-theme");
                    var targetTheme = "light";

                    if (currentTheme === "light") {
                        targetTheme = "dark";
                    }

                    document.documentElement.setAttribute('data-theme', targetTheme);
                    localStorage.setItem('intellactai', targetTheme);
                };
            });
        },

        stickySearch: function (e) {
            $(document).ready(function(){
                $(window).scroll(function(){
                    var distanceFromBottom = $(document).height() - $(window).height() - $(window).scrollTop();

                    var threshold = 200; // You can adjust this value according to your requirement

                    if(distanceFromBottom < threshold) {
                        $('.chatbot .search-form').addClass('active');
                    } else {
                        $('.chatbot .search-form').removeClass('active');
                    }
                });
            });
        },
    }
    rtsJs.m();
})(jQuery);
