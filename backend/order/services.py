import random
from rest_framework import status


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
        return {'status': status.HTTP_400_BAD_REQUEST,
                'message': 'Invalid payment data provided. It must be a dictionary'}

    is_payment_successful = random.randint(0, 10)

    result = {'status': status.HTTP_200_OK, 'message': 'The payment was successful'}

    return result


def send_sms_notification(sms_info: dict) -> dict:
    if not isinstance(sms_info, dict):
        return {'status': status.HTTP_400_BAD_REQUEST,
                'message': 'Invalid sms data provided. It must be a dictionary'}

    try:
        request = None
        # makes a request
    except ConnectionError as ex:
        pass

    is_sms_successful = random.randint(0, 10)

    result = {'status': status.HTTP_200_OK, 'message': 'Sent successfully'} if is_sms_successful < 8 else {
        'status': status.HTTP_400_BAD_REQUEST, 'message': 'Something was wrong'}

    return result
