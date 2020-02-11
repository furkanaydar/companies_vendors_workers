package com.project.demo.service.impl;

import com.project.demo.model.User;
import com.project.demo.repository.UsersRepository;
import com.project.demo.security.UserPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UsersRepository usersRepository;

    public UserDetailsServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersRepository.findByUsername(username);
        return UserPrincipal.create(user);
    }

    public UserDetails loadUserById(Long id) {
        User user = usersRepository.findBy_id(id);
        return UserPrincipal.create(user);
    }
}