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
    describe('The Menu', function() {
        // Makes sure the body has class menu-hidden because that is what hides the menu
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

    // Initial Entries test suite
    // Tests loadFeed() function
    describe('Initial Entries', function() {
        beforeEach(function (done) { // Called before the spec
            // loadFeed(id, cb) if (cb) { cb() }
            loadFeed(0, done); // Done is called at the end of loadFeed
        });
        // Makes sure .feed .entry has at least 1 .entry element
        it('has at least a single .entry element', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* New Feed Selection test suite.
    * Ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    describe('New Feed Selection', function() {
        var headers0,
            headers1;
        beforeEach(function (done) {
            // Finds all the h2 headlines for Udacity Blog and makes it into one string
            headers0 = $('article').find('h2').text();
            loadFeed(1, done);
        });

        it('has changed', function (done) {
            // Finds all the h2 headlines for CSS
            headers1 = $('article').find('h2').text();
            expect(headers1).not.toBe(headers0);
            done();
        });

        // Sets it back to Udacity Blog
        afterEach(function (done) {
            loadFeed(0, done);
        })
    });
}());
