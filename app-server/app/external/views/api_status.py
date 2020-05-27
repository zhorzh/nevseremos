from external import external


@external.route('/status')
def status():
    return 'ok'
