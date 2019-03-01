exports.handler = async (event, context) => {

    const response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: "Hello World!!!",
            input: event
        })
    };
    return response;
};