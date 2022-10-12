import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

import * as httpStatus from "http-status";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: httpStatus.OK,
    body: JSON.stringify({ message: "Hello World Class ... 🌎" }),
  } as APIGatewayProxyResult;
};
