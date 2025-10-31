package com.fitness.ActivityService.config;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Value("${rabbitmq.queue.name}")
    private String queue;

    @Value("${rabbitmq.exchange.name}")
    private String exchange;

    @Value("${rabbitmq.routing.key}")
    private String routing;


    @Bean
    public Queue activityQueue(){
        return new Queue(queue,true);
    }

    @Bean
    public DirectExchange activityExchange(){
        return new DirectExchange(exchange);
    }

    @Bean
    public Binding activityBinding(Queue queue,DirectExchange exchange){
        return BindingBuilder.bind(queue).to(exchange).with(routing);
    }

    @Bean
    public MessageConverter jsonConvertor(){
        return  new Jackson2JsonMessageConverter();
    }
}
