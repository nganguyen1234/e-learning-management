package com.example.fullstackbackend.filter;

import com.example.fullstackbackend.model.user.MyUserDetails;
import com.example.fullstackbackend.repository.user.IUserRepository;
import com.example.fullstackbackend.util.JwtUtil;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final IUserRepository userRepository;
    public JwtFilter(JwtUtil jwtUtil, IUserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//Get authorization header and validate
        if (request.getCookies() == null) {
            filterChain.doFilter(request, response);
            return;
        }        final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (header==null|| !header.startsWith("Bearer")) {
            filterChain.doFilter(request, response);
            return;
        }

        //Get jwt token and validate
        final String token = header.split(" ")[1].trim();
        if (!jwtUtil.validateToken(token)) {
            filterChain.doFilter(request, response);
            return;
        }

        //Get user identity and set on the spring security context
        UserDetails userDetails = userRepository.findByUsername(jwtUtil.getUsernameFromToken(token)).orElse(null);

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                userDetails, null,
                userDetails == null ? new ArrayList<>() : userDetails.getAuthorities()
        );
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        filterChain.doFilter(request,response);
    }

}
