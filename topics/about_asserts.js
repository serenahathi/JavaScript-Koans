
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok("hi",'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(true, 'what is a false value?');
});

test("equal", function() {
    equal(1 + 1, 2, 'what will satisfy the equal assertion?');
});
