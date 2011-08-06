/**
 * Storehouse.js
 * wrapper for session storage and local storage
 * @author Hideaki Tanabe
 * @see https://github.com/tanabe/Storehouse-js
 */
(function() {
  var localStorage = window.localStorage;
  var sessionStorage = window.sessionStorage;

  /**
   * check Storehouse is available
   * @name isAvailable
   * @function
   * @return boolean
   */
  var isAvailable = function() {
    return !!sessionStorage && !!localStorage && !!JSON;
  };

  /**
   * create storage key
   * @name createKey
   * @function
   * @param namespace namespace [String]
   * @param key key [String]
   * @return storage key [String]
   */
  var createKey = function(namespace, key) {
    return [namespace, key].join("-");
  };

  /**
   * retrieve item from storage
   * @name getItem
   * @function
   * @param namespace namespace [String]
   * @param key key [String]
   * @return value
   */
  var getItem = function(namespace, key) {
    var storageKey = createKey(namespace, key);
    var item = JSON.parse(sessionStorage.getItem(storageKey)) || JSON.parse(localStorage.getItem(storageKey));

    if (!item) {
      return undefined;
    }

    var value = item.value;
    var expire = Number(item.expire);
    var current = (new Date()).getTime();

    if (expire) {
      if (expire > current) {
        return value;
      } else {
        deleteItem(namespace, key);
      }

    } else {
      return value;
    }

    return undefined;
  };

  /**
   * set item into storage
   * @name setItem
   * @function
   * @param namespace namespace [String]
   * @param key key [String]
   * @param value value
   * @param expire expire [Date]
   */
  var setItem = function(namespace, key, value, expire) {
    var item = {
      value: value,
    };

    if (expire) {
      item.expire = expire.getTime();
      localStorage.setItem(createKey(namespace, key), JSON.stringify(item));
    } else {
      sessionStorage.setItem(createKey(namespace, key), JSON.stringify(item));
    }
  };

  /**
   * delete item from storage
   * @name deleteItem
   * @function
   * @param namespace namespace [String]
   * @param key key [String]
   */
  var deleteItem = function(namespace, key) {
    sessionStorage.removeItem(createKey(namespace, key));
    localStorage.removeItem(createKey(namespace, key));
  };

  /**
   * create Storehouse instance with specified namespace
   * @name getInstance
   * @function
   * @param namespace specified namespace [String]
   */
  var getInstance = function(namespace) {
    return {
      get: function(key) {
        return getItem(namespace, key);
      },

      set: function(key, value, expire) {
        return setItem(namespace, key, value, expire);
      },

      delete: function(key) {
        return setItem(namespace, key);
      }
    }
  };

  //define interfaces
  window.Storehouse = window.Storehouse || {
    isAvailable: isAvailable,
    get: getItem,
    set: setItem,
    delete: deleteItem,
    getInstance: getInstance
  };
})();
