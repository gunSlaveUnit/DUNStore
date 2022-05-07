import random


def make_payment(payment_info: dict) -> dict:
    """
    The function is a stub.
    It assumes data encryption and interaction with the banking service.
    With a probability of 90 percent, the payment will be successful.
    Possible statuses: 200 - OK, 400 - error
    :param payment_info: a dict of payment information:
        {"cardNumber": ...,
        "validityMonth": ...,
        "validityYear": ...,
        "cvv_cvc": ...}
    :return: dict {"status": ..., "message": ...}
    """
    if not isinstance(payment_info, dict):
        return {'status': '400', 'message': 'Invalid payment data provided. It must be a dictionary'}

    is_payment_successful = random.randint(0, 10)

    result = {'status': '200', 'message': 'The payment was successful'} if is_payment_successful < 8 else {
        'status': '400', 'message': 'Something was wrong'}

    return result
