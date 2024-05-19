#!/usr/bin/env python3
"""A simple helper function"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """returns tuple of size two containing start index and end index"""

    return (page * page_size - page_size, page * page_size)
