package com.fitness.ApiGateway.client;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotBlank
    @Email(message = "Email should be in correct format")
    private String email;

    private String keyCloakId;
    @NotBlank
    @Size(min = 6,message = "password should be atleast 6 characters!")
    private  String password;
    private String firstName;
    private String lastName;
}
