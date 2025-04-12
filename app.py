from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Allow all origins (temporary fix)

@app.route("/api/footer-title")
def get_footer_title():
    return jsonify({"name": "sravyakk"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # Use dynamic port for Render
    app.run(host="0.0.0.0", port=port, debug=True)