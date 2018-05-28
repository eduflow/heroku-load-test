web: gunicorn --forwarded-allow-ips='*' --error-logfile - -w $GUNICORN_WORKERS -k $GUNICORN_WORKER_TYPE app:app
# web: FLASK_CONFIG='config.ProductionConfig' \
#      NEW_RELIC_ENVIRONMENT=production  \
#      NEW_RELIC_CONFIG_FILE=newrelic.ini \
#      newrelic-admin run-program gunicorn \
#        --forwarded-allow-ips='*' \
#        --error-logfile - \
#        -w $GUNICORN_WORKERS app:app
