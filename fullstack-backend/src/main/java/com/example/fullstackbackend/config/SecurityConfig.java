package com.example.fullstackbackend.config;

import com.example.fullstackbackend.filter.JwtFilter;

import com.example.fullstackbackend.model.user.User;
import com.example.fullstackbackend.service.user.MyUserDetailsService;
import com.example.fullstackbackend.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomPasswordEncoder customPasswordEncoder;
    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Override
    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder authentication) throws Exception {

        authentication.userDetailsService(myUserDetailsService).passwordEncoder(customPasswordEncoder.getPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().configurationSource(corsConfigurationSource());
        http = http.csrf().disable().cors().disable();
        http = http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and();
        http = http.exceptionHandling()
                .authenticationEntryPoint((request, response, authException) -> {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
                }).and();
        http.authorizeRequests()
//                .antMatchers("/authentication/**").permitAll()
//                .antMatchers("/teacher/get-personal-info/**").permitAll()
//                .antMatchers("/teacher/**").permitAll()
                .antMatchers("/**").permitAll()
                .anyRequest().authenticated();

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    //
//    private IUserRepository userRepository;
//    private JwtFilter jwtFilter;
//
//    public SecurityConfig(IUserRepository userRepository, JwtFilter jwtFilter) {
//        this.userRepository = userRepository;
//        this.jwtFilter = jwtFilter;
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//
//
//        auth.userDetailsService(username -> userRepository
//                .findByUsername(username).orElseThrow(
//                        () -> new UsernameNotFoundException("Invalid Username")
//                ));
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        //Enable CORS and disable CSRF
//        http = http.cors().and().csrf().disable();
//
//        //Set session management to stateless
//        http = http.sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and();
//
//        //Set unauthorized requests exception handler
//        http = http.exceptionHandling()
//                .authenticationEntryPoint(
//                        ((request, response, ex) -> {
//                            response.sendError(
//                                    HttpServletResponse.SC_UNAUTHORIZED,
//                                    ex.getMessage()
//                            );
//                        })
//                ).and();
//
//        //Set permissions on endpoints
//        http.authorizeRequests()
//                .antMatchers("/").permitAll()
//                //Our private endponits
//                        .anyRequest().authenticated();
//
//        //Add JWT token filter
//        http.addFilterBefore(
//                jwtFilter,
//                UsernamePasswordAuthenticationFilter.class
//        );
//    }
//
//    //Used by Spring Security if CORS is enabled
//    public CorsFilter corsFilter(){
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true);
//        config.addAllowedOrigin("*");
//        config.addAllowedHeader("*");
//        config.addAllowedMethod("*");
//        source.registerCorsConfiguration("/**",config);
//        return new CorsFilter(source);
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Override
//    @Bean
//    public AuthenticationManager authenticationManager() throws Exception{
//        return super.authenticationManager();
//    }
}
