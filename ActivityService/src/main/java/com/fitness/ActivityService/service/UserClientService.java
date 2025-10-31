package com.fitness.ActivityService.service;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@Service
@RequiredArgsConstructor
public class UserClientService {

    private final WebClient userServiceClient;

    public Boolean validateUser(String userId){
        try{
            return userServiceClient.get()
                    .uri("/api/users/{userId}/validate",userId)
                    .retrieve()
                    .bodyToMono(Boolean.class)
                    .block();
        }catch (WebClientResponseException e){
            if(e.getStatusCode()== HttpStatus.NOT_FOUND){
                throw new RuntimeException("User id not found: "+userId);
            }
            else if(e.getStatusCode()==HttpStatus.BAD_REQUEST){
                throw new RuntimeException("Invalid user id: "+userId);
            }
        }

        return false;
    }
}
