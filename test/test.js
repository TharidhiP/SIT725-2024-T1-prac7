let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3000/api/cards';
let url1 = 'http://localhost:3000/api/card';
let card = {
    title:'title-test-tharidhi',
    subTitle:'title-test-tharidhi',
    path:'images/test-puppy.png',
    description:'title-test-tharidhi'
}

let card1 = {
    title:'Puppy 5',
    subTitle:'About Puppy 5',
    path:'https://ih0.redbubble.net/image.4910869332.1927/raf,360x360,075,t,fafafa:ca443f4786.jpg',
    description:'Hello There! Puppy Number Five Here!'
}

describe('test get all cards', function() {
    it('return status code of 200', function(done){
        request(url, function(error,response,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return status code of 404', function(done){
        request('http://localhost:3000/api/cards1', function(error,response,body){
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('return succesful message', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Success');
            done();
        });
    });

    it('returns an array', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('test post a card', function() {
    it('insert a card to database and status code 200', function(done){
        request.post({url:url1, form:card1}, function(error,response,body){
            body = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(body.message).to.contain('Added');
            done();
        });
    });

    it('Test the post card json response', function(done){
        request.post({url:url1, form:card}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.data.acknowledged).to.equal(true);
            expect(body.message).to.equal("Card Successfully Added");
            done();
        });
    });
});