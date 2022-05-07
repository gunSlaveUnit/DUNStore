import random


def make_payment():
    """
    The function is a stub.
    It assumes data encryption and interaction with the banking service
    With a probability of 90 percent, the payment will be successful
    """
    is_payment_successful = random.randint(0, 10)
    return True if is_payment_successful < 8 else False
