import Storehouse from '../dist/storehouse.js';

test("static", function() {
  let key = "test.storehouse.static";
  Storehouse.setItem(key, "message", "Hello");
  equal(Storehouse.getItem(key, "message"), "Hello");

  Storehouse.setItem(key, "message", "Hello!!");
  equal(Storehouse.getItem(key, "message"), "Hello!!");

  Storehouse.deleteItem(key, "message");
  equal(Storehouse.getItem(key, "message"), undefined);
});

test("instance", function() {
  var storehouse = Storehouse.getInstance("test.storehouse"); 
  storehouse.setItem("fruit", "apple");
  equal(storehouse.getItem("fruit"), "apple");

  storehouse.setItem("fruit", "orange");
  equal(storehouse.getItem("fruit"), "orange");

  storehouse.deleteItem("fruit");
  equal(storehouse.getItem("fruit"), undefined);

  var storehouse2 = Storehouse.getInstance("test.storehouse2");
  equal(storehouse2.getItem("fruit"), undefined);

  storehouse2.setItem("fruit", "orange");
  equal(storehouse2.getItem("fruit"), "orange");

  storehouse2.deleteItem("fruit");
  equal(storehouse2.getItem("fruit"), undefined);
});
