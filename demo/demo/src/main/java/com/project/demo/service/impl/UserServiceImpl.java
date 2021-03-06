package com.project.demo.service.impl;

import com.project.demo.model.User;
import com.project.demo.repository.UsersRepository;
import com.project.demo.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UsersRepository usersRepository;
    public UserServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public User findUserById(Long id) {
        return usersRepository.findBy_id(id);
    }

    @Override
    public User findUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    @Override
    public User findUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    @Override
    public User saveUser(User user) {
        return usersRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return usersRepository.findAll();
    }
}