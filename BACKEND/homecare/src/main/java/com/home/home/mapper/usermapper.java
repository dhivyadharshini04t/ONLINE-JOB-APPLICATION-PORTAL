package com.home.home.mapper;

import com.home.home.dto.userdto;
import com.home.home.model.Usermodel;


public class usermapper {

    public static userdto mapToDto(Usermodel serviceEntity) {
        // Implement the mapping logic
        return new userdto(
                serviceEntity.getId(),
                serviceEntity.getName(),
                serviceEntity.getEmail(),
                serviceEntity.getDob(),
                serviceEntity.getGender(),
                serviceEntity.getAddress(),
                serviceEntity.getMobileno(),
                serviceEntity.getEducation(),
                serviceEntity.getWorkexperience(),
                serviceEntity.getSkills()
        );
    }

    public static Usermodel mapToEntity(userdto serviceDto) {
        // Implement the mapping logic
        return new Usermodel(
                serviceDto.getId(),
                serviceDto.getName(),
                serviceDto.getEmail(),
                serviceDto.getDob(),
                serviceDto.getGender(),
                serviceDto.getAddress(),
                serviceDto.getMobileno(),
                serviceDto.getEducation(),
                serviceDto.getWorkexperience(),
                serviceDto.getSkills()
        );
    }
}
