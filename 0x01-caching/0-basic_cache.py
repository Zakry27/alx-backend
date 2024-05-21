#!/usr/bin/python3
"""Creates BasicCache class that inherits from BaseCaching"""


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ Defines a BasicCache """

    def put(self, key, item):
        """ It assign item to dictionary """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Returns value associated with given key """
        return self.cache_data.get(key)
