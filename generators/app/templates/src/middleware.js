import bodyParser from "body-parser";
import morgan from "morgan";

export default function(app) {
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));

	// parse application/json
	app.use(bodyParser.json());

	// HTTP request logger
	app.use(morgan("combined"));
}
