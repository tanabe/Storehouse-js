test("static", function() {
  Storehouse.setItem("test.storehouse", "message", "Hello");
  equal(Storehouse.getItem("test.storehouse", "message"), "Hello");
  Storehouse.deleteItem("test.storehouse", "message");
  equal(Storehouse.getItem("test.storehouse", "message"), undefined);
});

test("instance", function() {
  var storehouse = Storehouse.getInstance("test.storehouse"); 
  storehouse.setItem("fruit", "apple");
  equal(storehouse.getItem("fruit"), "apple");
  storehouse.deleteItem("fruit");
  equal(storehouse.getItem("fruit"), undefined);
});
