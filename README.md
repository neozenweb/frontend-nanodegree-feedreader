# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# Completed Jasmine Testing Specifications 
1. RSS Feeds : The test cases check if a. RSS Feeds are defined
                                       b. URL of the feed is defined and have some value.
                                       c. Names of the feeds have some value.
            Steps:I. Test the application by making changes to the allFeeds variable.
                  II. Test `allFeeds` object and ensure that it has URL and name that are defined and not empty.
                                       
2.The Menu:  The Menu on the left upper corner:
                                        a. is hidden by default on loading.
                                        b. is hidden/visible on clicking the menu icon.
             Steps: I. Test for menu visibility on default loading of the page.
                    II. Test for the sliding menu visibility on first triggered click event.
                    III. Test for the sliding menu visibility of second triggered click event.
                                        
3.The initial entries on the page:
                                        a. At least one entry is loaded from the feeds.
             Steps: I. Test if atleast one entry is loaded from the asynchronous feeds. Console.log can be used to verify.
                                        
4. On selecting a new feed
              Steps: I. Get two asynchronous feeds and test if the entry for each of them is different.
                                        