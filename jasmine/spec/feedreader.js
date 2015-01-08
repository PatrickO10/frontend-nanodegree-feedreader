// feedreader.js

$(function() {
    // RSS Feeds test suite
    // Makes sure allFeeds are defined and not empty
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Makes sure Urls are defined, contain http in the beginning, and url.length is not 0
            it('Urls defined', function() {
                for (var feed in allFeeds){
                    expect(allFeeds[feed].url).toBeDefined();
                    expect(allFeeds[feed].url.length).not.toBe(0);
                    // Searches for string "http" if found returns 0 (0 means it is at the beginning)
                    expect(allFeeds[feed].url.search("http")).toBe(0);
                }
            });
        // Makes sure there is a name defined and it is not empty
            it('Names defined', function() {
                allFeeds.forEach(function(feed){
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                // Makes sure the name is not a string with only spaces by trimming it down
                    expect(feed.name.trim()).not.toBe('');
                })
            });
    });

    // The Menu test suite
    // Makes sure the body has class menu-hidden because that is what hides the menu
    describe('The Menu', function() {
        it('is hidden', function() {
            expect($('body').hasClass("menu-hidden")).not.toBe(false);
        });

        it('and when clicked shows menu and unclicked hides menu', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click'); // Triggers the menu ("clicks" the .menu-icon-link)
            expect($('body').hasClass("menu-hidden")).not.toBe(true); // Expect body not to have class menu-hidden
            menuIcon.trigger('click')                                 // When triggered again
            expect($('body').hasClass("menu-hidden")).not.toBe(false); // Expect body to have class menu-hidden
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
