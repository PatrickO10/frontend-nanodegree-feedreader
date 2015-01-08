// feedreader.js

$(function() {
    // Makes sure allFeeds are defined and not empty
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    // Makes sure Urls are defined, contain http in the beginning, and url.length is not 0
    describe('allFeeds Urls', function() {
        it('are defined', function() {
            for (var feed in allFeeds){
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);
                // Searches for string "http" if found returns 0 (0 means it is at the beginning)
                expect(allFeeds[feed].url.search("http")).toBe(0);
            }
        })
    });

    // Makes sure there is a name defined and it is not empty
    describe('allFeeds Names', function() {
        it('are defined', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
                // Makes sure the name is not a string with only spaces by trimming it down
                expect(feed.name.trim()).not.toBe('');
            })
        })
    });
});


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

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
