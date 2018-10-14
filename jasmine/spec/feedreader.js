/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


       it('URL defined and not empty',function(){
             allFeeds.forEach(function(feed){
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             });
             
            });

        
        
         it('name defined and not empty',function(){
             allFeeds.forEach(function(feed){
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
             });
             
            });
        
        
        
        
        
    });


    
     describe('The Menu', function() {
        
    

         it('Menu is hidden by default',function(){
             
              // expect($('body.menu-hidden').css('visibility')).toBe('visible');
             expect($('body').hasClass("menu-hidden")).toBe(true);
             
             
         });
     
         it('Toggle Menu',function(){
             
               $('.menu-icon-link').trigger('click');
                   expect($('body').hasClass('menu-hidden')).toBe(false);
               $('.menu-icon-link').trigger('click');
                  expect($('body').hasClass("menu-hidden")).toBe(true);
         });
       
         
    });   
 


     describe('Initial Entries', function(){
          beforeEach(function(done){
                  
                  loadFeed(0,done);
                
              });
         it('at least one entry',function(){
             expect($('.feed .entry')[0].length).not.toBe(0);
             
         });
         
     });

     describe('New Feed Selection', function(){
         var feed1="";
         var feed2 ="";
          beforeEach(function(done){
                   
                   loadFeed(0,function(){
                   feed1 = $('.feed .entry')[0].innerText;
                   loadFeed(1,function(){
                   feed2 = $('.feed .entry')[0].innerText;
                   done();
                          });
                    });
               
              });
         it('content actually changes',function(){
                   expect(feed1).not.toBe(feed2);
             
            
         });
         
     });

     
     }());
