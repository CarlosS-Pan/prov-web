# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

date = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in reactjs
    return {
        'Name': "Carlos",
        "Age": "23",
        "Date": date,
        "Language": "python"
    }

# Routing to products tab


@app.route('/products')
def products():
    return 'This returns products page'


# Running app
if __name__ == '__main__':
    app.run(debug=True)
