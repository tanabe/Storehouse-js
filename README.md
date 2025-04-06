# Storehouse.js

## what is this?

This is html5 localStorage/sessionStorage wrapper library.

## usage

    import Storehouse from 'path/to/storehouse.js';

### static api

* Storehouse.setItem(*namespace*, *key*, *value*, *expire(optional)*);
* Storehouse.getItem(*namespace*, *key*);
* Storehouse.deleteItem(*namespace*, *key*);
* Storehouse.getInstance(*namespace*);

#### store

    Storehouse.setItem("com.kaihatsubu.foo", "bar", "hello", new Date(2011, 10, 1));
    //this code means store {bar: hello} to localStorage expire on 2011 sep 1 00:00:00

    Storehouse.setItem("com.kaihatsubu.foo", "bar", "hello");
    //this code means store {bar: hello} to sessionStorage

#### restore

    Storehouse.getItem("com.kaihatsubu.foo", "bar");
    //this code returns "hello"

#### delete

    Storehouse.deleteItem("com.kaihatsubu.foo", "bar");
    //remove away from storage

### instance api

* storehouse.setItem(*key*, *value*, *expire(optional)*);
* storehouse.getItem(*key*);
* storehouse.deleteItem(*key*);

#### instantiate
storehouse instance within the specified namepsace

    var storehouse = Storehouse.getInstance("com.kaihatsubu.foo");

#### store/restore/delete

    storehouse.setItem("bar", "hello");
    storehouse.getItem("bar");//returns "hello"
    storehouse.deleteItem("bar");