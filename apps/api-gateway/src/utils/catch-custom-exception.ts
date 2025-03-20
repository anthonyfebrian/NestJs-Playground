import { HttpException, HttpStatus } from "@nestjs/common";
import { catchError, OperatorFunction, throwError } from "rxjs";

export function catchCustomException(): OperatorFunction<any, any> {
    return catchError((error) => {
        // console.error('Caught error:', error);
        const statusCode = error.response?.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR
        const message = error.response?.message ?? error.message ?? "Internal Server Error"
        console.log(`catch Error message: ${message} - Status code: ${statusCode}`);

        return throwError(() => new HttpException(message, statusCode));
    });
}