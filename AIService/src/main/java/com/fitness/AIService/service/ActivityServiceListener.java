package com.fitness.AIService.service;


import com.fitness.AIService.model.Activity;
import com.fitness.AIService.model.Recommendation;
import com.fitness.AIService.repository.RecommendationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ActivityServiceListener {

    private final ActivityAIService activityAIService;
    private final RecommendationRepository recommendationRepository;

    @RabbitListener(queues = "activity.queue")
    public void activityListener(Activity activity){
        log.info("Received an activity message for id: {}",activity.getId());
//        log.info("Received from Ai: {}",activityAIService.generateRecommendation(activity));
        Recommendation activityRecommendation=activityAIService.generateRecommendation(activity);
        recommendationRepository.save(activityRecommendation);
        log.info("The recommendation is saved");
    }
}
