import { NextResponse } from "next/server";
import { RequestError, ValidationError } from "../http-error";
import { ZodError } from "zod";
import logger from "../logger";

export type ResponseType = "api" | "server";

const formatResponse = (
  responseType: ResponseType,
  status: number,
  message: string,
  errors?: Record<string, string[]> | undefined
) => {
  const responseContent = {
    success: false,
    error: {
      message,
      details: errors,
    },
  };

  return responseType === "api"
    ? NextResponse.json(responseContent, { status })
    : { status, ...responseContent };
};

const handelError = (error: unknown, response: ResponseType = "server") => {
  if (error instanceof RequestError) {
    logger.error({ err: error }, `${response.toUpperCase()} Error : ${error}`);
    return formatResponse(
      response,
      error.statusCode,
      error.message,
      error.errors
    );
  }

  if (error instanceof ZodError) {
    const validationError = new ValidationError(
      error.flatten().fieldErrors as Record<string, string[]>
    );
    return formatResponse(
      response,
      validationError.statusCode,
      validationError.message,
      validationError.errors
    );
  }

  if (error instanceof Error) {
    return formatResponse(response, 500, error.message);
  }

  return formatResponse(response, 500, "500 server Error");
};

export default handelError;
