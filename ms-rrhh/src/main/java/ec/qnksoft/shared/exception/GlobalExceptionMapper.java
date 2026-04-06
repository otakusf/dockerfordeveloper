package ec.qnksoft.shared.exception;

import ec.qnksoft.shared.dto.ErrorResponse;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class GlobalExceptionMapper implements ExceptionMapper<Exception> {
  
    @Override
    public Response toResponse(Exception exception) {

        ErrorResponse error = new ErrorResponse(
                "INTERNAL_ERROR",
                exception.getMessage()
        );

        return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                .entity(error)
                .build();
    }
    
}
