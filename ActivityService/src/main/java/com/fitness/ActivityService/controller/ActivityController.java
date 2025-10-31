package com.fitness.ActivityService.controller;


import com.fitness.ActivityService.dto.ActivityRequest;
import com.fitness.ActivityService.dto.ActivityResponse;
import com.fitness.ActivityService.service.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/activities")
public class ActivityController {

    private final ActivityService activityService;

    @PostMapping
    private ResponseEntity<ActivityResponse> trackActivity(@RequestBody ActivityRequest activityRequest, @RequestHeader("X-User-ID") String userId){
        if (userId != null) {
            activityRequest.setUserId(userId);
        }
        return ResponseEntity.ok(activityService.trackActivity(activityRequest));
    }

    @GetMapping
    private ResponseEntity<List<ActivityResponse>> getUserActivities(@RequestHeader("X-User-ID") String userId){
        return ResponseEntity.ok(activityService.getUserActivities(userId));
    }

    @GetMapping("/{activityId}")
    private ResponseEntity<ActivityResponse> getActivity(@PathVariable("activityId") String id){
        return ResponseEntity.ok(activityService.getActivity(id));
    }
}
