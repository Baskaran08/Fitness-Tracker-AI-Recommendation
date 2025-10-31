package com.fitness.UserService.service;


import com.fitness.UserService.dto.RegisterRequest;
import com.fitness.UserService.dto.UserResponse;
import com.fitness.UserService.model.User;
import com.fitness.UserService.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserResponse getUserDetails(String id) {
        User user=userRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("User not found!"));

        UserResponse response=new UserResponse();
        response.setId(user.getId());
        response.setEmail(user.getEmail());
        response.setPassword(user.getPassword());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setCreatedAt(user.getCreatedAt());
        response.setUpdatedAt(user.getUpdatedAt());

        return response;
    }

    public UserResponse registerUser(RegisterRequest request) {

        if(userRepository.existsByEmail(request.getEmail())){
            User existingUser=userRepository.findByEmail(request.getEmail());
            UserResponse response=new UserResponse();
            response.setId(existingUser.getId());
            response.setKeyCloakId(existingUser.getKeyCloakId());
            response.setEmail(existingUser.getEmail());
            response.setPassword(existingUser.getPassword());
            response.setFirstName(existingUser.getFirstName());
            response.setLastName(existingUser.getLastName());
            response.setCreatedAt(existingUser.getCreatedAt());
            response.setUpdatedAt(existingUser.getUpdatedAt());
            return response;
        }

        User user=new User();
        user.setEmail(request.getEmail());
        user.setKeyCloakId(request.getKeyCloakId());
        user.setPassword(request.getPassword());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());

        User savedUser=userRepository.save(user);

        UserResponse response=new UserResponse();
        response.setId(savedUser.getId());
        response.setKeyCloakId(savedUser.getKeyCloakId());
        response.setEmail(savedUser.getEmail());
        response.setPassword(savedUser.getPassword());
        response.setFirstName(savedUser.getFirstName());
        response.setLastName(savedUser.getLastName());
        response.setCreatedAt(savedUser.getCreatedAt());
        response.setUpdatedAt(savedUser.getUpdatedAt());

        return response;
    }

    public Boolean validateUser(String id) {
        return userRepository.existsByKeyCloakId(id);
    }
}
