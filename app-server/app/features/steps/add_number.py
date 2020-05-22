from behave import *


@given('we have behave installed')
def step_impl(context):
    pass


@when('we implement a test')
def step_impl(context):
    pass
    # context.result = add_numbers(2, 2)


@then('behave will test it for us!')
def step_impl(context):
    pass
    # assert context.result == 4
