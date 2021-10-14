# coding=utf-8
# *** WARNING: this file was generated by test. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'SupportedFilterTypes',
]


class SupportedFilterTypes(str, Enum):
    """
    Type of product filter.
    """
    SHIP_TO_COUNTRIES = "ShipToCountries"
    """
    Ship to country
    """
    DOUBLE_ENCRYPTION_STATUS = "DoubleEncryptionStatus"
    """
    Double encryption status
    """