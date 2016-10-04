"use strict";

describe('Home page', function() {

    it('should have correct title', function(){
        browser.get('https://soundcloud-ngrx.herokuapp.com/');

        expect(browser.getTitle())
            .toBe('SoundCloud • Angular2 NgRx', 
                'Title not found');
    });


    xit ('should have correct url', function(){

    });

});