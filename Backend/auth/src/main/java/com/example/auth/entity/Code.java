package com.example.auth.entity;
import lombok.Getter;

@Getter
public enum Code {
    SUCCESS("Operation succes"),
    PERMIT("Access granted"),
    A1("Couldn't login"),
    A2("User with this username does not exist"),
    A3("Desired token is empty or not valid"),
    A4("User with name already exists"),
    A5("User with this mail already exists"),
    A6("User does not exist");

    public final String label;
    private Code(String label){
        this.label = label;
    }


}
