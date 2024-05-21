#!/usr/bin/python3
"""Creates LIFOCache class that inherits from BaseCaching"""
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ Defines LIFOCache """

    def __init__(self):
        """ Initializes LIFOCache """
        self.stack = []
        super().__init__()

    def put(self, key, item):
        """ Assigns item to dictionary """
        if key and item:
            if self.cache_data.get(key):
                self.stack.remove(key)
            while len(self.stack) >= self.MAX_ITEMS:
                delete = self.stack.pop()
                self.cache_data.pop(delete)
                print('DISCARD: {}'.format(delete))
            self.stack.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """ Returns value associated with given key """
        return self.cache_data.get(key)
