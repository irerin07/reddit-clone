package irerin07.security;

import irerin07.domain.User;
import irerin07.repository.UserRepository;
import irerin07.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RedditUserDetailsService implements UserDetailsService {

    private final UserService userService;
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.findUserByEmail(email);
        if(user == null) {
            throw new UsernameNotFoundException(email + "과 일치하는 유저가 없습니다.");
        }
        return null;
    }
}
