/**
 * API Gateway proxy object.
 * @link: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 */

export interface ProxyEvent {

    /**
     * The REST api resource path.  eg: /{proxy+}
     */
    resource: string;

    /**
     * The request URI path.  eg: /foo/bar
     */
    path: string;

    /**
     * GET, POST, PUT, etc...
     */
    httpMethod: string;

    /**
     * All headers of the request with only their first value.
     */
    headers: { [key: string]: string } | null;

    /**
     * All headers of the request including all values.
     */
    multiValueHeaders: { [key: string]: string[] } | null;

    /**
     * The parsed URI query parameters with only their first value.
     */
    queryStringParameters: { [key: string]: string } | null;

    /**
     * The parsed URI query parameters including all values.
     */
    multiValueQueryStringParameters: { [key: string]: string[] } | null;

    /**
     * The parsed URI path parameters.
     */
    pathParameters: { [key: string]: string } | null;

    /**
     * Configuration attributes associated with a deployment stage of an API.
     */
    stageVariables: { [key: string]: string } | null;

    /**
     * API Gateway event context.
     */
    requestContext: {
        accountId: string;
        apiId: string;
        authorizer?: { [name: string]: any };
        httpMethod: string;
        identity: {
            accessKey: string;
            accountId: string;
            apiKey: string;
            apiKeyId: string;
            caller: string;
            cognitoAuthenticationProvider: string;
            cognitoAuthenticationType: string;
            cognitoIdentityId: string;
            cognitoIdentityPoolId: string;
            sourceIp: string;
            user: string;
            userAgent: string;
            userArn: string;
        };
        path: string;
        requestId: string;
        requestTimeEpoch: number;
        resourceId: string;
        resourcePath: string;
        stage: string;
    };

    /**
     * Unparsed request body.
     */
    body: string | null;

    /**
     * If true the body is base64 encoded.
     */
    isBase64Encoded: boolean;
}
