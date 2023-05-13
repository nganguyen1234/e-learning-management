package com.example.fullstackbackend.controller;

import ch.qos.logback.core.util.Duration;
import com.example.fullstackbackend.dto.AuthorityRequest;
import com.example.fullstackbackend.model.user.MyUserDetails;
import com.example.fullstackbackend.model.user.User;
import com.example.fullstackbackend.util.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication")
@CrossOrigin("*")
public class AuthorityController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;

    //    public AuthorityController(AuthenticationManager authenticationManager, JwtUtil jwtUtil){
//        this.authenticationManager= authenticationManager;
//        this.jwtUtil = jwtUtil;
//
//    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthorityRequest authorityRequest) {
        try {
            Authentication authenticate = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authorityRequest.getUsername(), authorityRequest.getPassword()
                    )
            );
            MyUserDetails user = (MyUserDetails) authenticate.getPrincipal();
            String token = jwtUtil.generateToken(user);
            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                    .domain("localhost")
                    .path("/")
                    .maxAge(Duration.buildByDays(365).getMilliseconds())
                    .build();
            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, cookie.toString())
                    .body(token);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    @GetMapping("/logout")
    public ResponseEntity<?> logout () {
        ResponseCookie cookie = ResponseCookie.from("jwt", "")
                .domain("localhost")
                .path("/")
                .maxAge(0)
                .build();
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString()).body("");
    }
    public ResponseEntity<?> validateToken(@CookieValue(name = "jwt") String token, @AuthenticationPrincipal User user) {
        try {
            Boolean isValidToken = jwtUtil.validateToken(token, user);
            return ResponseEntity.ok(isValidToken);
        } catch (ExpiredJwtException e) {
            return ResponseEntity.ok(false);
        }
    }

}
