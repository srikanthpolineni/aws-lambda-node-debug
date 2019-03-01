exports.handler = (event, context, callback) => {

    debugger;
    const response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: "Hello World!!!",
            input: event
        })
    };
    callback(null, response);
};