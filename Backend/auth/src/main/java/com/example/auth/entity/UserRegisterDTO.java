package com.example.auth.entity;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.Email;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Builder
public class UserRegisterDTO {

    @Length(min = 5, max = 50, message = "Login should range from 5 to 50 characters")
    private String login;
    @Email
    private String email;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Length(min = 8, max = 75, message = "Password should be at least 8 characters long and not shorter than 75")
    private String password;
    private String role;
}
