package com.fitness.ActivityService.service;

import com.fitness.ActivityService.dto.ActivityRequest;
import com.fitness.ActivityService.dto.ActivityResponse;
import com.fitness.ActivityService.model.Activity;
import com.fitness.ActivityService.repository.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityService {

    @Value("${rabbitmq.exchange.name}")
    private String exchange;

    @Value("${rabbitmq.routing.key}")
    private String routing;

    private final ActivityRepository activityRepository;
    private final UserClientService userClientService;
    private final RabbitTemplate rabbitTemplate;

    public ActivityResponse trackActivity(ActivityRequest activityRequest) {
        Boolean userExists=userClientService.validateUser(activityRequest.getUserId());
        if(!userExists){
            throw new RuntimeException("User Id not Found!: "+activityRequest.getUserId());
        }

        Activity activity=new Activity();
        activity.setUserId(activityRequest.getUserId());
        activity.setType(activityRequest.getType());
        activity.setDuration(activityRequest.getDuration());
        activity.setCaloriesBurned(activityRequest.getCaloriesBurned());
        activity.setStartTime(activityRequest.getStartTime());
        activity.setAdditionalMetrics(activityRequest.getAdditionalMetrics());

        Activity savedActivity=activityRepository.save(activity);

        //sending message to the RabbitMQ Queue
        rabbitTemplate.convertAndSend(exchange,routing,savedActivity);

        return mapToResponse(savedActivity);
    }

    private ActivityResponse mapToResponse(Activity activity){
        ActivityResponse response=new ActivityResponse();
        response.setId(activity.getId());
        response.setUserId(activity.getUserId());
        response.setType(activity.getType());
        response.setDuration(activity.getDuration());
        response.setStartTime(activity.getStartTime());
        response.setCaloriesBurned(activity.getCaloriesBurned());
        response.setAdditionalMetrics(activity.getAdditionalMetrics());
        response.setCreatedAt(activity.getCreatedAt());
        response.setUpdatedAt(activity.getUpdatedAt());
        return response;
    }

    public List<ActivityResponse> getUserActivities(String userId) {
        List<Activity> activities=activityRepository.findByUserId(userId);
        return activities.stream().
                        map(this::mapToResponse)
                        .collect(Collectors.toList());
    }

    public ActivityResponse getActivity(String id) {
        return activityRepository.findById(id)
                .map(this::mapToResponse)
                .orElseThrow(()->new RuntimeException("activity not found with id"+id));
    }
}
