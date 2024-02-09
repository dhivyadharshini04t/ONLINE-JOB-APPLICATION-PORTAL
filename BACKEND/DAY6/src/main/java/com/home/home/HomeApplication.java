package com.home.home;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication


@OpenAPIDefinition(
		info =@Info(
				title = "Job Nest",
				version = "1.1.2",
				description = "Where Dream Meets Carrer",
				contact = @Contact(
						name = "Dhivya Dharshini",
						email = "dhivyadharshini04t@gmail.com"
						)
				)
		)
public class HomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeApplication.class, args);
	}

}
