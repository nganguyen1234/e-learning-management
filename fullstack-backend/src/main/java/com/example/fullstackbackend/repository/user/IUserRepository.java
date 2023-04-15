package com.example.fullstackbackend.repository.user;

import com.example.fullstackbackend.model.user.User;
import jdk.nashorn.internal.runtime.options.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User,Integer> {
    public Optional<User> findByUsername(String username);
}
