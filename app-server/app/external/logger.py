import logging

logger = logging.getLogger('consumer')
handler = logging.StreamHandler()
formatter = '%(asctime)-15s %(levelname)-8s %(message)s'
handler.setFormatter(logging.Formatter(formatter))
logger.addHandler(handler)
