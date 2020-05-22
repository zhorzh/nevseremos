import ipdb
# from core.services.postgres import postgres
# from identity.models.user import Model
# from logger.models.log import Log


def before_scenario(context, scenario):
    pass
    # postgres.drop_all()
    # postgres.create_all()


def after_scenario(context, scenario):
    pass
    # postgres.drop_all()
    # postgres.create_all()


def after_step(context, step):
    if step.status == "failed":
        ipdb.post_mortem(step.exc_traceback)
