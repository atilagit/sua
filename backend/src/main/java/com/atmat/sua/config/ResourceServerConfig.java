package com.atmat.sua.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
	
	@Autowired
	private Environment environment;
	
	@Autowired
	private JwtTokenStore tokenStore;
	
	private static final String[] PUBLIC_ROUTES = {"/oauth/token", "/h2-console/**"};
	private static final String[] BASIC_ROUTES = {"/employees/**"};
	private static final String[] OPERATOR_OR_ADMIN_ROUTES = {"/clients/**", "/providers/**", "/postings/**"};
	private static final String BASIC = "BASIC";
	private static final String OPERATOR = "OPERATOR";
	private static final String ADMIN = "ADMIN";
	

	@Override
	public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
		resources.tokenStore(tokenStore);
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		
		//H2
		if (Arrays.asList(environment.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}
		
		http.authorizeRequests()
		.antMatchers(PUBLIC_ROUTES).permitAll()
		.antMatchers(HttpMethod.GET, BASIC_ROUTES).hasAnyRole(BASIC, OPERATOR, ADMIN)
		.antMatchers(HttpMethod.POST, BASIC_ROUTES).hasAnyRole(OPERATOR, ADMIN)
		.antMatchers(HttpMethod.PUT, BASIC_ROUTES).hasAnyRole(OPERATOR, ADMIN)
		.antMatchers(BASIC_ROUTES).hasRole(ADMIN)
		.antMatchers(HttpMethod.GET, OPERATOR_OR_ADMIN_ROUTES).hasAnyRole(OPERATOR, ADMIN)
		.antMatchers(OPERATOR_OR_ADMIN_ROUTES).hasRole(ADMIN)
		.anyRequest().authenticated();
	}

	
}
